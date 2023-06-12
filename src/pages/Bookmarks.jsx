import React, { useContext, useState, useEffect } from 'react'
import Header from '../components/Navbar'
import { ToolContext } from '../App'
import noresultimg from '../assets/sad-face.png'
import { useSearchParams, Navigate } from 'react-router-dom'
import filterProducts from '../utils/filter/filter_products'
import checkFilter from '../utils/check_filters'
import searchProducts from '../utils/search/search_products'

const BookMarks = () => {
  const { bookmarks, deleteres } =
    useContext(ToolContext);

  const [searchParams] = useSearchParams()
  let filters = searchParams.get('filters') || "all"
  filters = filters.split(",")

  const searchTerm = searchParams.get('q') || '' 

  if (checkFilter(filters)) return <Navigate to="/notfound" />

  const filteredProducts = filterProducts(bookmarks, filters)
  const currentProjects = searchProducts(filteredProducts, searchTerm)


  return (
    <div className="card_container">
      <Header />
      <div className="card-container">
        {currentProjects.length === 0 ? (
          <div className="not-found-wrapper">
            <p className="no-results">Sorry, no BookMarks in sight!</p>
            <img className="not-found-img" src={noresultimg} alt="no bookmarks" />
          </div>
        ) : (
          <>
            {filteredProducts.length > 0 ? (
              <main className="grid">
                {currentProjects.map((product) => (
                  <article>
                    <div className="text">
                      <div className="text_top">
                        <img
                          className="card-img"
                          src={product.image}
                          alt="product"
                        />
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
                ))}
              </main>
            ) : (
              <p className="no-results">
                There are no bookmarks
              </p>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default BookMarks
