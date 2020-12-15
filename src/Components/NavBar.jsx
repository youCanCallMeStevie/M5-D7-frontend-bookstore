import React from 'react'
import { Navbar, Nav} from "react-bootstrap";

const NavBar = () => {
   
  return(
    <div>
        <Navbar bg="secondary" variant="dark">
            <Navbar.Brand href="#home">Strive Book Store</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#" className="active">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
            
        </Navbar>
   
    </div>
)
}

export default NavBar
