import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import { emptyCart, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate= useNavigate();
const [total,setTotal]=useState(0);
const getTotal=( )=>{
  let sum=0;
  cartArray.forEach((item)=>{
    sum=sum+item.price;
  })
  setTotal(sum)
}
useEffect(()=>{
  getTotal();
},[cartArray])
  console.log("=====cartArray=======");
  console.log(cartArray);
  const handleCart=()=>{
    alert("Thank you .. your order placed successfully");
    dispatch(emptyCart())
    navigate('/')
  }
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        {cartArray?.length > 0 ? (
          <div className="row w-100">
            <div className="col-lg-6 m-5">
              <table className="table shadow border">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Title</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartArray?.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.title.slice(0, 20)}...</td>
                      <td>
                        <img src={item.image} alt={item.title} style={{ width: "50px", height: "50px" }} />
                      </td>
                      <td>Price: ₹{item.price}</td>
                      <td>
                        <Button variant="outline-danger" onClick={() => dispatch(removeFromCart(item.id))}>
                          <i className="fa-solid fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-lg-4">
              <div className="border shadow p-5">
                <h3 className="text-primary">cart summary</h3>
                <h4>
                  Total number of products: <span className="text-warning fw-bolder">{cartArray?.length}</span>
                </h4>
                <h5>
                  Total price: <span className="text-warning fw-bolder">₹{total}</span>
                </h5>
                <button className="btn btn-success rounded w-100" onClick={handleCart}>CHECKOUT</button>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ height: "100vh" }} className="d-flex align-items-center flex-column">
            <img src="https://www.hamropharma.com/f8039202dbc38a84732a9b1a90435e49.gif" alt="cart is empty" />
            <h3 className="text-danger fw-bolder">Your cart is empty</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
