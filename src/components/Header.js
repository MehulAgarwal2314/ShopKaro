import React from 'react'
import Jumbotron from "./Jumbotron";
import Navbar1 from "./Navbar1";

export default function Header({handleCloseModal1,confirmSignOut,handleCancelSignOut,showModal1,handleConfirmSignOut,handleClick4,addToCart,handleProductClick1,handleClick19,user,handleSignOut}){
    return(
        <>
          <header>
  <Jumbotron showModal1={showModal1} confirmSignOut={confirmSignOut} handleCancelSignOut={handleCancelSignOut} handleConfirmSignOut={handleConfirmSignOut} handleCloseModal1={handleCloseModal1} handleClick4={handleClick4} handleSignOut={handleSignOut} user={user} addToCart={addToCart} handleProductClick1={handleProductClick1} handleClick19={handleClick19}/>
 <Navbar1/>
  </header>
        </>
    )
}