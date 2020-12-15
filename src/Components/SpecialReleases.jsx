import React from "react";
import { Row, Dropdown, Container, InputGroup, FormControl, DropdownButton } from "react-bootstrap";
import Fantasy from "../Data/fantasy.json";
import Horror from "../Data/horror.json";
import History from "../Data/history.json";
import Romance from "../Data/romance.json";
import Scifi from "../Data/scifi.json";
import SingleBook from "./SingleBook"


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
    books: Fantasy.slice(0, 12),
    categorySelected: "fantasy",
  };

  handleDropdownChange = (category) => {
    this.setState({
      books: books[category],
      categorySelected: category,
    });
  };

  handleSearchQuery = (searchQuery) => {
    
    if (searchQuery) {
        console.log(searchQuery)
      let filteredBooks = Fantasy.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      this.setState({ books: filteredBooks });
      console.log(filteredBooks)
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
                    href="#/action-1"
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
              onChange={(e) => this.handleSearchQuery(e.target.value)}
            />
          </InputGroup>

          <Row className="mt-4">
            {this.state.books ? (this.state.books.map((item) => { 
                
                    return (
                        <SingleBook title = {item.title} image ={item.img} key={item.asin} category={item.category} price={item.price}/>
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