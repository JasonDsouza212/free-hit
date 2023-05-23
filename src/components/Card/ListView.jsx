import { useContext } from 'react'
import { ToolContext } from '../../App'
import '../../styles/ListView.css'

const ListView = () => {
  const {
    filteredProducts,
    category,
    handelBookmarkAdd,
    bookmarkfilteredProducts,
    deleteres,
  } = useContext(ToolContext)
  return (
    <main className="list">
      {filteredProducts.map((product, index) => {
        return category === 'all' || category === product.category ? (
          <article key={index}>
            <div className="image">
              <img className="card-img" src={product.image} alt="" />
            </div>
            <div className="text">
              <div>
                <span className="card-title">{product.productName}</span>
                <p>{product.description}</p>
              </div>
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
  )
}

export default ListView
