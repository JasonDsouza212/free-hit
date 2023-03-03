import React, { useState, useEffect } from "react";
import { products } from "../DB/product";
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
            className="background-button"
            onClick={() => filterProduct("all")}
          >
            😉 All
          </button>

          <button
            rel="noopener noreferrer"
            className="background-button"
            onClick={() => filterProduct("remote")}
          >
            🤯 Remote Jobs
          </button>

          <button
            rel="noopener noreferrer"
            className="background-button"
            onClick={() => filterProduct("resume")}
          >
            😎 Resume Builder
          </button>

          <button
            rel="noopener noreferrer"
            className="background-button"
            onClick={() => filterProduct("tweet")}
          >
            🤩 Tweet to Image
          </button>

          <button
            rel="noopener noreferrer"
            className="background-button"
            onClick={() => filterProduct("code")}
          >
            🦾 Code to Image
          </button>

          <button
            rel="noopener noreferrer"
            className="background-button"
            onClick={() => filterProduct("ethical")}
          >
            😍 Ethical Hacking
          </button>

          <button
            rel="noopener noreferrer"
            className="background-button"
            onClick={() => filterProduct("tools")}
          >
            🛠️ Useful Tools
          </button>
        </div>
      </header>
      <div id="products">
        <div className="container">
          {products.data.map((product, index) => {
            if (category === "all" || category === product.category) {
              return (
                <div key={index}>
                  <div className="card">
                    <div className="box">
                      <div className="content">
                        <img
                          className="card-image"
                          src={product.image}
                          alt={product.productName}
                        />
                        <h3>{product.productName}</h3>
                        <a
                          className="website-link-btn"
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ↗️ Website
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
