import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        style={{ width: "100%", height: "300px" }}
        className="d-flex justify-content-center align-items-center flex-column mt-5 bg-primary"
      >
        <div className="d-flex justify-content-evenly align-items-center mb-5 w-100" style={{ color: "white" }}>
          <div style={{ width: "400px" }}>
            <h4>
              <i style={{ color: "white" }} class="fa-solid fa-cart-shopping fa-bounce me-3">
                {" "}
                E-KART
              </i>
            </h4>
            <h6>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tempore, modi odio ex sapiente tempora
              ducimus molestiae vero consequuntur delectus a accusamus numquam reprehenderit asperiores commodi quis
              aliquid, officiis ratione.
            </h6>
          </div>
          {/* 2nd div*/}
          <div className="d-flex flex-column">
            <h4>Links</h4>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
            <Link to={"/cart"} style={{ textDecoration: "none", color: "white" }}>
              Cart
            </Link>
            <Link to={"/wishlist"} style={{ textDecoration: "none", color: "white" }}>
              Wishlist
            </Link>
          </div>
          <div className="d-flex flex-column">
            <h4>Guides</h4>
            <Link to={"https://react.dev/"} target="_blank" style={{ textDecoration: "none", color: "white" }}>
              React
            </Link>
            <Link to={"https://react.dev/"} target="_blank" style={{ textDecoration: "none", color: "white" }}>
              React Bootstrap
            </Link>
            <Link to={"https://react.dev/"} target="_blank" style={{ textDecoration: "none", color: "white" }}>
              Boot Watch
            </Link>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="d-flex">
              <input type="text" className="form-control" placeholder="Enter Email Id" />
              <button className="btn btn-warning ms-2">SUBSCERIBE</button>
            </div>
            <div className="d-flex justify-content-evenly mt-3">
              <Link style={{ textDecoration: "none", color: "white" }}>
                <i class="fa-brands fa-instagram fa-2x"></i>
              </Link>
              <Link style={{ textDecoration: "none", color: "white" }}>
                <i class="fa-brands fa-facebook fa-2x "></i>
              </Link>
              <Link style={{ textDecoration: "none", color: "white" }}>
                <i class="fa-brands fa-discord fa-2x"></i>
              </Link>
              <Link style={{ textDecoration: "none", color: "white" }}>
                <i class="fa-brands fa-discord fa-2x"></i>
              </Link>
            </div>
          </div>
        </div>
        <p>Copyright &copy;2024 E-cart built with React Redux </p>
      </div>
    </>
  );
}

export default Footer;
