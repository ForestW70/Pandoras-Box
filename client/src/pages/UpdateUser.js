import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import UserSettings from '../components/UserSettings';
import SettingsUpdate from '../components/SettingsUpdate';

import {
  Card,
  ListGroup,
  Row,
  Container
} from "react-bootstrap";

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const UpdateUser = ({ userDetails }) => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  // redirect to personal profile page if username is yours
  const user = data?.me || data?.user || {};
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <Container fluid="sm">
      <Card small className="mb-4">
        <Card.Header className="border-bottom">
          <h6 className="m-0">{user.username}'s Profile</h6>
        </Card.Header>
        <ListGroup flush >
          <Row>
          <UserSettings />
          <SettingsUpdate />
          </Row>
        </ListGroup>
      </Card>
    </Container>
  );
};



export default UpdateUser;
