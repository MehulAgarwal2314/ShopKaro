import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Shop } from "./components/shop";
import Button1 from "./components/page1";
import ProductDetail from "./components/ProductDetail";
import Mycart from "./components/mycart";
import Checkout from "./components/Checkout";
import Page2 from "./components/page2";
import items from "./components/items";
import SearchBar1 from "./components/SearchBar1";
import SearchResult from "./components/SearchResult";
import { useLocation } from "react-router-dom";
import Wishlist from "./components/Wishlist";
import Success from "./components/success";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { auth } from "./firebase";
import Electronics from "./components/Electronics";
import Fashion from "./components/Fashion";
import Watches from "./components/Watches";
import Accessories from "./components/Accessories";

export default function App() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  let [items1, setItems1] = useState(items);
  const [cart, setCart] = useState([]);
  const [items2,setItems2] =useState(items);
  const [wishbox,setwishbox] = useState([]);
  const addToCart = (item1) => {
    const itemAlreadyInCart = cart.find((cartItem) => cartItem.id === item1.id);
    if (itemAlreadyInCart) {
      // If the item is already in the cart, increase its quantity
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item1.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      setCart([...cart, { ...item1, quantity: 1 }]);
    }
  };

  const removeFromCart = (item1) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item1.id);
    setCart(updatedCart);
  };

  const addToWish = (item2) => {
    const itemAlreadyInwishbox = wishbox.find((wishItem) => wishItem.id === item2.id);
    if (itemAlreadyInwishbox) {
      // If the item is already in the cart, increase its quantity
      const updatedwishbox = wishbox.map((wishItem) =>
        wishItem.id === item2.id
          ? { ...wishItem, quantity: wishItem.quantity + 1 }
          : wishItem
      );
      setwishbox(updatedwishbox);
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      setwishbox([...wishbox, { ...item2, quantity: 1 }]);
    }
  };


  // const handleQuantityChange = (item, newQuantity) => {
  //   const updatedCart = cart.map((cartItem) =>
  //     cartItem.id === cartItem.id
  //       ? { ...cartItem, quantity: parseInt(newQuantity, 10) || 0 }
  //       : cartItem
  //   );
  //   setCart(updatedCart);
  // };

  const navigate = useNavigate();
  const location = useLocation();
  const [products] = useState(items);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isShown, setIsShown] = useState(false);

  const [filters, setFilters] = useState({
    brands: [],
  });

  const handleSearch = () => {
    // Redirect to the '/search' route with the search query as a query parameter
    navigate(`/search?query=${search}`);
  };
  // const handleClick4 = () => navigate("/mycart");
  const handleBrandFilterChange = (brand) => {
    // Check if the brand is already selected, if yes, remove it; otherwise, add it
    if (filters.brands.includes(brand)) {
      console.log(`Removing brand: ${brand}`);
      setFilters({
        ...filters,
        brands: filters.brands.filter(
          (selectedBrand) => selectedBrand !== brand
        ),
      });
    } else {
      console.log(`Adding brand: ${brand}`);
      setFilters({
        ...filters,
        brands: [...filters.brands, brand],
      });
    }
  };
  const [selectedRelatedItem, setSelectedRelatedItem] = useState("");
  const handleRelatedItemClick = (relatedItem) => {
    // setSelectedRelatedItem(relatedItem);
    console.log("Clicked on related item:", relatedItem);
    setSelectedRelatedItem(relatedItem);
  };

  const calculateTotalPrice = (item) => {
    if (typeof item.price1 === 'number' && typeof item.quantity === 'number') {
      return item.price1 * item.quantity;
    } else {
      return 0; // Handle invalid price or quantity
    }
  };
 

  const filteredItems = items.filter((item) => {
    const brandFilterPass =
      filters.brands.length === 0 || filters.brands.includes(item.brand);

    if (selectedRelatedItem) {
      // Apply filtering based on related item
      return (
        brandFilterPass &&
        item.type.toLowerCase().includes(selectedRelatedItem.toLowerCase())
      );
    } else {
      // Apply filtering without considering related item
      return brandFilterPass;
    }
  });

  const filteredItemsByRelatedItem = selectedRelatedItem
    ? filteredItems.filter((item) =>
        item.type.toLowerCase().includes(selectedRelatedItem.toLowerCase())
      )
    : filteredItems;

  useEffect(() => {
    // Parse the search query parameter from the URL
    const searchQuery = new URLSearchParams(location.search).get("query");

    // Filter products based on the search query only when on the '/search' route
    if (location.pathname === "/search" && searchQuery) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          product.description2.toLowerCase().includes(searchQuery.toLowerCase()) || product.brand.toLowerCase().includes(searchQuery.toLowerCase())
          ||product.type.toLowerCase().includes(searchQuery.toLowerCase())  
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]); // Clear filtered products when not on '/search' route
    }
  }, [location, products]);

  function handleClick() {
    setIsShown((current) => !current);
  }
  const emptyCartAndNavigateToSuccess = () => {
    setCart([]); // Empty the cart
    navigate("/success"); // Navigate to the success page
  };
  const handleClick19 = () => navigate("/login");
  const handleQuantityChange = (item, newQuantity) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: parseInt(newQuantity, 10) || 0 }
        : cartItem
    );
    setCart(updatedCart);
  };

  const calculateTotalCartPrice = () => {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += calculateTotalPrice(item);
    }
    return totalPrice.toFixed(2); // Format the total price to two decimal places
  };
  const calculateTotalCartPriceWithAdditional = () => {
    const totalCartPrice = parseFloat(calculateTotalCartPrice()); // Get the total cart price from the previous function
    const totalWithAdditional = totalCartPrice + 4; // Add 4 to the total cart price
    return totalWithAdditional.toFixed(2); // Format the total price to two decimal places
  };
  const calculateTotalCartPriceWithAdditional2 = () => {
    const totalCartPrice2 = parseFloat(calculateTotalCartPriceWithAdditional()); // Get the total cart price from the previous function
    const totalWithAdditional2 = totalCartPrice2 + 15; // Add 4 to the total cart price
    return totalWithAdditional2.toFixed(2); // Format the total price to two decimal places
  };

