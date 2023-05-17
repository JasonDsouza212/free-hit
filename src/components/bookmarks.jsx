import React, { useContext } from 'react'
import Header from './header'
import { ToolContext } from '../App'

const BookMarks = ({ length }) => {
  const { category, bookmarkfilteredProducts, deleteres } =
    useContext(ToolContext)
  return (
    <>
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
    </>
  )
}

export default BookMarks
