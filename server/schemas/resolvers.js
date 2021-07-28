const { AuthenticationError } = require('apollo-server-express');
const { User, Comment, Album } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getUsers: async () => {
      return User.find().populate('favorites', 'comments');
      // return User.find().populate('favorites').populate('comments');
    },

    getSingleUser: async (parent, { username }) => {
      return User.findOne({ username }).populate('favorites', 'comments');
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('favorites', 'comments');
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    getComments: async(parent, { apiAlbumID }) => {
      return Comment.find().populate('postedBy', 'albumCommented');
    },

    getUserComments: async(parent, args, context) => {
      if (context.user) {
        const userData = await (await User.findOne({_id: context.user._id})).populated('comments');

        return userData.comments;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    getAlbums: async() => {
      return Album.find().populate('comments');
    },

    getFavoritedAlbums: async(parent, args, context) => {
      if(context.user){
        const userData = await User.findOne({ _id: context.user._id }).populate('favorites');
        
        // let userAlbums = [];
        // userData.favorites.map((album) => {
        //   const albumData = await Album.findOne({ _id: album._id });
        //   userAlbums.push(albumData);
        // })

        // return userAlbums;

        return userData.favorites;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    getSingleAlbum: async(parent, { albumID }) => {
      return Album.findOne({ _id: albumID }).populate('comments');
    }
  },

  Mutation: {
    addUser: async (parent, { name, username, email, password, location, bio, proPic }) => {
      const user = await User.create({ name, username, email, password, location, bio, proPic });
      const token = signToken(user);
      return { token, user };
    },

    updateUser: async (parent, { name, username, email, password, location, bio, proPic }, context) => {
      if(context.user){
        const user = await User.findByIdAndUpdate(
          { _id: context.user._id},
          { $set : {
            name,
            username,
            email,
            password,
            location,
            bio,
            proPic
          }},
          {new: true}
        )
  
        const token = signToken(user);
        return { token, user }
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addNewFavorite: async (parent, { albumID }, context) => {
      if (context.user) {
        const newFavorite = await Album.findOne({_id: albumID})

        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {favorites: newFavorite}
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    deleteFavorite: async (parent, { albumID }, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).populate('favorites');

        userData.favorites.map((album) => {
          if(album._id === albumID){
            return User.findOneAndUpdate(
              {_id: context.user._id},
              {
                $pull: { favorites: album}
              },
              { new: true }
            )
          }
        })
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addComment: async (parent, { commentText, albumCommented}, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).populate('comments');
        const newComment = await Comment.create({ 
          commentText,
          postedBy: userData,
          albumCommented, 
        })

        return Album.findOneAndUpdate(
          { _id: albumCommented },
          {
            $addToSet: { comments: newComment}
          },
          { new: true }
        )

      }
      throw new AuthenticationError('You need to be logged in!');
    },

    editComment: async (parent, { commentID, commentText, commentDate }, context) => {
      if (context.user) {
        return Comment.findOneAndUpdate(
          {_id: commentID},
          { $set : {commentText: commentText}},
          { new: true }
        )
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    deleteComment: async (parent, { commentID }, context) => {
      if (context.user) {
        const userData = User.findOne({ _id: context.user._id }).populate('comments');

        userData.comments.map((comment) => {
          if(comment._id === commentID){
            const index = userData.comments.indexOf(comment);
            userData.comments.splice(index, 1)
          }
        })

        return Comment.findOneAndDelete({_id: commentID})
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
};

module.exports = resolvers;