// Function to get the quantity of a specific item in the cart
const getItemQuantityInCart = (itemId) => {
  const itemInCart = cart.find((item) => item.id === itemId);
  return itemInCart ? itemInCart.quantity : 0;
};

const handleProductClick = (id) => {
  navigate(`/ProductDetail/${id}`);
};

useEffect(() => {
  // Check Firebase authentication status
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      // User is signed in
      setUser(authUser);
    } else {
      // User is signed out
      setUser(null);
    }
  });

  return () => unsubscribe(); // Cleanup the Firebase listener
}, [])

const [showModal1, setShowModal1] = useState(false); // State to control modal visibility
const [confirmSignOut, setConfirmSignOut] = useState(false);

// Function to show the modal
const handleShowModal1 = () => {
  setShowModal1(true);
};

// Function to hide the modal
const handleCloseModal1 = () => {
  setShowModal1(false);
};


// const handleSignOut = () => {
//   auth
//   .signOut()
//   .then(() => {
//     // Sign-out successful.
//     console.log('User signed out');
//     // Show the modal after successful sign-out
//     handleShowModal1(); // Add this line to show the modal
//     })
//     .catch((error) => {
//       // An error occurred while signing out.
//       console.error('Error signing out:', error);
//     });
// };
const handleSignOut = () => {
  // Show the confirmation modal
  setConfirmSignOut(true);
};

const handleConfirmSignOut = () => {
  // Perform sign-out here
  auth
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log('User signed out');
      // Close the confirmation modal
      setConfirmSignOut(false);
    })
    .catch((error) => {
      // An error occurred while signing out.
      console.error('Error signing out:', error);
      // Close the confirmation modal
      setConfirmSignOut(false);
    });
};

