import React, { useContext, useState, useEffect } from 'react'
import Header from './header'
import { ToolContext } from '../App'
import noresultimg from '../images/sad-face.png'
import { useSearchParams } from 'react-router-dom'

const BookMarks = ({ length }) => {
  const [flag, setFlag] = useState(false)
  const { bookmarkfilteredProducts, deleteres } = useContext(ToolContext)
  const [searchParams] = useSearchParams()
  const category = searchParams.get('filter') || 'all'

  useEffect(() => {
    const hasBookmark = bookmarkfilteredProducts.some(
      (product) => category === 'all' || category === product.category
    )
    setFlag(hasBookmark)
  }, [category, bookmarkfilteredProducts])

  return (
    <div className="card_container">
      <Header />
      <div className="card-container">
        {length === 0 ? (
          <div className="not-found-wrapper">
            <p className="no-results">Sorry, no BookMarks in sight!</p>
            <img class="not-found-img" src={noresultimg} alt="" />
          </div>
        ) : (
          <>
            {flag ? (
              <main className="grid">
                {bookmarkfilteredProducts.map((product) => {
                  return category === 'all' || category === product.category ? (
                    <article>
                      <div className="text">
                        <div className="text_top">
                          <img
                            className="card-img"
                            src={product.image}
                            alt=""
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
                  ) : null
                })}
              </main>
            ) : (
              <p className="no-results">
                {category === 'all'
                  ? 'There are no bookmarks'
                  : `There aren't bookmarks from ${category} section`}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default BookMarks
