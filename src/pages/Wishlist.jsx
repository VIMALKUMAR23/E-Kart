import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";

function Wishlist() {
  const wishListItem = useSelector((state) => state.wishlistReducer);
  console.log("======wishlist=======//");
  console.log(wishListItem);
  const dispatch = useDispatch();
  //cart
  const handleWishlist=(item)=>{
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item.id));
  }
  return (
    <>
      <button className="btn btn-success mt-4 ms-4">
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          <i class="fa-solid fa-arrow-left me-2"></i>
          BACK TO HOME
        </Link>
      </button>
      <Row className="m-5">
        {
          wishListItem?.length > 0 ? (
          wishListItem.map((item) => (
            <Col sm={12} md={6} lg={4} xl={3} className="mb-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.image} height={"200px"} className="p-3" />
                <Card.Body>
                  <Card.Title>{item.title.slice(0, 20)}</Card.Title>
                  <Card.Text>
                    <p>{item.description.slice(0, 50)}...</p>
                    <p>Price: &#x20B9;{item.price}</p>
                  </Card.Text>
                  <div className="d-flex align-item-center justify-content-between">
                    <Button variant="outline-danger" onClick={() => dispatch(removeFromWishlist(item.id))}>
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                    <Button variant="outline-success" onClick={()=>handleWishlist(item)}>
                      <i class="fa-solid fa-cart-shopping" ></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div style={{height:'100vh'}} className="d-flex align-items-center flex-column">
          <img src="https://www.hamropharma.com/f8039202dbc38a84732a9b1a90435e49.gif" alt="cart is empty" />
            <h3 className="text-danger fw-bolder">Your cart is empty</h3>
          </div>
        )}
      </Row>
    </>
  );
}

export default Wishlist;