const handleCancelSignOut = () => {
  // Close the confirmation modal without signing out
  setConfirmSignOut(false);
};


  
  return (
    <>
      <Routes>
        <Route path="/" element={<Shop confirmSignOut={confirmSignOut} handleCancelSignOut={handleCancelSignOut} handleConfirmSignOut={handleConfirmSignOut} handleCloseModal1={handleCloseModal1} showModal1={showModal1} handleSignOut={handleSignOut} user={user} handleProductClick={handleProductClick} addToCart={addToCart} addToWish={addToWish} handleClick19={handleClick19} name={userName}/>} />
        <Route
          path="/productlist"
          element={
            <Button1
             handleConfirmSignOut={handleConfirmSignOut}
            confirmSignOut={confirmSignOut} handleCancelSignOut={handleCancelSignOut} handleCloseModal1={handleCloseModal1} showModal1={showModal1} handleSignOut={handleSignOut} user={user}
            handleProductClick={handleProductClick}
              addToCart={addToCart}
              addToWish={addToWish}
              items1={items1}
              cart={cart}
              handleBrandFilterChange={handleBrandFilterChange}
              filters={filters}
              filteredItems={filteredItems}
              handleRelatedItemClick={handleRelatedItemClick}
              filteredItemsByRelatedItem={filteredItemsByRelatedItem} handleClick19={handleClick19}
            />
          }
        />
        <Route
          path="/page2"
          element={
            <Page2
            handleClick19={handleClick19}
             handleConfirmSignOut={handleConfirmSignOut}
            confirmSignOut={confirmSignOut} handleCancelSignOut={handleCancelSignOut} handleCloseModal1={handleCloseModal1} showModal1={showModal1} handleSignOut={handleSignOut} user={user}
            handleProductClick={handleProductClick}
              addToCart={addToCart}
              addToWish={addToWish}
              items1={items1}
              cart={cart}
              handleBrandFilterChange={handleBrandFilterChange}
              filters={filters}
              filteredItems={filteredItems}
              handleRelatedItemClick={handleRelatedItemClick}
              filteredItemsByRelatedItem={filteredItemsByRelatedItem}
            />
          }/>

        <Route path="/electronics" element={<Electronics handleClick19={handleClick19} handleConfirmSignOut={handleConfirmSignOut} confirmSignOut={confirmSignOut} handleCancelSignOut={handleCancelSignOut} handleCloseModal1={handleCloseModal1} showModal1={showModal1} handleSignOut={handleSignOut} user={user} handleProductClick={handleProductClick} addToCart={addToCart} handleClick={handleClick} addToWish={addToWish}/>}/>
        <Route path="/fashion" element={<Fashion handleClick19={handleClick19} handleConfirmSignOut={handleConfirmSignOut} confirmSignOut={confirmSignOut} handleCancelSignOut={handleCancelSignOut} handleCloseModal1={handleCloseModal1} showModal1={showModal1} handleSignOut={handleSignOut} user={user} handleProductClick={handleProductClick} addToCart={addToCart} handleClick={handleClick} addToWish={addToWish}/>}/>
        <Route path="/watches" element={<Watches handleClick19={handleClick19} handleConfirmSignOut={handleConfirmSignOut} confirmSignOut={confirmSignOut} handleCancelSignOut={handleCancelSignOut} handleCloseModal1={handleCloseModal1} showModal1={showModal1} handleSignOut={handleSignOut} user={user} handleProductClick={handleProductClick} addToCart={addToCart} handleClick={handleClick} addToWish={addToWish}/>}/>
        <Route path="/accessories" element={<Accessories handleClick19={handleClick19} handleConfirmSignOut={handleConfirmSignOut} confirmSignOut={confirmSignOut} handleCancelSignOut={handleCancelSignOut} handleCloseModal1={handleCloseModal1} showModal1={showModal1} handleSignOut={handleSignOut} handleProductClick={handleProductClick} user={user} addToCart={addToCart} handleClick={handleClick} addToWish={addToWish}/>}/>
        <Route path="/login" element={<Login name={userName}/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route
          path="/ProductDetail/:id"
          element={<ProductDetail handleClick19={handleClick19} handleConfirmSignOut={handleConfirmSignOut} addToCart={addToCart} confirmSignOut={confirmSignOut} handleCancelSignOut={handleCancelSignOut} handleCloseModal1={handleCloseModal1} showModal1={showModal1} handleSignOut={handleSignOut} user={user} />}
        />
        <Route
          path="/mycart"
          element={
            <Mycart
            
              addToCart={addToCart}
              items1={items1}
              cart={cart}
              setCart={setCart}
              setItems1={setItems1}
              showModal1={showModal1}
        handleCloseModal1={handleCloseModal1}
        handleSignOut={handleSignOut}
        user={user}
              handleClick={handleClick}
              removeFromCart={removeFromCart}
              handleQuantityChange={handleQuantityChange}
              calculateTotalPrice={calculateTotalPrice}
              calculateTotalCartPrice={calculateTotalCartPrice}
              calculateTotalCartPriceWithAdditional={calculateTotalCartPriceWithAdditional}
              handleProductClick={handleProductClick}
            />
          }
        />
        <Route path="/checkout" element={<Checkout user={user} getItemQuantityInCart={getItemQuantityInCart} calculateTotalPrice={calculateTotalPrice} cart={cart} emptyCartAndNavigateToSuccess={emptyCartAndNavigateToSuccess} calculateTotalCartPriceWithAdditional={calculateTotalCartPriceWithAdditional} calculateTotalCartPriceWithAdditional2={calculateTotalCartPriceWithAdditional2}/>} />
        <Route
          path="/search"
          element={
            <SearchResult handleConfirmSignOut={handleConfirmSignOut}
            confirmSignOut={confirmSignOut} handleCancelSignOut={handleCancelSignOut} handleCloseModal1={handleCloseModal1} showModal1={showModal1} handleSignOut={handleSignOut} user={user}
              products={products}
              addToCart={addToCart}
              search={search}
              setSearch={setSearch}
              location={location}
              handleClick={handleClick}
              filteredProducts={filteredProducts}
              setFilteredProducts={setFilteredProducts} handleClick19={handleClick19} handleProductClick={handleProductClick} addToWish={addToWish}
            />
          }
        />
        <Route path="/success" element={<Success/>}/>
        <Route path="/Wishlist" element={<Wishlist handleProductClick={handleProductClick} handleClick19={handleClick19} handleConfirmSignOut={handleConfirmSignOut} confirmSignOut={confirmSignOut} handleCancelSignOut={handleCancelSignOut} handleCloseModal1={handleCloseModal1} showModal1={showModal1} handleSignOut={handleSignOut} user={user} addToWish={addToWish} addToCart={addToCart} items2={items2}
              wishbox={wishbox} handleClick={handleClick} setItems2={setItems2} setwishbox={setwishbox}/>}/>
      </Routes>
    </>
  );
}
