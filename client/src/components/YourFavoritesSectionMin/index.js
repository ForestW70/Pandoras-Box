import React from 'react';
import { Container, Col, Card} from "react-bootstrap";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//settings var for the slider
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

    const YourFavoritesMin = ({ songs = [] }) => {

        if (!songs.length) {
          return (
          <Container>
            <Col>
              <h3
                className="p-3 pt-5 float-right"
              >
              Your Favorites Tracks !
              </h3>
                <Slider {...settings}> 
                    <Col>
                        <Card className="mx-3">
                            <Card.Body className="p-0">
                                <div className="embed-responsive">
                                <Card.Img
                                  className="card-img-top embed-responsive-item"
                                  variant="Top"
                                  name="songName"
                                  src="https://via.placeholder.com/150"
                                />
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <p>
                                Song Title
                                </p>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mx-3">
                            <Card.Body className="p-0">
                                <div className="embed-responsive">
                                <Card.Img
                                  className="card-img-top embed-responsive-item"
                                  variant="Top"
                                  name="songName"
                                  src="https://via.placeholder.com/150"
                                />
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <p>
                                Song Title
                                </p>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mx-3">
                            <Card.Body className="p-0">
                                <div className="embed-responsive">
                                <Card.Img
                                  className="card-img-top embed-responsive-item"
                                  variant="Top"
                                  name="songName"
                                  src="https://via.placeholder.com/150"
                                />
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <p>
                                Song Title
                                </p>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mx-3">
                            <Card.Body className="p-0">
                                <div className="embed-responsive">
                                <Card.Img
                                  className="card-img-top embed-responsive-item"
                                  variant="Top"
                                  name="songName"
                                  src="https://via.placeholder.com/150"
                                />
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <p>
                                Song Title
                                </p>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mx-3">
                            <Card.Body className="p-0">
                                <div className="embed-responsive">
                                <Card.Img
                                  className="card-img-top embed-responsive-item"
                                  variant="Top"
                                  name="songName"
                                  src="https://via.placeholder.com/150"
                                />
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <p>
                                Song Title
                                </p>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mx-3">
                            <Card.Body className="p-0">
                                <div className="embed-responsive">
                                <Card.Img
                                  className="card-img-top embed-responsive-item"
                                  variant="Top"
                                  name="songName"
                                  src="https://via.placeholder.com/150"
                                />
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <p>
                                Song Title
                                </p>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mx-3">
                            <Card.Body className="p-0">
                                <div className="embed-responsive">
                                <Card.Img
                                  className="card-img-top embed-responsive-item"
                                  variant="Top"
                                  name="songName"
                                  src="https://via.placeholder.com/150"
                                />
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <p>
                                Song Title
                                </p>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mx-3">
                            <Card.Body className="p-0">
                                <div className="embed-responsive">
                                <Card.Img
                                  className="card-img-top embed-responsive-item"
                                  variant="Top"
                                  name="songName"
                                  src="https://via.placeholder.com/150"
                                />
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <p>
                                Song Title
                                </p>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mx-3">
                            <Card.Body className="p-0">
                                <div className="embed-responsive">
                                <Card.Img
                                  className="card-img-top embed-responsive-item"
                                  variant="Top"
                                  name="songName"
                                  src="https://via.placeholder.com/150"
                                />
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <p>
                                Song Title
                                </p>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mx-3">
                            <Card.Body className="p-0">
                                <div className="embed-responsive">
                                <Card.Img
                                  className="card-img-top embed-responsive-item"
                                  variant="Top"
                                  name="songName"
                                  src="https://via.placeholder.com/150"
                                />
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <p>
                                Song Title
                                </p>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mx-3">
                            <Card.Body className="p-0">
                                <div className="embed-responsive">
                                <Card.Img
                                  className="card-img-top embed-responsive-item"
                                  variant="Top"
                                  name="songName"
                                  src="https://via.placeholder.com/150"
                                />
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <p>
                                Song Title
                                </p>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mx-3">
                            <Card.Body className="p-0">
                                <div className="embed-responsive">
                                <Card.Img
                                  className="card-img-top embed-responsive-item"
                                  variant="Top"
                                  name="songName"
                                  src="https://via.placeholder.com/150"
                                />
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <p className="">
                                Song Title
                                </p>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Slider>
            </Col>
          </Container>
          )
        }

        return (
            <Container>
                <Col>
                  <h3
                    className="p-3 pt-5 float-right"
                  >
                  Your Favorites Tracks !
                  </h3>
                    <Slider {...settings}> 
                        {songs.map((song) => (
                            <Col>
                                <Card className="mr-3" key={song._id}>
                                    <Card.Body className="p-0">
                                        <div className="embed-responsive">
                                        <Card.Img
                                          className="card-img-top embed-responsive-item"
                                          variant="Top"
                                          name="songName"
                                          src={song.poster_path}
                                        />
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <p>
                                        {song.title}
                                        </p>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Slider>
                </Col>
            </Container>
        );
      };

export default YourFavoritesMin;