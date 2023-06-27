import { useContext } from 'react';
import { ToolContext } from '../../App';
import '../../styles/GridView.css';

const GridView = ({ currentProducts }) => {
  const { handelBookmarkAdd, bookmarks, deleteres, darkMode } = useContext(ToolContext);

  return (
    <main className={`grid ${darkMode ? 'dark-mode' : ''}`}>
      {currentProducts.map((product, index) => (
        <article key={index}>
          <div className="text_top">
            {product.image ? (
              <img
                className="card-img"
                src={product.image}
                alt=""
                onError={(e) => {
                  e.target.src = 'https://i.ibb.co/9H0s34n/default-img.jpg';
                }}
              />
            ) : (
              <img
                className="card-img"
                src="https://i.ibb.co/9H0s34n/default-img.jpg"
                alt="Default"
              />
            )}
            <h3 className={`card-title ${darkMode ? 'dark-mode' : ''}`}>{product.productName}</h3>
          </div>
          <p className={`card-description ${darkMode ? 'dark-mode' : ''}`}>{product.description}</p>
          <div className="btn-cont">
            <a target="_blank" href={product.link}>
              <button className={`visit ${darkMode ? 'dark-mode' : ''}`}>
                <font size="4">
                  Visit
                </font>
              </button>
            </a>
            {bookmarks.some(
              (obj) => obj['productName'] === product.productName
            ) ? (
              <button onClick={() => deleteres(product)}>
                <a>
                  Delete<i className="ri-bookmark-fill"></i>
                </a>
              </button>
            ) : (
              <a>
                <button
                  className={`bookmark ${darkMode ? 'dark-mode' : ''}`}
                  onClick={() => handelBookmarkAdd(product)}
                >
                  <font size="4">
                    Bookmark
                  </font>
                </button>
              </a>
            )}
          </div>
        </article>
      ))}
    </main>
  );
};

export default GridView;
