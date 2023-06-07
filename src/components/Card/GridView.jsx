import { useContext } from 'react'
import { ToolContext } from '../../App'
import filterProducts from '../../utils/filter/filter_products'

const GridView = ({filters}) => {
  const {
    filteredProducts,
    handelBookmarkAdd,
    bookmarkfilteredProducts,
    deleteres,
  } = useContext(ToolContext)

  return (
    <main className="grid">
      {filterProducts(filteredProducts, filters).map((product, index) => (
          <article key={index}>
            <div className="text">
              <div className="text_top">
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
                    <a >
                      Delete<i className="ri-bookmark-fill"></i>
                    </a>
                  </button>
                ) : (
                  <a >
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
        ))}
    </main>
  )
}

export default GridView
