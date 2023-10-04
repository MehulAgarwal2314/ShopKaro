import React from "react";
import { useNavigate } from "react-router-dom";
import items from "./items";
import Footer1 from "./Footer1";
import Jumbotron from "./Jumbotron";

export default function Watches({
  addToCart,
  handleClick,
  addToWish,
  showModal1,
  handleCloseModal1,
  handleSignOut,
  user,confirmSignOut,handleCancelSignOut,handleConfirmSignOut,handleClick19,handleProductClick
}) {
 const navigate=useNavigate();
  const handleClick4=() => navigate("/mycart");
  const handleProductClick1=() => navigate("/wishlist");
  const handy=()=>{navigate('/')};
  const handy1=()=>{navigate('/productList')}
  const watches = items.filter(item => item.type === 'watch' );
  return (
    <>
      {/* <Jumbotron/> */}
      <header>
        <Jumbotron handleClick19={handleClick19} confirmSignOut={confirmSignOut} handleCancelSignOut={handleCancelSignOut} handleConfirmSignOut={handleConfirmSignOut} addToCart={addToCart} handleClick4={handleClick4} handleProductClick1={handleProductClick1} showModal1={showModal1} handleCloseModal1={handleCloseModal1} user={user} handleSignOut={handleSignOut}/>
        {/* <Heading /> */}
        {/* Heading */}
        <div className="bg-primary">
          <div className="container py-4">
            {/* Breadcrumb */}
            <nav className="d-flex">
              <h6 className="mb-0">
                <a style={{cursor:"pointer"}} href onClick={handy} className="text-white-50">
                  Home
                </a>
                <span className="text-white-50 mx-2"> &gt; </span>
                <a style={{cursor:"pointer"}} href onClick={handy1} className="text-white-50">
                  Shop
                </a>
                <span className="text-white-50 mx-2"> &gt; </span>
                <a style={{cursor:"pointer"}} href className="text-white">
                  <u>Products</u>
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
            <h3>Watches</h3>
          </header>
          <div className="row">
            {watches.map((product) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={product.id}>
                <div className="card px-4 border shadow-0 my-5 mb-lg-0">
                  <div className="mask px-2" style={{ height: "50px" }}>
                    <div className="d-flex justify-content-between ">
                      <h6>
                        <span className="badge bg-danger pt-1 mt-3 ms-2">
                          New
                        </span>
                      </h6>
                      <a style={{cursor:"pointer"}} href onClick={() => addToWish(product)}>
                        <i className="fas fa-heart text-primary fa-lg float-end pt-3 m-2 " />
                      </a>
                    </div>
                  </div>
                  <a  className>
                    <img
                    onClick={() => handleProductClick(product.id)} 
                    style={{cursor:"pointer"}}
                      src={product.image}
                      className="card-img-top rounded-2"
                    />
                  </a>
                  <div className="card-body d-flex flex-column pt-3 border-top">
                    <a href="#" className="nav-link">
                      {product.name}
                    </a>
                    <div className="price-wrap mb-2">
                      <strong className>{product.price}</strong>
                      <del className>$24.99</del>
                    </div>
                    <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                      <a
                        className="btn btn-light btn-outline-primary w-100"
                        onClick={() => {
                          handleClick();
                          addToCart(product);
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
                        <a style={{cursor:"pointer"}} onClick={() => addToWish(naya)}>
                          <i className="fas fa-heart text-primary fa-lg float-end pt-3 m-2" />
                        </a>
                      </div>
                    </div>
                    <a   className>
                      <img
                      onClick={() => handleProductClick(naya.id)} 
                      style={{cursor:"pointer"}}
                      handleProductClick={handleProductClick}
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
        {/* Recommended */}
        <Footer1 />
      </section>
    </>
  );
}
