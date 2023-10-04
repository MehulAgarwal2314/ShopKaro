import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navbar1(){
  const navigate=useNavigate();
  const handy=()=>{
    navigate('/electronics');
  }
  const handy1=()=>{
    navigate('/productlist');
  }
  const handy2=()=>{
    navigate('/fashion');
  }
  const handy3=()=>{
    navigate('/watches');
  }
  const handy4=()=>{
    navigate('/accessories');
  }
    return(
        <>
           {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-light" style={{"background-color":"#f5f5f5"}}>
    {/* Container wrapper */}
    <div className="container justify-content-center justify-content-md-between">
      {/* Toggle button */}
      <button className="navbar-toggler border text-dark py-2" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarLeftAlignExample" aria-controls="navbarLeftAlignExample" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link text-dark" aria-current="page" style={{cursor:"pointer"}}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" onClick={handy1} style={{cursor:"pointer"}}>Categories</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link text-dark" href="#">Hot offers</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link text-dark" onClick={handy} style={{cursor:"pointer"}} >Electronics</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" onClick={handy2} style={{cursor:"pointer"}}>Fashion</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" onClick={handy3} style={{cursor:"pointer"}}>Watches</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" onClick={handy4} style={{cursor:"pointer"}}>Accessories</a>
          </li>
      
        </ul>
        {/* Left links */}
      </div>
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
  </>
    )
}