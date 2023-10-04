import React from 'react'
import { useParams } from 'react-router-dom';
import items from './items';
import Jumbotron from './Jumbotron';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { Zoom } from 'react-image-zoom';

export default function ProductDetail({addToCart,onSearch,searchQuery,showModal1,
  handleCloseModal1,handleClick19,
  handleSignOut,confirmSignOut,handleCancelSignOut,handleConfirmSignOut,
  user}){
  const navigate=useNavigate();
  const handleClick4 = () => navigate("/mycart");
  const [isShown, setIsShown] = useState(false);
  function handleClick() {
    setIsShown(current => !current);
  };
  const { id } = useParams();
  
  // // Find the product with the matching id from the items array
  const product = items.find((item) => item.id === parseInt(id));
  
  // const handleAddToCart = () => {
    //   if (product) {
      //     // Call the addToCart function and pass the selected product
      //     addToCart(product);
      //   }
      // };
      if (!product) {
        return <div>Product not found</div>;
      }
      const handy=()=>{navigate('/')};
const handy1=()=>{navigate('/productList')};
const handleProductClick1=()=>{navigate('/wishlist')}

 
    return(
        <>
        <div>
  <header>
  <Jumbotron handleClick19={handleClick19}  confirmSignOut={confirmSignOut} handleCancelSignOut={handleCancelSignOut} handleConfirmSignOut={handleConfirmSignOut} handleClick4={handleClick4} showModal1={showModal1} handleCloseModal1={handleCloseModal1} user={user} handleSignOut={handleSignOut}  onSearch={onSearch} searchQuery={searchQuery} handleProductClick1={handleProductClick1}/>
    {/* Heading */}
    <div className="bg-primary">
      <div className="container py-4">
        {/* Breadcrumb */}
        <nav className="d-flex">
          <h6 className="mb-0">
            <a style={{cursor:"pointer"}} onClick={handy} className="text-white-50">Home</a>
            <span className="text-white-50 mx-2"> &gt; </span>
            <a style={{cursor:"pointer"}} onClick={handy1} className="text-white-50">Shop</a>
            <span className="text-white-50 mx-2"> &gt; </span>
            <a href style={{cursor:"pointer"}} className="text-white"><u>Product</u></a>
          </h6>
        </nav>
        {/* Breadcrumb */}
      </div>
    </div>
    {/* Heading */}
  </header>
  {/* content */}
  <section className="py-5">
    <div className="container">
      <div className="row gx-5 ">
        <aside className="col-lg-6">
          <div className="border rounded-4 mb-3 d-flex justify-content-center">
            <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" >
              <img style={{"max-width":"100%","max-height":"100vh","margin":"auto",cursor:"pointer"}} className="rounded-4 fit" src={product.image} height={575}/>
            </a>
          </div>
        </aside>
        <main className="col-lg-6">
          <div className="ps-lg-3">
            <h4 className="title text-dark">
              {product.name}
            </h4>
            <div className="d-flex flex-row my-3">
              <div className="text-warning mb-1 me-2">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fas fa-star-half-alt" />
                <span className="ms-1">
                  4.5
                </span>
              </div>
              <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1" />154 orders</span>
              <span className="text-success ms-2">In stock</span>
            </div>
            <div className="mb-3">
              <span className="h5">{product.price}</span>
              <span className="text-muted">/per piece</span>
            </div>
            <p>
              {product.description2}
            </p>
            <div className="row mb-6">
              <dt className="col-3">Type:</dt>
              <dd className="col-9">{product.type}</dd>
              <dt className="col-3">Color:</dt>
              <dd className="col-9">Regular</dd>
              <dt className="col-3">Material:</dt>
              <dd className="col-9">{product.description}</dd>
              <dt className="col-3">Brand:</dt>
              <dd className="col-9">{product.brand}</dd>
            </div>
            <hr />
            <div className="row mb-5">
            </div>
            <a  className="btn btn-primary btn-block shadow-0 " onClick={() => addToCart(product)}> <i className="me-1 fa fa-shopping-basket" /> Add to cart </a>
          </div>
        </main>
      </div>
    </div>
  </section>
  {/* content */}
  
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
            <a style={{cursor:"pointer"}} onClick={handy} className="text-white h2">
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
              <li><a className="text-white-50" href="#">About us</a></li>
              <li><a className="text-white-50" href="#">Find store</a></li>
              <li><a className="text-white-50" href="#">Categories</a></li>
              <li><a className="text-white-50" href="#">Blogs</a></li>
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
              <li><a className="text-white-50" href="#">Help center</a></li>
              <li><a className="text-white-50" href="#">Money refund</a></li>
              <li><a className="text-white-50" href="#">Shipping info</a></li>
              <li><a className="text-white-50" href="#">Refunds</a></li>
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
              <li><a className="text-white-50" href="#">Help center</a></li>
              <li><a className="text-white-50" href="#">Documents</a></li>
              <li><a className="text-white-50" href="#">Account restore</a></li>
              <li><a className="text-white-50" href="#">My orders</a></li>
            </ul>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-12 col-sm-12 col-lg-3">
            {/* Links */}
            <h6 className="text-uppercase text-white fw-bold mb-2">Newsletter</h6>
            <p className="text-white">Stay in touch with latest updates about our products and offers</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control border" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
              <button className="btn btn-light border shadow-0" type="button" id="button-addon2" data-mdb-ripple-color="dark">
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
            <a className="dropdown-toggle text-white" href="#" id="Dropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false"> <i className="flag-united-kingdom flag m-0 me-1" />English </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="Dropdown">
              <li>
                <a className="dropdown-item" href="#"><i className="flag-united-kingdom flag" />English <i className="fa fa-check text-success ms-2" /></a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-poland flag" />Polski</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-china flag" />中文</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-japan flag" />日本語</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-germany flag" />Deutsch</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-france flag" />Français</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-spain flag" />Español</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-russia flag" />Русский</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-portugal flag" />Português</a>
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
</div>
        </>
    )
}