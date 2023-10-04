import React from "react";
import { useNavigate } from "react-router-dom";
import items from "./items";
import Footer1 from "./Footer1";
import Jumbotron from "./Jumbotron";

export default function Wishlist({addToCart,handleClick,addToWish,items2,wishbox,showModal1,
  handleCloseModal1,
  handleSignOut,confirmSignOut,handleConfirmSignOut,handleCancelSignOut,handleClick19,handleProductClick,
  user}){
    const navigate=useNavigate();
  const handleClick4=() => navigate("/wishlist");
  const handleClick11=() => navigate("/mycart");
  const handleProductClick1 = () => {
    navigate("/wishlist");
  };
  const handy=()=>{navigate('/')};
  const handy1=()=>{navigate('/productList')};
    return wishbox.length >0 ?(
        <>
       {/* <Jumbotron/> */}
       <header>
        <Jumbotron 
          handleClick19={handleClick19} confirmSignOut={confirmSignOut} handleCancelSignOut={handleCancelSignOut} handleConfirmSignOut={handleConfirmSignOut} addToCart={addToCart} handleClick4={handleClick11} showModal1={showModal1} handleCloseModal1={handleCloseModal1} user={user} handleSignOut={handleSignOut} />
        {/* <Heading /> */}
        {/* Heading */}
        <div className="bg-primary">
          <div className="container py-4">
            {/* Breadcrumb */}
            <nav className="d-flex">
              <h6 className="mb-0">
                <a style={{cursor:"pointer"}} onClick={handy} href className="text-white-50">
                  Home
                </a>
                <span  className="text-white-50 mx-2"> &gt; </span>
                <a style={{cursor:"pointer"}} href onClick={handy1} className="text-white-50">
                  Shop
                </a>
                <span className="text-white-50 mx-2"> &gt; </span>
                <a style={{cursor:"pointer"}} href className="text-white">
                  <u>WishList</u>
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
            <header className="mb-2">
              <h3>Your Wishlist</h3>
            </header>
            <div className="row">
              {wishbox.map((product1) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={product1.id}>
                  <div className="card px-4 border shadow-0 mb-4 my-5 mb-lg-0">
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
                      <img style={{cursor:"pointer"}}
                      onClick={()=>handleProductClick(product1.id)}
                        src={product1.image}
                        className="card-img-top rounded-2"
                      />
                    </a>
                    <div className="card-body d-flex flex-column pt-3 border-top">
                      <a  className="nav-link">
                        {product1.name}
                      </a>
                      <div className="price-wrap mb-2">
                        <strong className>{product1.price}</strong>
                        <del className>$24.99</del>
                      </div>
                      <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                        <a
                          className="btn btn-light btn-outline-primary w-100"
                          onClick={() => {
                            handleClick();
                            addToCart(product1);
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
          </section>
  
      <section>
          <div className="container my-5">
            <header className="mb-4">
              <h3>Recommended items</h3>
            </header>
            <div className="row">
              {items.slice(0,4).map((naya)=>(
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
                      <img style={{cursor:"pointer"}}
                      onClick={()=>handleProductClick(naya.id)}
                        src={naya.image}
                        className="card-img-top rounded-2"
                      />
                    </a>
                    <div className="card-body d-flex flex-column pt-3 border-top">
                      <a  className="nav-link">
                        {naya.name}
                      </a>
                      <div className="price-wrap mb-2">
                        <strong className>{naya.price}</strong>
                        <del className>$24.99</del>
                      </div>
                      <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                        <a
                          className="btn btn-light btn-outline-primary w-100"
                          data-mdb-ripple-color="dark"
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
        {/* Recommended */}
        <Footer1 />
      </section>
        </>
    ):(
    <>

        {/* <Jumbotron/> */}
        <header>
        <Jumbotron 
          handleClick19={handleClick19} confirmSignOut={confirmSignOut} handleCancelSignOut={handleCancelSignOut} handleConfirmSignOut={handleConfirmSignOut} addToCart={addToCart} handleClick4={handleClick11} showModal1={showModal1} handleCloseModal1={handleCloseModal1} user={user} handleSignOut={handleSignOut} />
        {/* <Heading /> */}
        {/* Heading */}
        <div className="bg-primary">
          <div className="container py-4">
            {/* Breadcrumb */}
            <nav className="d-flex">
              <h6 className="mb-0">
                <a onClick={handy1} style={{cursor:"pointer"}} href className="text-white-50">
                  Home
                </a>
                <span  className="text-white-50 mx-2"> &gt; </span>
                <a onClick={handy1} style={{cursor:"pointer"}} href className="text-white-50">
                  Shop
                </a>
                <span className="text-white-50 mx-2"> &gt; </span>
                <a href style={{cursor:"pointer"}} className="text-white">
                  <u>WishList</u>
                </a>
              </h6>
            </nav>
            {/* Breadcrumb */}
          </div>
        </div>
        {/* Heading */}
      </header>

     
        <section>
          <section className="container my-4">
            <header className="mb-5">
              <h3>Your Wishlist</h3>
            </header>
            <div className="row">
              <h4>No items exist in your Wishlist.</h4>
            </div>
          </section>
  
      <section>
          <div className="container my-5">
            <header className="mb-4">
              <h3>Recommended items</h3>
            </header>
            <div className="row">
              {items.slice(0,4).map((naya)=>(
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
                      <img style={{cursor:"pointer"}}
                      onClick={()=>handleProductClick(naya.id)}
                        src={naya.image}
                        className="card-img-top rounded-2"
                      />
                    </a>
                    <div className="card-body d-flex flex-column pt-3 border-top">
                      <a  className="nav-link">
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
        {/* Recommended */}
        <Footer1 />
      </section>
    
    </>)
}