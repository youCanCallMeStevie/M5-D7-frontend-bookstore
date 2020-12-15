import React, { Component } from "react";
import { Spinner, Col, Button, Alert, Form, Row, Container } from "react-bootstrap";
import Fantasy from "../Data/fantasy.json";
import Horror from "../Data/horror.json";
import History from "../Data/history.json";
import Romance from "../Data/romance.json";
import Scifi from "../Data/scifi.json";

const url = "https://striveschool-api.herokuapp.com/api/comments/";
const header =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NjhlNjk4MzViMDAwMTc1ODRlZTciLCJpYXQiOjE2MDU3ODk5MjYsImV4cCI6MTYwNjk5OTUyNn0.4C10FpKd6Z_zglQM7bO9F87KNlDxjd5t-7JQnKV6WR0";

export class CommentArea extends Component {
  state = {
    books: Fantasy,
    category: "Fantasy",
    comment: {
      name: "",
      review: "",
      rating: "",
      elementID: "",
    },
    errMessage: "",
    loading: false,
  };

  updateCommentField = (e) => {
    let comment = { ...this.state.comment }; // creating a copy of the current state
    let currentId = e.currentTarget.id; // 'name', 'phone', etc.

    if ((comment[currentId] = e.currentTarget.value))
      // e.currentTarget.value is the keystroke

      //reservation['name'] --> reservation.name = 'S'
      //reservation['phone'] --> reservation.phone = '3'
      this.setState({ comment: comment });
  };

  submitComment = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(this.state.reservation),
        headers: new Headers({
          Authorization: header,
          "Content-Type": "application/json",
        }),
      });
      if (response.ok) {
        alert("Comment saved!");
        this.setState({
          comment: {
            name: "",
            review: "",
            rating: "",
            elementID: "",
          },
          errMessage: "",
          loading: false,
        });
      } else {
        console.log("an error occurred");
        let error = await response.json();
        this.setState({
          errMessage: error.message,
          loading: false,
        });
      }
    } catch (e) {
      console.log(e); // Error
      this.setState({
        errMessage: e.message,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.errMessage && (
          <Alert variant="danger">
            We encountered a problem with your request
            {this.state.errMessage}
          </Alert>
        )}
        {this.state.loading && (
          <div className="d-flex justify-content-center my-5">
            Reserving your table, please wait
            <div className="ml-2">
              <Spinner animation="border" variant="success" />
            </div>
          </div>
        )}
        <Container>
        <Form className="w-100 mb-5" onSubmit={this.submitComment}>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  value={this.state.comment.name}
                  onChange={this.updateCommentField}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="rating">Rating</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  max="5"
                  name="rating"
                  id="rating"
                  placeholder="How Many Stars"
                  required
                  value={this.state.comment.rating}
                  onChange={this.updateCommentField}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group>
                <Form.Label htmlFor="review">Book Review</Form.Label>
                <Form.Control
                  type="text"
                  name="review"
                  id="review"
                  placeholder="Let other readers know  what you thought of this book!"
                  value={this.state.comment.review}
                  onChange={this.updateCommentField}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <Form.Group>
                <Form.Label htmlFor="elementID">Asin Number</Form.Label>
                <Form.Control
                  type="number"
                  name="elementID"
                  id="elementID"
                  value={this.state.comment.elementID}
                  onChange={this.updateCommentField}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit">Submit</Button>
        </Form>
        </Container>
      </div>
    );
  }
}

export default CommentArea;
