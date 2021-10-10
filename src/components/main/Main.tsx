import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Row, Card, Button, Spinner } from "react-bootstrap";
import "../../style/fonts.css";
import { Link } from "react-router-dom";

/* STYLE */
const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  margin-top: 70px;
  font-family: "Roboto Mono", monospace;
  font-size: 48px;
  color: #555555;
  border-bottom: 3px solid #333333;
  letter-spacing: 5px;
  padding-bottom: 20px;
  text-transform: uppercase;

  @media (max-width: 760px) {
    font-size: 38px;
  }
`;

const Explain = styled.span`
  margin-top: 20px;
  font-family: "Noto Sans JP", sans-serif;
  word-spacing: 3px;
  letter-spacing: 2px;
  text-align: center;
  line-height: 2;
`;

const GridContainer = styled(Container)`
  margin: 50px 0;
  text-align: center;
  @media (max-width: 760px) {
    width: 400px;
  }
  @media (min-width: 760px) {
    width: 660px;
  }
  @media (min-width: 992px) {
    width: 700px;
  }
  @media (min-width: 1200px) {
    width: 700px;
  }
`;

const MainCard = styled(Card)`
  margin: 10px;
  .card-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .card-title.h5 {
    white-space: nowrap;
    overflow: hidden;
  }
  img {
    object-fit: cover;
  }
  @media (max-width: 760px) {
    height: 250px;
    img {
      height: 200px;
    }
    .card-title.h5 {
      display: none;
    }
  }
  @media (min-width: 760px) {
    height: 300px;
    img {
      height: 200px;
    }
  }
  @media (min-width: 992px) {
    height: 400px;
    img {
      height: 300px;
    }
  }
  @media (min-width: 1200px) {
    height: 400px;
    img {
      height: 300px;
    }
  }
`;

const GoPostsButton = styled(Button)`
  margin-bottom: 60px;
  margin-top: 10px;
`;

const MainSpinner = styled(Spinner)`
  margin: 150px;
`;

const Main = () => {
  /* USE STATE */
  const [init, setInit] = useState(false);
  /* INIT SETTING */
  useEffect(() => {
    setInit(false);
    setTimeout(() => {
      setInit(true);
    }, 500);
  }, []);
  return (
    <>
      {init ? (
        <>
          <MainContainer>
            <Title>Hello World!!</Title>
            <Explain>
              The World is waiting for your News!
              <br />
              Find your Enteresting in My Space!
            </Explain>
            <GridContainer>
              <Row xs={1} sm={2}>
                <div>
                  <MainCard aria-hidden="true">
                    <Card.Img variant="top" src="./images/12.jpg" />
                    <Card.Body>
                      <Card.Text>Wow! Bootstrap is So Wonderful!</Card.Text>
                      <Card.Title>LEE HAN</Card.Title>
                    </Card.Body>
                  </MainCard>
                </div>
                <div>
                  <MainCard>
                    <Card.Img variant="top" src="./images/13.jpg" />
                    <Card.Body>
                      <Card.Text>Wow! Bootstrap is So Wonderful!</Card.Text>
                      <Card.Title>LEE HAN</Card.Title>
                    </Card.Body>
                  </MainCard>
                </div>
                <div>
                  <MainCard>
                    <Card.Img variant="top" src="./images/14.jpg" />
                    <Card.Body>
                      <Card.Text>Wow! Bootstrap is So Wonderful!</Card.Text>
                      <Card.Title>LEE HAN</Card.Title>
                    </Card.Body>
                  </MainCard>
                </div>
                <div>
                  <MainCard>
                    <Card.Img variant="top" src="./images/15.jpg" />
                    <Card.Body>
                      <Card.Text>Wow! Bootstrap is So Wonderful!</Card.Text>
                      <Card.Title>LEE HAN</Card.Title>
                    </Card.Body>
                  </MainCard>
                </div>
              </Row>
            </GridContainer>
            <Link to="/lihano-board/posts/1">
              <GoPostsButton variant="secondary" size="lg">
                Show More Posts!
              </GoPostsButton>
            </Link>
          </MainContainer>
        </>
      ) : (
        <>
          <MainSpinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </MainSpinner>
        </>
      )}
    </>
  );
};

export default Main;