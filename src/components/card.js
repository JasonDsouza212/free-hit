import React, { useState, useEffect } from "react";
import { products } from "../DB/product";
function Card() {
  const [category, setCategory] = useState("all");

  function filterProduct(value) {
    setCategory(value);
  }

  useEffect(() => {
    setCategory("all");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="filter-section">
          <div class="button-wrapper">
            <button
              rel="noopener noreferrer"
              class="background-button"
              onClick={() => filterProduct("all")}
              title="All"
            ></button>
          </div>
          <div class="button-wrapper">
            <button
              rel="noopener noreferrer"
              class="background-button"
              onClick={() => filterProduct("remote")}
              title="Remote Jobs"
            ></button>
          </div>
          <div class="button-wrapper">
            <button
              rel="noopener noreferrer"
              class="background-button"
              onClick={() => filterProduct("resume")}
              title="Resume Builder"
            ></button>
          </div>
          <div class="button-wrapper">
            <button
              rel="noopener noreferrer"
              class="background-button"
              onClick={() => filterProduct("tweet")}
              title="Tweet to Image"
            ></button>
          </div>
          <div class="button-wrapper">
            <button
              rel="noopener noreferrer"
              class="background-button"
              onClick={() => filterProduct("code")}
              title="Code to Image"
            ></button>
          </div>
          <div class="button-wrapper">
            <button
              rel="noopener noreferrer"
              class="background-button"
              onClick={() => filterProduct("tools")}
              title="Useful Tools"
            ></button>
          </div>
        </div>
        <div id="products">
          <div class="container">
            {products.data.map((product, index) => {
              if (category === "all" || category === product.category) {
                return (
                  <div key={index}>
                    <div class="card">
                      <div class="box">
                        <div class="content">
                          <img
                            className="card-image"
                            src={product.image}
                            alt={product.productName}
                          />
                          <h3>{product.productName.toUpperCase()}</h3>
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button>Website</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Card;
