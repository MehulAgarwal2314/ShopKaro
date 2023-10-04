import React from "react";
import { useNavigate } from "react-router-dom";
import Jumbotron from "./Jumbotron";
import Footer1 from "./Footer1";
import items from "./items";
import Modal from "./Modal";
import { useState } from "react";
import Modal1 from "./Modal";

export default function Mycart({
  cart,
  onSearch,
  searchQuery,
  addToCart,
  handleClick,
  removeFromCart,
  calculateTotalPrice,
  handleQuantityChange,
  calculateTotalCartPrice,
  calculateTotalCartPriceWithAdditional,handleProductClick
}) {
  const navigate = useNavigate();
  const handleClick4 = () => navigate("/checkout");
  const handleClick5 = () => navigate("/");
  const handleClick3 = () => {
    navigate("/productlist");
  };
  const handy = () => navigate("/");
  const handy1 = () => navigate("/productlist");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [value1,setValue1]=useState("");
  const handleShow = () => {setShow(true); }

  return cart.length > 0 ? (
    <>
      <div>
        <header>
          {/* <Jumbotron  onSearch={onSearch} searchQuery={searchQuery}/> */}
          {/* Heading */}
          <div className="bg-primary">
            <div className="container py-4">
              {/* Breadcrumb */}
              <nav className="d-flex">
                <h6 className="mb-0">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={handy}
                    className="text-white-50"
                  >
                    Home
                  </a>
                  <span className="text-white-50 mx-2"> &gt; </span>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={handy1}
                    className="text-white-50"
                  >
                    Shop
                  </a>
                  <span className="text-white-50 mx-2"> &gt; </span>
                  <a style={{ cursor: "pointer" }} href className="text-white">
                    <u>My Cart</u>
                  </a>
                </h6>
              </nav>
              {/* Breadcrumb */}
            </div>
          </div>
          {/* Heading */}
        </header>
        {/* cart + summary */}
        <section className="bg-light my-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="card border shadow-0">
                  <div className="m-4">
                    <h4 className="card-title mb-4">Your shopping cart</h4>
                    {/* cart */}
                    {cart.map((item) => (
                      <div className="row gy-3 mb-4">
                        <div className="col-lg-5">
                          <div className="me-lg-5">
                            <div className="d-flex">
                              <img
                              onClick={()=>handleProductClick(item.id)}
                                src={item.image}
                                className="border rounded me-3"
                                style={{ width: "96px", height: "96px" }}
                              />
                              <div className>
                                <a href="#" className="nav-link">
                                  {item.name}
                                </a>
                                <p className="text-muted">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                          <div className>
                            <select
                              style={{ width: "100px" }}
                              className="form-select me-4"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item, e.target.value)}
                            >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div>
                          <div className>
                            <text className="h6">${calculateTotalPrice(item)}</text> <br />
                            <small className="text-muted text-nowrap">
                              {" "}
                              ${item.price1} / per item{" "}
                            </small>
                          </div>
                        </div>
                        <div className="col-lg ms-5 col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-center mb-2">
                          <div className=" float-md-end ms-5">
                            <a
                              style={{ width: "150px" }}
                              className="btn btn-light  border text-danger icon-hover-danger"
                              onClick={() => {
                                removeFromCart(item);
                              }}
                            >
                              {" "}
                              Remove
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-top pt-4 mx-4 mb-4">
                    <p>
                      <i className="fas fa-truck text-muted fa-lg" /> Free
                      Delivery within 1-2 weeks
                    </p>
                    <p className="text-muted">
                      Your order is eligible for free delivery. Avail this
                      service only on ShopKaro. Terms and conditions applied on
                      all deliveries. In case of any delivery issues, contact
                      our customer care which is available 24/7.
                    </p>
                  </div>
                </div>
              </div>

              {/* summary  */}
              <div class="col-lg-3">
                <div class="card mb-3 border shadow-0">
                  <div class="card-body">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div class="form-group">
                        <label class="form-label">Have coupon?</label>
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control border"
                            value={value1}
                            name=""
                            placeholder="Coupon code"
                            onChange={(e) => setValue1(e.target.value)}
                          />
                          <button
                            onClick={handleShow}
                            class="btn btn-light border"
                          >
                            Apply
                          </button>
                          <Modal1 show={show} handleClose={handleClose} value1={value1} />                          
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="card shadow-0 border">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="mb-2">Total price:</p>
                      <p class="mb-2">${calculateTotalCartPrice()}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                      <p class="mb-2">Discount:</p>
                      <p class="mb-2 text-success">-$10.00</p>
                    </div>
                    <div class="d-flex justify-content-between">
                      <p class="mb-2">TAX:</p>
                      <p class="mb-2">$14.00</p>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between">
                      <p class="mb-2">Total price:</p>
                      <p class="mb-2 fw-bold">${calculateTotalCartPriceWithAdditional()}</p>
                    </div>

                    <div class="mt-3">
                      <a
                        class="btn btn-success w-100 shadow-0 mb-2"
                        onClick={handleClick4}
                      >
                        {" "}
                        Make Purchase{" "}
                      </a>
                      <a
                        class="btn btn-light w-100 border mt-2"
                        onClick={handleClick3}
                      >
                        {" "}
                        Back to shop{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* summary */}
            </div>
          </div>
        </section>

        {/* cart + summary */}
        <section>
          <div className="container my-5">
            <header className="mb-4">
              <h3>Recommended items</h3>
            </header>
            <div className="row">
              {items.slice(0, 4).map((naya) => (
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card px-4 border shadow-0 mb-4 mb-lg-0">
                    <div className="mask px-2" style={{ height: "50px" }}>
                      <div className="d-flex justify-content-between">
                        <h6>
                          <span className="badge bg-danger pt-1 mt-3 ms-2">
                            New
                          </span>
                        </h6>
                      </div>
                    </div>
                    <a className>
                      <img
                      style={{cursor:"pointer"}}
                      onClick={()=>handleProductClick(naya.id)}
                        src={naya.image}
                        className="card-img-top rounded-2"
                      />
                    </a>
                    <div className="card-body d-flex flex-column pt-3 border-top">
                      <a href="#" className="nav-link">
                        {naya.name}
                      </a>
                      <div className="price-wrap mb-2">
                        <strong className>{naya.price}</strong>
                        <del className>$24.99</del>
                      </div>
                      <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                        <a
                          className="btn btn-light btn-outline-primary w-100"
                          onClick={() => {
                            handleClick();
                            addToCart(naya);
                          }}
                        >
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer1 />
    </>
  ) : (
    <>
      <header>
        {/* <Jumbotron  onSearch={onSearch} searchQuery={searchQuery}/> */}
        {/* Heading */}
        <div className="bg-primary">
          <div className="container py-4">
            {/* Breadcrumb */}
            <nav className="d-flex">
              <h6 className="mb-0">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={handy}
                  className="text-white-50"
                >
                  Home
                </a>
                <span className="text-white-50 mx-2"> &gt; </span>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={handy1}
                  className="text-white-50"
                >
                  Shop
                </a>
                <span className="text-white-50 mx-2"> &gt; </span>
                <a style={{ cursor: "pointer" }} href className="text-white">
                  <u>My Cart</u>
                </a>
              </h6>
            </nav>
            {/* Breadcrumb */}
          </div>
        </div>
        {/* Heading */}
      </header>

      <section>
        <section className="container my-5">
          <header className="mb-4">
            <h3>Your Cart</h3>
          </header>
          <div className="row">
            <h4>No items exist in your Cart.</h4>
          </div>
        </section>

        <section>
          <div className="container my-5">
            <header className="mb-4">
              <h3>Recommended items</h3>
            </header>
            <div className="row">
              {items.slice(0, 4).map((naya) => (
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card px-4 border shadow-0 mb-4 mb-lg-0">
                    <div className="mask px-2" style={{ height: "50px" }}>
                      <div className="d-flex justify-content-between">
                        <h6>
                          <span className="badge bg-danger pt-1 mt-3 ms-2">
                            New
                          </span>
                        </h6>
                      </div>
                    </div>
                    <a  className>
                      <img
                      style={{cursor:"pointer"}}
                        onClick={()=>handleProductClick(naya.id)}
                        src={naya.image}
                        className="card-img-top rounded-2"
                      />
                    </a>
                    <div className="card-body d-flex flex-column pt-3 border-top">
                      <a href="#" className="nav-link">
                        {naya.name}
                      </a>
                      <div className="price-wrap mb-2">
                        <strong className>{naya.price}</strong>
                        <del className>$24.99</del>
                      </div>
                      <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                        <a
                          className="btn btn-light btn-outline-primary w-100"
                          onClick={() => {
                            // handleClick();
                            addToCart(naya);
                          }}
                        >
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Recommended */}
        <Footer1 />
      </section>
    </>
  );
}
