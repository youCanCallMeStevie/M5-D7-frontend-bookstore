import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import MyBadge from "./MyBadge.jsx";
import {
  Row,
  Dropdown,
  Container,
  InputGroup,
  FormControl,
  DropdownButton,
} from "react-bootstrap";
import Fantasy from "../Data/fantasy.json";
import Horror from "../Data/horror.json";
import History from "../Data/history.json";
import Romance from "../Data/romance.json";
import Scifi from "../Data/scifi.json";
import SingleBook from "./SingleBook";
import { fetchBooks } from "../utils";

let bookCategories = ["fantasy", "horror", "history", "romance", "scifi"];
let books = {
  Fantasy,
  Horror,
  History,
  Romance,
  Scifi,
};

class SpecialReleases extends React.Component {
  state = {
    books: [],
    categorySelected: "fantasy",
  };

  selectBook = e => {
    const element = e.currentTarget;
    element.classList.toggle("selectedCard");
  };
  componentDidMount = async () => {
    const books = await fetchBooks();
    this.setState({ books: books, allBooks: books });
  };

  handleDropdownChange = category => {
    let bookCategory = this.state.allBooks.filter(
      book => book.category === category
    );
    this.setState({ books: bookCategory, categorySelected: category });
    console.log("books", this.state.books);
    console.log("category", this.state.categorySelected);
  };

  handleSearchQuery = searchQuery => {
    if (searchQuery) {
      console.log(searchQuery);
      let filteredBooks = this.state.books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      this.setState({ books: filteredBooks });
      console.log(filteredBooks);
    } else {
      this.setState({ books: Fantasy });
    }
  };
  render() {
    return (
      <Container>
        <InputGroup>
          <DropdownButton
            as={InputGroup.Prepend}
            id="dropdown-basic-button"
            className="mb-3"
            title={this.state.categorySelected}
          >
            {bookCategories.map((category, index) => {
              return (
                <Dropdown.Item
                  href=""
                  key={`dropdown-category-${index}`}
                  onClick={() => this.handleDropdownChange(category)}
                >
                  {category}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
          <FormControl
            placeholder="Search Books by Title"
            aria-label="Search"
            aria-describedby="basic-addon1"
            onChange={e => this.handleSearchQuery(e.target.value)}
          />
        </InputGroup>
        <h1>{this.state.categorySelected}</h1>
        {/* <div>{this.state.books.map((book) => book.title)}</div> */}
        <Row className="mt-4">
          {this.state.books ? (
            this.state.books.map(item => {
              return (
                <Col xs={1} md={3} lg={2}>
                  <Card className="card, mb-2">
                    <div className="card-img ">
                      <img
                        className="card-img-top"
                        src={item.img}
                        alt={item.title}
                        onClick={this.selectBook}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    </div>
                    <div className="card-body">
                      <MyBadge category={item.category} />
                      <h6 className="bookTitle">{item.title}</h6>
                      <Button className="btn-warning">€{item.price}</Button>
                    </div>
                  </Card>
                </Col>
              );
            })
          ) : (
            <div> Nothing here </div>
          )}
        </Row>
      </Container>
    );
  }
}
export default SpecialReleases;
