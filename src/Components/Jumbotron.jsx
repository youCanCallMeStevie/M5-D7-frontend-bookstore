import React, { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";

export class MyJumbotron extends Component {
  render() {
    return (
        <div>
          <Jumbotron className="mt-5">
            <Container>
              <h1>Strive Book Store</h1>
              <p>
                Quirky tag line coming atcha
              </p>
            </Container>
          </Jumbotron>
      </div>
    );
  };
  
}

export default MyJumbotron;
