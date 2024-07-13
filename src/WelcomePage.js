// src/WelcomePage.js
import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Container = styled.div`
  min-height: 100vh;
  padding: 20px;
  background-color: #f9f9f9;
`;

const Header = styled.h1`
  font-size: 3rem;
  color: #333;
  text-align: center;
  margin-top: 50px;
`;

const Subheader = styled.p`
  font-size: 1.5rem;
  color: #555;
  text-align: center;
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 30px;
`;

const WelcomePage = () => {
  return (
    <Container className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <Header>Welcome to Imanjosh's & Kia's Project S</Header>
          <Subheader>Come with us on this journey of creating this full-stack application</Subheader>
          <Card>
            <h2>Featured Video 1</h2>
            <p>Description of our featured video goes here.</p>
            <a href="#" className="btn btn-primary">View Video</a>
          </Card>
          <Card>
            <h2>Featured Video 2</h2>
            <p>Description of our featured video goes here.</p>
            <a href="#" className="btn btn-primary">View Video</a>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default WelcomePage;
