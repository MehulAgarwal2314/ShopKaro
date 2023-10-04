import React from "react";
import Jumbotron from "./Jumbotron";
import { useNavigate } from "react-router-dom";
import Heading from "./Heading";
import Sidebar from "./Sidebar";
import Heading1 from "./Heading1";
import items from "./items";
import { useState } from "react";

export default function Page2({addToCart,handleClick19,user,showModal1,handleCloseModal1,handleSignOut,confirmSignOut,handleConfirmSignOut,handleCancelSignOut,addToWish,handleProductClick,searchQuery,handleBrandFilterChange,filters,filteredItems,handleRelatedItemClick,filteredItemsByRelatedItem}){
  const navigate = useNavigate();
  const handleClick4 = () => navigate("/mycart");
  const handleClick7 = () => navigate("/productlist");
  const [isShown, setIsShown] = useState(false);
  function handleClick() {
    setIsShown(current => !current);
  };
  const handleProductClick1 = () => {
    navigate("/wishlist");
  };
  const handy=()=>{navigate('/')};
  const handy1=()=>{navigate('/productList')}

  return (
    <>
      <div>
        <header>
          <Jumbotron
           handleCloseModal1={handleCloseModal1}  handleSignOut={handleSignOut} user={user} handleClick19={handleClick19}
          
          
          
          showModal1={showModal1} confirmSignOut={confirmSignOut} handleCancelSignOut={handleCancelSignOut} handleConfirmSignOut={handleConfirmSignOut} handleClick4={handleClick4} addToCart={addToCart} searchQuery={searchQuery} handleProductClick1={handleProductClick1}/>
          <Heading handy={handy}/>
        </header>
        <section className>
          <div className="container">
            <div className="row">
            <Sidebar handleBrandFilterChange={handleBrandFilterChange} filters={filters} handleRelatedItemClick={handleRelatedItemClick} />
              <div className="col-lg-9">
                <Heading1 />
                <div className="row">
                    {filteredItemsByRelatedItem.slice(9,15).map((item, index) => (

                    <div className="col-lg-4 col-md-6 col-sm-6 d-flex" key={item.name +index}>
                      <div className="card w-100 my-2 shadow-2-strong">
                        <img
                        style={{cursor:"pointer"}}
                        onClick={() => handleProductClick(item.id)}
                          src={item.image}
                          className="card-img-top"
                        />
                        <div className="card-body d-flex flex-column">
                          <div className="d-flex flex-row">
                            <h5 className="mb-1 me-1">{item.price}</h5>
                            <span className="text-danger">
                              <s>$49.99</s>
                            </span>
                          </div>
                          <p className="card-text">
                            {item.name}
                          </p>
                          <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                            <a
                              
                              className="btn btn-primary shadow-0 me-1"
                              onClick={()=>{handleClick();addToCart(item)}}
                            >
                              Add to cart
                            </a>
                            <a
                              href onClick={() => addToWish(item)}
                              className="btn btn-light border icon-hover px-2 pt-2"
                            >
                              <i className="fas fa-heart fa-lg text-secondary px-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                   {filteredItemsByRelatedItem.slice(0,4).map((item, index) => (

                    <div className="col-lg-4 col-md-6 col-sm-6 d-flex" key={item.name +index}>
                      <div className="card w-100 my-2 shadow-2-strong">
                        <img
                         onClick={() => handleProductClick(item.id)}
                          src={item.image}
                          style={{cursor:"pointer"}}
                          className="card-img-top"
                        />
                        <div className="card-body d-flex flex-column">
                          <div className="d-flex flex-row">
                            <h5 className="mb-1 me-1">{item.price}</h5>
                            <span className="text-danger">
                              <s>$49.99</s>
                            </span>
                          </div>
                          <p className="card-text">
                            {item.name}
                          </p>
                          <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                            <a
                              
                              className="btn btn-primary shadow-0 me-1"
                              onClick={()=>{handleClick();addToCart(item)}}
                            >
                              Add to cart
                            </a>
                            <a
                              onClick={() => addToWish(item)}
                              className="btn btn-light border icon-hover px-2 pt-2"
                            >
                              <i className="fas fa-heart fa-lg text-secondary px-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
             {/* Pagination */}
             {filteredItemsByRelatedItem.length > 0 ?(
                  <>
                <hr />
                       <nav
                       aria-label="Page navigation example"
                       className="d-flex justify-content-center mt-3"
                     >
                       <ul className="pagination">
                         <li className="page-item disabled">
                           <a style={{cursor:"pointer"}} className="page-link"  aria-label="Previous">
                             <span aria-hidden="true">«</span>
                           </a>
                         </li>
                         <li className="page-item ">
                           <a style={{cursor:"pointer"}} className="page-link" onClick={handy1}>1</a>
                         </li>
                         <li className="page-item active">
                           <a className="page-link" >
                             2
                           </a>
                         </li>
                         <li className="page-item">
                           <a className="page-link" aria-label="Next">
                             <span aria-hidden="true">»</span>
                           </a>
                         </li>
                       </ul>
                     </nav>
                     </>
                ):(
                  <h1 style={{color:"#3B71CA"}} >No Such Related Items</h1>
                )}
           
                {/* Pagination */}
              </div>
            </div>
          </div>
        </section>
        {/* sidebar + content */}
        {/* Footer */}
        <footer className="text-center text-lg-start text-muted bg-primary mt-3">
          {/* Section: Links  */}
          <section className>
            <div className="container text-center text-md-start pt-4 pb-4">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-12 col-lg-3 col-sm-12 mb-2">
                  {/* Content */}
                  <a
                    
                    target="_blank"
                    className="text-white h2"
                    style={{cursor:"pointer"}}
                    onClick={handy}
                  >
                    SHopK
                  </a>
                  <p className="mt-1 text-white">
                    © 2023 Copyright: ShopKaro.com
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-6 col-sm-4 col-lg-2">
                  {/* Links */}
                  <h6 className="text-uppercase text-white fw-bold mb-2">
                    Store
                  </h6>
                  <ul className="list-unstyled mb-4">
                    <li>
                      <a className="text-white-50" href="#">
                        About us
                      </a>
                    </li>
                    <li>
                      <a className="text-white-50" href="#">
                        Find store
                      </a>
                    </li>
                    <li>
                      <a className="text-white-50" href="#">
                        Categories
                      </a>
                    </li>
                    <li>
                      <a className="text-white-50" href="#">
                        Blogs
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-6 col-sm-4 col-lg-2">
                  {/* Links */}
                  <h6 className="text-uppercase text-white fw-bold mb-2">
                    Information
                  </h6>
                  <ul className="list-unstyled mb-4">
                    <li>
                      <a className="text-white-50" href="#">
                        Help center
                      </a>
                    </li>
                    <li>
                      <a className="text-white-50" href="#">
                        Money refund
                      </a>
                    </li>
                    <li>
                      <a className="text-white-50" href="#">
                        Shipping info
                      </a>
                    </li>
                    <li>
                      <a className="text-white-50" href="#">
                        Refunds
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-6 col-sm-4 col-lg-2">
                  {/* Links */}
                  <h6 className="text-uppercase text-white fw-bold mb-2">
                    Support
                  </h6>
                  <ul className="list-unstyled mb-4">
                    <li>
                      <a className="text-white-50" href="#">
                        Help center
                      </a>
                    </li>
                    <li>
                      <a className="text-white-50" href="#">
                        Documents
                      </a>
                    </li>
                    <li>
                      <a className="text-white-50" href="#">
                        Account restore
                      </a>
                    </li>
                    <li>
                      <a className="text-white-50" href="#">
                        My orders
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-12 col-sm-12 col-lg-3">
                  {/* Links */}
                  <h6 className="text-uppercase text-white fw-bold mb-2">
                    Newsletter
                  </h6>
                  <p className="text-white">
                    Stay in touch with latest updates about our products and
                    offers
                  </p>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control border"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-light border shadow-0"
                      type="button"
                      id="button-addon2"
                      data-mdb-ripple-color="dark"
                    >
                      Join
                    </button>
                  </div>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          <div className>
            <div className="container">
              <div className="d-flex justify-content-between py-4 border-top">
                {/*- payment -*/}
                <div>
                  <i className="fab fa-lg fa-cc-visa text-white" />
                  <i className="fab fa-lg fa-cc-amex text-white" />
                  <i className="fab fa-lg fa-cc-mastercard text-white" />
                  <i className="fab fa-lg fa-cc-paypal text-white" />
                </div>
                {/*- payment -*/}
                {/*- language selector -*/}
                <div className="dropdown dropup">
                  <a
                    className="dropdown-toggle text-white"
                    href="#"
                    id="Dropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    <i className="flag-united-kingdom flag m-0 me-1" />
                    English{" "}
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="Dropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-united-kingdom flag" />
                        English <i className="fa fa-check text-success ms-2" />
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-poland flag" />
                        Polski
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-china flag" />
                        中文
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-japan flag" />
                        日本語
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-germany flag" />
                        Deutsch
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-france flag" />
                        Français
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-spain flag" />
                        Español
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-russia flag" />
                        Русский
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-portugal flag" />
                        Português
                      </a>
                    </li>
                  </ul>
                </div>
                {/*- language selector -*/}
              </div>
            </div>
          </div>
        </footer>
        {/* Footer */}
        {/* MDB */}
        {/* Custom scripts */}
        {/* End your project here*/}
        {/* MDB */}
        {/* Custom scripts */}
      </div>
    </>
  );
}
