import React from 'react'

export default function Footer(){
    return(
        <>
          {/* Footer */}
  <footer className="text-center text-lg-start bg-light text-muted">
    {/* Section: Social media */}
    <section className="p-4" style={{"background-color":"rgba(0, 0, 0, 0.05)"}}>
      <div className="container">
        <div className="row d-flex">
          {/* Left */}
          <div className="col-md-6 col-sm-12 mb-2 mb-md-0 d-flex justify-content-center justify-content-md-start">
            <div className>
              <div className="input-group" style={{"max-width":"400px"}}>
                <input type="email" className="form-control border" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
                <button className="btn btn-light border" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          {/* Left */}
          {/* Right */}
          <div className="col-md-6 col-sm-12 float-center">
            <div className="float-md-end">
              <a className="btn btn-icon btn-light text-secondary px-3 border" title="Facebook" target="_blank" href="https://www.instagram.com/mehul._agarwal/"><i className="fab fa-facebook-f fa-lg" /></a>
              <a className="btn btn-icon btn-light text-secondary px-3 border" title="Instagram" target="_blank" href="https://www.instagram.com/mehul._agarwal/"><i className="fab fa-instagram fa-lg" /></a>
              <a className="btn btn-icon btn-light text-secondary px-3 border" title="Youtube" target="_blank" href="https://www.instagram.com/mehul._agarwal/"><i className="fab fa-youtube fa-lg" /></a>
              <a className="btn btn-icon btn-light text-secondary px-3 border" title="Twitter" target="_blank" href="https://www.instagram.com/mehul._agarwal/"><i className="fab fa-twitter fa-lg" /></a>
            </div>
          </div>
          {/* Right */}
        </div>
      </div>
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className>
      <div className="container text-center text-md-start mt-5 mb-4">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-12 col-lg-3 col-sm-12">
            {/* Content */}
            <a style={{cursor:"pointer"}} target="_blank" className="ms-md-2">
              {/* <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height={35} /> */}
              <h1>SHopK</h1>
            </a>
            <p className="mt-3">
              © 2023 Copyright: ShopKaro.com.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-6 col-sm-4 col-lg-2">
            {/* Links */}
            <h6 className="text-uppercase text-dark fw-bold mb-2">
              Store
            </h6>
            <ul className="list-unstyled mb-4">
              <li><a className="text-muted" href="#">About us</a></li>
              <li><a className="text-muted" href="#">Find store</a></li>
              <li><a className="text-muted" href="#">Categories</a></li>
              <li><a className="text-muted" href="#">Blogs</a></li>
            </ul>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-6 col-sm-4 col-lg-2">
            {/* Links */}
            <h6 className="text-uppercase text-dark fw-bold mb-2">
              Information
            </h6>
            <ul className="list-unstyled mb-4">
              <li><a className="text-muted" href="#">Help center</a></li>
              <li><a className="text-muted" href="#">Money refund</a></li>
              <li><a className="text-muted" href="#">Shipping info</a></li>
              <li><a className="text-muted" href="#">Refunds</a></li>
            </ul>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-6 col-sm-4 col-lg-2">
            {/* Links */}
            <h6 className="text-uppercase text-dark fw-bold mb-2">
              Support
            </h6>
            <ul className="list-unstyled mb-4">
              <li><a className="text-muted" href="#">Help center</a></li>
              <li><a className="text-muted" href="#">Documents</a></li>
              <li><a className="text-muted" href="#">Account restore</a></li>
              <li><a className="text-muted" href="#">My orders</a></li>
            </ul>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-12 col-sm-12 col-lg-3">
            {/* Links */}
            <h6 className="text-uppercase text-dark fw-bold mb-2 ">Our apps</h6>
            <a href="https://www.instagram.com/mehul._agarwal/" className="mb-2 d-inline-block " > <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/misc/btn-appstore.webp" height={38} /></a>
            <a href="https://www.instagram.com/mehul._agarwal/" className="mb-2 d-inline-block"> <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/misc/btn-market.webp" height={38} /></a>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    <div className="container">
      <div className="py-4 border-top">
        <div className="d-flex justify-content-between">
          {/*- payment -*/}
          <div className="text-dark">
            <i className="fab fa-lg fa-cc-visa" />
            <i className="fab fa-lg fa-cc-amex" />
            <i className="fab fa-lg fa-cc-mastercard" />
            <i className="fab fa-lg fa-cc-paypal" />
          </div>
          {/*- payment -*/}
          {/*- language selector -*/}
          <div className="dropdown dropup">
            <a className="dropdown-toggle text-dark" href="#" id="Dropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false"> <i className="flag-united-kingdom flag m-0" /> English </a>
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
        </>
    )
}