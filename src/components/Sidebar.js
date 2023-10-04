import React from "react";
import { useState } from "react";

export default function Sidebar({
  handleBrandFilterChange,
  filters,
  handleRelatedItemClick,
}) {
  return (
    <>
      <div className="col-lg-3">
        {/* Toggle button */}
        <button
          className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>Show filter</span>
        </button>
        {/* Collapsible wrapper */}
        <div
          className="collapse card d-lg-block mb-5"
          id="navbarSupportedContent"
        >
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button text-dark bg-light"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Related items
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
              >
                <div className="accordion-body">
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href
                        className="text-dark"
                        onClick={() => handleRelatedItemClick("Camera")}
                        style={{cursor:"pointer"}}
                      >
                        Cameras{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href
                        className="text-dark"
                        onClick={() => handleRelatedItemClick("phone1")}
                        style={{cursor:"pointer"}}
                      >
                        Mobile Phones{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href
                        className="text-dark"
                        onClick={() => handleRelatedItemClick("watch")}
                        style={{cursor:"pointer"}}
                      >
                        Wrist Watches{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href
                        className="text-dark"
                        onClick={() => handleRelatedItemClick("headphone")}
                        style={{cursor:"pointer"}}
                      >
                        Headphones{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href
                        className="text-dark"
                        onClick={() => handleRelatedItemClick("bag")}
                        style={{cursor:"pointer"}}
                      >
                        Backpacks{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href
                        className="text-dark"
                        onClick={() => handleRelatedItemClick("Jeans")}
                        style={{cursor:"pointer"}}
                      >
                        Short Jeans{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href
                        className="text-dark"
                        onClick={() => handleRelatedItemClick("Jacket")}
                        style={{cursor:"pointer"}}
                      >
                        Jackets{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href
                        className="text-dark"
                        onClick={() => handleRelatedItemClick("Shirt")}
                        style={{cursor:"pointer"}}
                      >
                        Shirts/T-Shirts{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button text-dark bg-light"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Brands
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse show"
                aria-labelledby="headingTwo"
              >
                <div className="accordion-body">
                  <div>
                    {/* Checked checkbox */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckChecked1"
                        defaultChecked={filters.brands.includes("Bata")}
                        onChange={() => handleBrandFilterChange("Bata")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked1"
                      >
                        Bata
                      </label>
                      {/* <span className="badge badge-secondary float-end">
                                120
                              </span> */}
                    </div>
                    {/* Checked checkbox */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckChecked2"
                        defaultChecked={filters.brands.includes("RedTape")}
                        onChange={() => handleBrandFilterChange("RedTape")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked2"
                      >
                        RedTape
                      </label>
                      {/* <span className="badge badge-secondary float-end">
                                15
                              </span> */}
                    </div>
                    {/* Checked checkbox */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckChecked3"
                        defaultChecked={filters.brands.includes("Levis")}
                        onChange={() => handleBrandFilterChange("Levis")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked3"
                      >
                        Levis
                      </label>
                      {/* <span className="badge badge-secondary float-end">
                                35
                              </span> */}
                    </div>
                    {/* Checked checkbox */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckChecked4"
                        defaultChecked={filters.brands.includes("Lee")}
                        onChange={() => handleBrandFilterChange("Lee")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked4"
                      >
                        Lee
                      </label>
                      {/* <span className="badge badge-secondary float-end">
                                89
                              </span> */}
                    </div>
                    {/* Default checkbox */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                        defaultChecked={filters.brands.includes("Canon")}
                        onChange={() => handleBrandFilterChange("Canon")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Canon
                      </label>
                      {/* <span className="badge badge-secondary float-end">
                                30
                              </span> */}
                    </div>
                    {/* Default checkbox */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                        defaultChecked={filters.brands.includes("Samsung")}
                        onChange={() => handleBrandFilterChange("Samsung")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Samsung
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                        defaultChecked={filters.brands.includes("GoPro")}
                        onChange={() => handleBrandFilterChange("GoPro")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        GoPro
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                        defaultChecked={filters.brands.includes("Casio")}
                        onChange={() => handleBrandFilterChange("Casio")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Casio
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sidebar */}
    </>
  );
}
