import React from 'react'
import SearchBar1 from './SearchBar1'
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";

export default function Jumbotron({confirmSignOut,handleCancelSignOut,handleConfirmSignOut,handleClick4,addToCart,handleProductClick1,handleClick19,handleClick5,user,handleSignOut,showModal1,handleCloseModal1}){
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");
  const navigate=useNavigate();

    return(
        <>
  {/* Jumbotron */}
  <div className="p-3 text-center bg-white border-bottom">
  <div className="container">
    <div className="row gy-3">
      {/* Left elements */}
      <div className="col-lg-2 col-sm-4 col-4">
        <a style={{cursor:"pointer"}} href target="_blank" className="float-start">
       
          <h2 >SHopK</h2>
        </a>
      </div>
      {/* Left elements */}
      {/* Center elements */}
      <div className="order-lg-last col-lg-5 col-sm-8 col-8">
        <div className="d-flex float-end">
            {/* Conditionally render Sign Out button in the navbar */}
            {user ? (
              <>
              {/* <button onClick={handleSignOut} className="btn btn-danger ml-3">Sign Out</button> */}
          <a style={{cursor:"pointer"}} onClick={handleSignOut} className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank" > <i className="fas fa-user-alt m-1 me-md-2" /><p className="d-none d-md-block mb-0">Sign out</p> </a>
          
          <Modal show={confirmSignOut} onHide={handleCancelSignOut}>
          <div className="modal-header">
            <h5 className="modal-title">ShopKaro</h5>
            <button
              type="button"
              className="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
              onClick={handleCancelSignOut}
            ></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to sign out?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCancelSignOut}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleConfirmSignOut}
            >
              Sign Out
            </button>
          </div>
        </Modal>
        </>


          ) : 
          <a style={{cursor:"pointer"}}  className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank" onClick={handleClick19}> <i className="fas fa-user-alt m-1 me-md-2" /><p className="d-none d-md-block mb-0">Sign in</p> </a>
            
            }
          <a style={{cursor:"pointer"}} className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank" onClick={handleProductClick1}> <i className="fas fa-heart m-1 me-md-2" /><p className="d-none d-md-block mb-0">Wishlist</p> </a>
          <a style={{cursor:"pointer"}} className="border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank" onClick={handleClick4}> <i className="fas fa-shopping-cart m-1 me-md-2" /><p className="d-none d-md-block mb-0">My cart</p> </a>
        </div>
      </div>
      {/* Center elements */}
      {/* Right elements */}
      <SearchBar1 addToCart={addToCart} />
      {/* Right elements */}
    </div>
  </div>
</div>
</>
    )
}