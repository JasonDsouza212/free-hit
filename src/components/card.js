import React, { useState, useEffect } from "react";
import { products } from "../DB/product";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
      <header>
        <div className="filter-section">
          <button
            rel="noopener noreferrer"
            class="background-button"
            onClick={() => filterProduct("all")}
          >
            😉 All
          </button>

          <button
            rel="noopener noreferrer"
            class="background-button"
            onClick={() => filterProduct("remote")}
          >
            🤯 Remote Jobs
          </button>

          <button
            rel="noopener noreferrer"
            class="background-button"
            onClick={() => filterProduct("resume")}
          >
            😎 Resume Builder
          </button>

          <button
            rel="noopener noreferrer"
            class="background-button"
            onClick={() => filterProduct("tweet")}
          >
            🤩 Tweet to Image
          </button>

          <button
            rel="noopener noreferrer"
            class="background-button"
            onClick={() => filterProduct("code")}
          >
            🦾 Code to Image
          </button>

          <button
            rel="noopener noreferrer"
            class="background-button"
            onClick={() => filterProduct("ethical")}
          >
            😍 Ethical Hacking
          </button>

          <button
            rel="noopener noreferrer"
            class="background-button"
            onClick={() => filterProduct("tools")}
          >
            🛠️ Useful Tools
          </button>
        </div>
      </header>
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
                        <h3>{product.productName}</h3>
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="website-link-btn">
                            ↗️ Website
                          </button>
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
    </div>
  );
}

export default Card;
