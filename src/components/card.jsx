import React, { useState, useEffect } from 'react'
import products from '../DB/product.json'

function Card() {
  const [category, setCategory] = useState('all')

  function filterProduct(value) {
    setCategory(value);
    filteredButtonSelected(value);
  }


  async function filteredButtonSelected(value) {
    const button = document.querySelectorAll('.category-select');
    // Remove the "background-button-selected" class everytime the button is clicked at start to clear old selection
    button.forEach((i) => {
        i.classList.remove('background-button-selected');
    });
    let cnt = -1;
    // Add the "background-button-selected" class to individual the button when it is clicked
    button.forEach((i) => {
        let selected = '';
        selected = i.getAttribute('productcategory');
        cnt++;
        if (value === selected) {
            button[cnt].classList.add('background-button-selected');
            return;
        }
    });
  }


  useEffect(() => {
    setCategory('all')
  }, [])

  return (
    <div className="App">
      <header>
        <div className="filter-section">
          <button
            rel="noopener noreferrer"
            className="category-select background-button"
            productcategory = "all"
            onClick={() => filterProduct("all")}
          >
            😉 All
          </button>

          <button
            rel="noopener noreferrer"
            className="category-select background-button"
            productcategory = "remote"
            onClick={() => filterProduct("remote")}
          >
            🤯 Remote Jobs
          </button>

          <button
            rel="noopener noreferrer"
            className="category-select background-button"
            productcategory = "resume"
            onClick={() => filterProduct("resume")}
          >
            😎 Resume Builder
          </button>

          <button
            rel="noopener noreferrer"
            className="category-select background-button"
            productcategory = "tweet"
            onClick={() => filterProduct("tweet")}
          >
            🤩 Tweet to Image
          </button>

          <button
            rel="noopener noreferrer"
            className="category-select background-button"
            productcategory = "code"
            onClick={() => filterProduct("code")}
          >
            🦾 Code to Image
          </button>

          <button
            rel="noopener noreferrer"
            className="category-select background-button"
            productcategory = "ethical"
            onClick={() => filterProduct("ethical")}
          >
            😍 Ethical Hacking
          </button>

          <button
            rel="noopener noreferrer"
            className="category-select background-button"
            productcategory = "movies"
            onClick={() => filterProduct("movies")}
          >
            🎥 Movies | Series
          </button>

          <button
            rel="noopener noreferrer"
            className="category-select background-button"
            productcategory = "extensions"
            onClick={() => filterProduct("extensions")}
          >
            🛠️ Useful Extensions
          </button>

          <button
            rel="noopener noreferrer"
            className="category-select background-button"
            productcategory = "tools"
            onClick={() => filterProduct("tools")}
          >
            🛠️ Useful Tools
          </button>
        </div>
      </header>
      <div className="card_wrapper">
        <div className="cols">
          {products.map((product, index) => {
            return category === 'all' || category === product.category ? (
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
                      <h3>{product.productName}</h3>
                      <br />
                      <p>{product.description}</p>
                      <br />
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          })}
        </div>
      </div>
    </div>
  )
}

export default Card
