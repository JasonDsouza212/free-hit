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
                    <div className="card-head">
                      <img className="card-img" src={product.image} alt="" />
                      <h3 className="card-title">{product.productName}</h3>
                    </div>
                    <p>{product.description}</p>
                    <div className="btn-cont">
                      <a target="_blank" href={product.link}>
                        <button className="visit">
                          <font color="white" size="4">
                            Visit
                          </font>
                        </button>
                      </a>
                      {bookmarkfilteredProducts.some(
                        (obj) => obj['productName'] === product.productName
                      ) ? (
                        <button onClick={() => deleteres(product)}>
                          <a href="#">
                            Delete<i className="ri-bookmark-fill"></i>
                          </a>
                        </button>
                      ) : (
                        <a href="#">
                          <button
                            className="bookmark"
                            onClick={() => handelBookmarkAdd(product)}
                          >
                            <font color="white" size="4">
                              Bookmark
                            </font>
                          </button>
                        </a>
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
