import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import items from "./items";
import Header from "./Header";
import Intro from "./Intro";
import Footer from "./Footer";
import Features from "./Features";
import Recommended from "./Recommended";
import NewProduct from "./NewProducts";

export const Shop = ({showModal1,handleCloseModal1,addToCart,addToWish,handleClick19,handleProductClick,handleSignOut,user,handleConfirmSignOut,confirmSignOut,handleCancelSignOut}) => {
 const navigate=useNavigate();
  const handleClick4 = () => navigate("/mycart");
  const handleClick2 = () => navigate("/productlist");

  const handleProductClick1 = () => {
    navigate("/wishlist");
  };

  return (
    <>
      <div>
        <Header handleCloseModal1={handleCloseModal1} confirmSignOut={confirmSignOut} handleCancelSignOut={handleCancelSignOut} handleConfirmSignOut={handleConfirmSignOut} showModal1={showModal1} handleClick4={handleClick4} handleSignOut={handleSignOut} user={user} addToCart={addToCart} handleProductClick1={handleProductClick1} handleClick19={handleClick19}/>
        <Intro handleClick2={handleClick2}/>
        <NewProduct items={items}  handleProductClick={handleProductClick}  addToWish={addToWish}/>
        <Features handleClick2={handleClick2} />
        <Recommended items={items} handleProductClick={handleProductClick}  addToWish={addToWish}/>
        <Footer />
      </div>
    </>
  );
};
