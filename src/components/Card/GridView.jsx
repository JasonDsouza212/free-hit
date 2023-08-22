import { useContext,useEffect,useState } from 'react'
import { ToolContext } from '../../App'
import '../../styles/GridView.css'
import { toast } from 'react-hot-toast'

const GridView = ({ currentProducts }) => {
  const { handelBookmarkAdd, bookmarks, deleteres, darkMode } = useContext(ToolContext)

  const handleShareClick = async (product) => {
    try {
      if (navigator.share) {
        let customShareLink = `${
          window.location.href.split('?')[0]
        }?q=${encodeURIComponent(product.productName)}`

        await navigator.share({
          title: product.productName,
          text: product.description,
          url: customShareLink,
        })
      } else {
        // Fallback for browsers that do not support the Web Share API
        const customShareLink = `${
          window.location.origin
        }/?q=${encodeURIComponent(product.productName)}`

        // Copy the link to the clipboard
        await navigator.clipboard.writeText(customShareLink)
        toast.success('Link copied!');
        console.log('Web Share API is not supported in this browser.')
      }
    } catch (error) {
      toast.error(error?.message ?? "Something went wrong! Link couldn't be copied");
      console.error('Error sharing:', error)
    }
  }

  return (
    <main className={`grid ${darkMode ? 'dark-mode' : ''}`}>
      {currentProducts.map((product, index) => (
        <article key={index}>
          <div className="text_top">
            {product.image ? (
              <div className='card-image'>
                <img
                className={`${darkMode ? 'dark-mode' : ''} `}
                src={product.image}
                alt="product-img"
                onError={(e) => {
                  e.target.src = 'https://i.ibb.co/9H0s34n/default-img.jpg';
                }}
              />
              </div>
            ) : (
              <img
                className={`card-image ${darkMode ? 'dark-mode' : ''}`}
                src="https://i.ibb.co/9H0s34n/default-img.jpg"
                alt="Default"
              />
            )}
            <h2 className={`card-title ${darkMode ? 'dark-mode' : ''}`}>{product.productName.charAt(0).toUpperCase() + product.productName.slice(1,)}</h2>

            {/* Share icon and implement the click event */}
            <button
              className={`share-icon`}
              onClick={() => handleShareClick(product)}
            >
              <i
                className="ri-share-line"
                style={{ color: darkMode ? 'white' : '' }}
              ></i>
            </button>
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
              <button className={`delete ${darkMode ? 'dark-mode' : ''}`} onClick={(event) => {
                event.stopPropagation();
                deleteres(product);
              }}
              >
                  Delete<i className={`ri-bookmark-fill ${darkMode ? 'dark-mode' : ''}`}></i>
              </button>
            ) : (
                <button
                  className={`bookmark ${darkMode ? 'dark-mode' : ''}`}
                  onClick={() => handelBookmarkAdd(product)}
                >
                  <font size="4">
                    Bookmark
                  </font>
                </button>
            )}
          </div>
        </article>
      ))}
    </main>
  );
}

export default GridView
