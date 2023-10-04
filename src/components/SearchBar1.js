import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import items from "./items";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer1 from "./Footer1";
import SearchResult from "./SearchResult";

export default function SearchBar1({ addToCart }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [products] = useState(items);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = () => {
    // Redirect to the '/search' route with the search query as a query parameter
    navigate(`/search?query=${search}`);
  };
 
  // const handleClick4 = () => navigate("/mycart");

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
          product.description2.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]); // Clear filtered products when not on '/search' route
    }
  }, [location, products]);
  const [isShown, setIsShown] = useState(false);
  function handleClick() {
    setIsShown((current) => !current);
  }

  return (
    <>

      <div className="col-lg-5 col-md-12 col-12">
        <div class="input-group ">
          <input
            type="search"
            class="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
          />
          <span
            class="btn btn-primary shadow-0"
            id="search-addon"
            onClick={handleSearch}
          >
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
    </>
  );
}
