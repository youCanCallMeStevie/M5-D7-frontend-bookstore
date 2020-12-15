import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitterSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { Col, Container, Row } from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <div className="footer__container">
        <Container className="px-4">
          <Row>
            <Col>
              <h6>Audio & Screen Readers</h6>
              <h6>Media Centre</h6>
              <h6>Privacy Policy</h6>
              <h6>Help Centre</h6>
            </Col>
            <Col>
              <h6>Audio Description</h6>
              <h6>Investor Relations</h6>
              <h6>Legal Notices</h6>
              <h6>Contact Us</h6>
            </Col>
            <Col>
              <h6>Gift Cards</h6>
              <h6>Terms of Use</h6>
              <h6>Coporate Information</h6>
              <h6>Partnerships</h6>
            </Col>
            <Col>
              <h6>Follow Us</h6>
                <h6><FontAwesomeIcon icon={faFacebookSquare} /></h6>
                <h6><FontAwesomeIcon icon={faInstagram} /></h6>
                <h6><FontAwesomeIcon icon={faTwitterSquare} /></h6>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
