import Header from './header'
import React, { useContext } from 'react'
import { ToolContext } from '../App'

const Card = ({ length }) => {
  const {
    filteredProducts,
    category,
    handelBookmarkAdd,
    bookmarkfilteredProducts,
    deleteres,
  } = useContext(ToolContext)

  return (
    <>
      <Header />
      <div className="card-container">
        {length == 0 ? (
          <p className="no-results">
            Sorry, no tools available for this search term
          </p>
        ) : (
          <main className="grid">
            {filteredProducts.map((product, index) => {
              return category === 'all' || category === product.category ? (
                <article key={index}>
                  <div className="text">
                    <h3>
                      <img className="card-img" src={product.image} alt="" />
                      <span className="card-title">{product.productName}</span>
                    </h3>
                    <p>{product.description}</p>
                    <div className="btn-cont">
                      <button>
                        <a target="_blank" href={product.link}>
                          Visit
                        </a>
                      </button>
                      {bookmarkfilteredProducts.some(
                        (obj) => obj['productName'] === product.productName
                      ) ? (
                        <button onClick={() => deleteres(product)}>
                          <a href="#">
                            Delete<i className="ri-bookmark-fill"></i>
                          </a>
                        </button>
                      ) : (
                        <button onClick={() => handelBookmarkAdd(product)}>
                          <a href="#">Bookmark</a>
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              ) : null
            })}
          </main>
        )}
      </div>
    </>
  )
}

export default Card
