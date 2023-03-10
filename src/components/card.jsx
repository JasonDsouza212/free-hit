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
      <div class="card_wrapper">
        <div class="cols">
          {products.data.map((product, index) => {
          if (category === "all" || category === product.category) {
              return (
                  <div className="col" key={index}>
                    <div className="container">				
                        <div className="front">					
                            <div className="inner">
                                <span>
                                  <img 
                                  className="card_image"
                                  src={product.image}
                                  alt={product.productName} 
                                  />
                                </span>
                                <p>{product.productName}</p>              
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">     
                                <h3>{product.productName}</h3><br/>              
                                <p>{product.description}</p><br/>
                                <a 
                                href={product.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                >Visit</a>
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
