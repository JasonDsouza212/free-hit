import React, { useContext } from 'react'
import Header from './header'
import { ToolContext } from '../App'

const BookMarks = ({ length }) => {
  const { category, bookmarkfilteredProducts, deleteres } =
    useContext(ToolContext)
  return (
    <div className="card_container">
      <Header />
      <div className="card-container">
        {length === 0 ? (
          <p className="no-results">Sorry, no BookMarks to Show</p>
        ) : (
          <main className="grid">
            {bookmarkfilteredProducts.map((product) => {
              return category === 'all' || category === product.category ? (
                <article>
                  <div className="text">
                    <div className="text_top">
                      <img className="card-img" src={product.image} alt="" />
                      <h3 className="card-title">{product.productName}</h3>
                    </div>
                    <p>{product.description}</p>
                    <div className="btn-cont">
                      <button>
                        <a target="_blank" href={product.link}>
                          Visit
                        </a>
                      </button>
                      <button onClick={() => deleteres(product)}>
                        <a href="#">
                          Delete <i className="ri-bookmark-fill"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </article>
              ) : null
            })}
          </main>
        )}
      </div>
    </div>
  )
}

export default BookMarks
