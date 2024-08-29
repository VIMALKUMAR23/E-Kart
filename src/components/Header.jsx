import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";

function Header() {
  const wishlist= useSelector((state)=>state.wishlistReducer)

  const cart = useSelector((state)=>state.cartReducer)
  return (
    <>
      <Navbar expand="lg" className="bg-primary">
        <Container>
          <i style={{ color: "white" }} class="fa-solid fa-cart-shopping fa-bounce me-3"></i>
          <Navbar.Brand style={{ color: "white" }}>
            <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link to={"/cart"} style={{ color: "white", textDecoration: "none" }}>
                  Cart
                  <Badge bg="secondary" className="ms-1 fs-6">
                    {cart?.length}
                  </Badge>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/wishlist"} style={{ color: "white", textDecoration: "none" }}>
                  Wishlish
                  <Badge bg="secondary" className="ms-1 fs-6">
                    {wishlist?.length}
                  </Badge>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
