import React from 'react'
import items from './items';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer1 from './Footer1';
import Jumbotron from './Jumbotron';
import { useState } from 'react';
import Modal from "react-bootstrap/Modal";

export default function Checkout({cart,user,getItemQuantityInCart,emptyCartAndNavigateToSuccess,calculateTotalPrice,calculateTotalCartPriceWithAdditional,calculateTotalCartPriceWithAdditional2}){
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [house, setHouse] = useState('');
  const [postal, setPostal] = useState('');
  const [zip, setZip] = useState('');

  const navigate=useNavigate();
  const han=()=>{
    navigate('/login');
  }
  const han1=()=>{
    navigate('/signup');
  }
  const hand=()=>{
    navigate('/mycart');
  }
  const [showSignInModal, setShowSignInModal] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleHouseChange = (e) => {
    setHouse(e.target.value);
  };
  const handlePostalChange = (e) => {
    setPostal(e.target.value);
  };
  const handleZipChange = (e) => {
    setZip(e.target.value);
  };

  const handlePurchase = () => {
    // Check if any required field is empty
    if (!firstName || !lastName || !phone || !email||!address||!house||!postal||!zip) {
      // Display an alert if any required field is empty
      // alert('Please fill in all required fields.');
      setShowModal(true);
    } else if (!user) {
      // Display a modal if the user is not signed in
      setShowSignInModal(true); // Create a new state variable to control this modal
    } else {
      // Proceed with the purchase
      emptyCartAndNavigateToSuccess();
    }
  };

  const handy = () => navigate("/");
  const handy1 = () => navigate("/productlist");
  const closeModal = () => {
    setShowModal(false);
  };

    return (
        <>
  <div>
  <div>
  <header>
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
                    <u>Order</u>
                  </a>
                </h6>
              </nav>
        {/* Breadcrumb */}
      </div>
    </div>
    {/* Heading */}
  </header>
  <section className="bg-light py-5">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-lg-8 mb-4">
          <div className="card mb-4 border shadow-0">
            <div className="p-4 d-flex justify-content-between">
              {/* Conditional rendering based on user state */}
              {user ? (
                      <div className="">
                        <h5>Welcome {user.displayName} !!</h5>
                        <p className="mb-0 text-wrap ">You are signed in as {user.email}</p>
                      </div>
                    ) : (
                      <>
                      <div className="">
                        <h5>Have an account?</h5>
                        <p className="mb-0 text-wrap ">Please take a moment to Sign in to your ShopKaro Account.</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <a  className="btn btn-outline-primary me-0 me-md-2 mb-2 mb-md-0 w-100 " onClick={han1} >Register</a>
                      <a className="btn btn-primary shadow-0 text-nowrap w-100 ms-3" onClick={han} >Sign in</a>
                    </div>
                    </>
                    )}
                    {/* End of conditional rendering */}
            </div>
          </div>
          {/* Checkout */}
          <div className="card shadow-0 border">
            <div className="p-4">
              <h5 className="card-title mb-3">Guest checkout</h5>
              <div className="row">
                <div className="col-6 mb-3">
                  <p className="mb-0">First name</p>
                  <div >
                    <input type="text" id="typeText" placeholder="Type here" className="form-control" value={firstName} onChange={handleFirstNameChange}/>
                  </div>
                </div>
                <div className="col-6">
                  <p className="mb-0">Last name</p>
                  <div className="">
                    <input type="text" id="typeText" placeholder="Type here" className="form-control" value={lastName} onChange={handleLastNameChange}/>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <p className="mb-0">Phone</p>
                  <div className="">
                    <input type="tel" id="typePhone" defaultValue={+48 } className="form-control" value={phone} onChange={handlePhoneChange}/>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <p className="mb-0">Email</p>
                  <div className="">
                    <input type="email" id="typeEmail" placeholder="example@gmail.com" className="form-control" value={email} onChange={handleEmailChange} />
                  </div>
                </div>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">Keep me up to date on news</label>
              </div>
              <hr className="my-4" />
              <h5 className="card-title mb-3">Shipping info</h5>
              <div className="row mb-3">
                <div className="col-lg-4 mb-3">
                  {/* Default checked radio */}
                  <div className="form-check h-100 border rounded-3">
                    <div className="p-3">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Express delivery <br />
                        <small className="text-muted">3-4 days via Fedex </small>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-3">
                  {/* Default radio */}
                  <div className="form-check h-100 border rounded-3">
                    <div className="p-3">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Post office <br />
                        <small className="text-muted">20-30 days via post </small>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-3">
                  {/* Default radio */}
                  <div className="form-check h-100 border rounded-3">
                    <div className="p-3">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                      <label className="form-check-label" htmlFor="flexRadioDefault3">
                        Self pick-up <br />
                        <small className="text-muted">Come to our shop </small>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8 mb-3">
                  <p className="mb-0">Address</p>
                  <div className="">
                    <input type="text" id="typeText" placeholder="Type here" className="form-control" value={address} onChange={handleAddressChange}/>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <p className="mb-0">City</p>
                  <select className="form-select">
                    <option value={1}>Jamshedpur</option>
                    <option value={2}>Ranchi</option>
                    <option value={3}>Delhi</option>
                  </select>
                </div>
                <div className="col-sm-4 mb-3">
                  <p className="mb-0">House</p>
                  <div className="">
                    <input type="text" id="typeText" placeholder="Type here" className="form-control" value={house} onChange={handleHouseChange} />
                  </div>
                </div>
                <div className="col-sm-4 col-6 mb-3">
                  <p className="mb-0">Postal code</p>
                  <div className="">
                    <input type="text" id="typeText" className="form-control" value={postal} onChange={handlePostalChange}/>
                  </div>
                </div>
                <div className="col-sm-4 col-6 mb-3">
                  <p className="mb-0">Zip</p>
                  <div className="">
                    <input type="text" id="typeText" className="form-control" value={zip} onChange={handleZipChange}/>
                  </div>
                </div>
              </div>
              {/* <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault1" />
                <label className="form-check-label" htmlFor="flexCheckDefault1">Save this address</label>
              </div>
              <div className="mb-3">
                <p className="mb-0">Message to seller</p>
                <div className="">
                  <textarea className="form-control" id="textAreaExample1" rows={2} defaultValue={""} />
                </div>
              </div> */}
              <div className="float-end ">
                <button className="btn btn-light border " onClick={hand}>Cancel</button>
                <button className="btn btn-success shadow-0 border ms-4" onClick={handlePurchase}>Purchase</button>
                <Modal show={showModal} onHide={closeModal}>
        <div class="modal-header">
          <h5 class="modal-title">ShopKaro</h5>
          <button
            type="button"
            class="btn-close"
            data-mdb-dismiss="modal"
            aria-label="Close" onClick={closeModal}
          ></button>
        </div>
        <div class="modal-body">
          <p>All fields must be filled !!</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>


      <Modal show={showSignInModal} onHide={() => setShowSignInModal(false)}>
  <div class="modal-header">
    <h5 class="modal-title">Sign In Required</h5>
    <button
      type="button"
      class="btn-close"
      data-mdb-dismiss="modal"
      aria-label="Close"
      onClick={() => setShowSignInModal(false)}
    ></button>
  </div>
  <div class="modal-body">
    <p>Please sign in to complete your purchase.</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-primary" onClick={() => setShowSignInModal(false)}>
      Close
    </button>
    {/* Add a button/link to navigate to the sign-in page */}
    <a href class="btn btn-primary" onClick={han}>
      Sign In
    </a>
  </div>
</Modal>


      {/* <Modal1 show={showModal} handleClose={closeModal} value1={value1} />    */}

              </div>
            </div>
          </div>
          {/* Checkout */}
        </div>
        <div className="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
          <div className="ms-lg-4 mt-4 mt-lg-0" style={{"max-width":"320px"}}>
            <h6 className="mb-3">Summary</h6>
            <div className="d-flex justify-content-between">
              {cart.length===0 ? (
                <>
              <p className="mb-2">Total price:</p>
              <p className="mb-2">$0.00</p>
              </>
              ) :(
                <>
                <p className="mb-2">Total price:</p>
                <p className="mb-2">${calculateTotalCartPriceWithAdditional()}</p>
                </>
              )}
              
            </div>
            <div className="d-flex justify-content-between">
            {cart.length===0 ? (
              <>
              <p className="mb-2">Convenience:</p>
              <p className="mb-2 text">+ $0.00</p>
              </>
            ):(
              <>
              <p className="mb-2">Convenience:</p>
              <p className="mb-2 text">+ $5.00</p>
              </>
            )}
              
            </div>
            <div className="d-flex justify-content-between">
            {cart.length===0 ? (
              <>
              <p className="mb-2">Shipping cost:</p>
              <p className="mb-2">+ $0.00</p>
              </>
              ):(
                <>
                <p className="mb-2">Shipping cost:</p>
                <p className="mb-2">+ $10.00</p>
                </>
              )}
            </div>
            <hr />
            <div className="d-flex justify-content-between">
            {cart.length===0 ? (
              <>
              <p className="mb-2">Total price:</p>
              <p className="mb-2 fw-bold">$0.00</p>

</>
              ):(
                <>
              <p className="mb-2">Total price:</p>
              <p className="mb-2 fw-bold">${calculateTotalCartPriceWithAdditional2()}</p>
              </>
              )}
            </div>
            <hr />
            {cart.length===0 ? (
              <>
               <h6 className="text-dark my-4">No items exist in your cart</h6>
              </>
              ):(
                <>
                <h6 className="text-dark my-4">Items in cart</h6>
                </>
              )}
            
            {cart.slice(0,4).map((item)=>(
                <div className="d-flex align-items-center mb-4">
                <div className="me-3 position-relative">
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                    {getItemQuantityInCart(item.id)}
                  </span>
                  <img src={item.image} style={{"height":"96px","width":"96x"}} className="img-sm rounded border" />
                </div>
                <div className>
                  <a className="nav-link">
                    {item.name}<br />
                    {item.description}
                  </a>
                  <div className="price text-muted">Total: ${calculateTotalPrice(item)}</div>
                </div>
              </div>
            ))}
          
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <Footer1/>
  {/* Footer */}
  {/* MDB */}
  {/* Custom scripts */}
</div>
    {/* MDB */}
  {/* Custom scripts */}
</div>
        </>
    )
}