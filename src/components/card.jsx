const Card = ({ filterProduct, filteredProducts, searchTerm ,setSearchTerm, category}) => {
    return (
      <div className="App">
        <header>
          <div className="filter-section">
            <button
              rel="noopener noreferrer"
              className="category-select background-button"
              productcategory="all"
              onClick={() => filterProduct("all")}
            >
              😉 All
            </button>
  
            <button
              rel="noopener noreferrer"
              className="category-select background-button"
              productcategory="remote"
              onClick={() => filterProduct("remote")}
            >
              🤯 Remote Jobs
            </button>
  
            <button
              rel="noopener noreferrer"
              className="category-select background-button"
              productcategory="resume"
              onClick={() => filterProduct("resume")}
            >
              😎 Resume Builder
            </button>
  
            <button
              rel="noopener noreferrer"
              className="category-select background-button"
              productcategory="tweet"
              onClick={() => filterProduct("tweet")}
            >
              🤩 Tweet to Image
            </button>
  
            <button
              rel="noopener noreferrer"
              className="category-select background-button"
              productcategory="ai"
              onClick={() => filterProduct("ai")}
            >
              🤖 AI
            </button>
  
            <button
              rel="noopener noreferrer"
              className="category-select background-button"
              productcategory="ethical"
              onClick={() => filterProduct("ethical")}
            >
              😍 Ethical Hacking
            </button>
  
            <button
              rel="noopener noreferrer"
              className="category-select background-button"
              productcategory="movies"
              onClick={() => filterProduct("movies")}
            >
              🎥 Movies | Series
            </button>
  
            <button
              rel="noopener noreferrer"
              className="category-select background-button"
              productcategory="extensions"
              onClick={() => filterProduct("extensions")}
            >
              🔌 Useful Extensions
            </button>
  
            <button
              rel="noopener noreferrer"
              className="category-select background-button"
              productcategory="tools"
              onClick={() => filterProduct("tools")}
            >
              🛠️ Useful Tools
            </button>
          </div>
        </header>
        <div className="card_wrapper">
          <div className="cols">
            {filteredProducts.map((product, index) => {
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
              ) : null;
            })}
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  