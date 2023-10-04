import React, { useState } from "react";
import Jumbotron from "./Jumbotron";
import { useNavigate } from "react-router-dom";
import items from "./items";
import Footer1 from "./Footer1";
import Heading1 from "./Heading1";
import Sidebar from "./Sidebar";

export default function Button1({
  addToCart,
  searchQuery,
  handleBrandFilterChange,
  filters,
  filteredItems,
  handleRelatedItemClick,
  filteredItemsByRelatedItem,
  addToWish,user,showModal1,handleCloseModal1,handleSignOut,
  handleProductClick,confirmSignOut,handleCancelSignOut,handleConfirmSignOut,handleClick19
}) {
  const navigate = useNavigate();
  const handleClick5 = () => navigate("/page2");
  const handleClick4 = () => navigate("/mycart");
  const [isShown, setIsShown] = useState(false);
  function handleClick() {
    setIsShown((current) => !current);
  }
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
          showModal1={showModal1} confirmSignOut={confirmSignOut} handleCancelSignOut={handleCancelSignOut} handleConfirmSignOut={handleConfirmSignOut} handleCloseModal1={handleCloseModal1} handleClick4={handleClick4} handleSignOut={handleSignOut} user={user} addToCart={addToCart} handleProductClick1={handleProductClick1} handleClick19={handleClick19}
            searchQuery={searchQuery}
          />
          {/* Heading */}
          <div className="bg-primary mb-4">
            <div className="container py-4">
              <h3 className="text-white mt-2">Men's wear</h3>
              {/* Breadcrumb */}
              <nav className="d-flex mb-2">
                <h6 className="mb-0">
                  <a style={{cursor:"pointer"}} href onClick={handy} className="text-white-50">
                    Home
                  </a>
                  <span className="text-white-50 mx-2"> &gt; </span>
                  <a style={{cursor:"pointer"}} href className="text-white">
                    <u>Shop</u>
                  </a>
                </h6>
              </nav>
              {/* Breadcrumb */}
            </div>
          </div>
          {/* Heading */}
        </header>
        {/* sidebar + content */}
        <section className>
          <div className="container">
            <div className="row">
              {/* sidebar */}
              <Sidebar
                handleBrandFilterChange={handleBrandFilterChange}
                filters={filters}
                handleRelatedItemClick={handleRelatedItemClick}
              />
              {/* sidebar */}
              {/* content */}
              <div className="col-lg-9">
                <div className="row">
                  <Heading1 />
                  {filteredItemsByRelatedItem.slice(0, 9).map((item, index) => (
                    <div
                      className="col-lg-4 col-md-6 col-sm-6 d-flex"
                      key={item.name + index}
                    >
                      <div className="card w-100 my-2 shadow-2-strong">
                        <img style={{cursor:"pointer"}}  onClick={() => handleProductClick(item.id)} src={item.image} className="card-img-top" />
                        <div className="card-body d-flex flex-column">
                          <div className="d-flex flex-row">
                            <h5 className="mb-1 me-1">{item.price}</h5>
                            <span className="text-danger">
                              <s>$34,50</s>
                            </span>
                          </div>
                          <p className="card-text">{item.name}</p>
                          <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                            <a
                              className="btn btn-primary shadow-0 me-1"
                              onClick={() => {
                                handleClick();
                                addToCart(item);
                              }}
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
                           <a className="page-link" aria-label="Previous">
                             <span aria-hidden="true">«</span>
                           </a>
                         </li>
                         <li className="page-item active">
                           <a style={{cursor:"pointer"}} className="page-link">1</a>
                         </li>
                         <li className="page-item">
                           <a style={{cursor:"pointer"}} className="page-link" onClick={handleClick5}>
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
        <Footer1 />
        {/* MDB */}
        {/* Custom scripts */}
        {/* End your project here*/}
        {/* MDB */}
        {/* Custom scripts */}
      </div>
    </>
  );
}
