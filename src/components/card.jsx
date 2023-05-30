import Header from './header'
import React, { useContext } from 'react'
import { ToolContext } from '../App'
import noresultimg from '../images/sad-face-2.png'
import { useSearchParams } from 'react-router-dom'

const Card = ({ length }) => {
  const {
    filteredProducts,
    handelBookmarkAdd,
    bookmarkfilteredProducts,
    deleteres,
  } = useContext(ToolContext)

  const [searchParams, ] = useSearchParams()
  const filter = searchParams.get("filter") || "all"

  return (
    <>
      <Header />
      <div className="card-container">
        {length == 0 ? (
          <div className='not-found-wrapper'>
          <p className="no-results">
          Sorry, our toolbox seems empty for this search term!
          </p>
            <img class="not-found-img" src={noresultimg} alt=""/>
            </div>
        ) : (
          <main className="grid">
            {filteredProducts.map((product, index) => {
              return filter === 'all' || filter === product.category ? (
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
                          <font color="white" size="3">
                            Delete<i className="ri-bookmark-fill"></i>
                          </font>
                        </button>
                      ) : (
                        
                          <button
                            className="bookmark"
                            onClick={() => handelBookmarkAdd(product)}
                          >
                            <font color="white" size="4">
                              Bookmark
                            </font>
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
