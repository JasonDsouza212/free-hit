import { useContext, useState } from 'react';
import { ToolContext } from '../../App';
import ShareModel from './ShareModel';
import '../../styles/GridView.css';

const GridView = ({ currentProducts }) => {
  const [isCopied, setIsCopied] = useState(false); // State to track whether link is copied
  const { handelBookmarkAdd, bookmarks, deleteres, darkMode } = useContext(ToolContext);
  const [cardModalVisibility, setCardModalVisibility] = useState(false);
  const [customShareLink, setCustomShareLink] = useState('');


  const handleShareClick = async (product) => {
    try {
      if (navigator.share) {
        let customShareLink = `${window.location.href.split('?')[0]}?q=${encodeURIComponent(
          product.productName
        )}`;

        await navigator.share({
          title: product.productName,
          text: product.description,
          url: customShareLink,
        });
      } else {
        setCardModalVisibility(true);
        const link = `${window.location.origin}/?q=${encodeURIComponent(product.productName)}`;
        setCustomShareLink(link);
        // await navigator.clipboard.writeText(link);
        console.log('Link copied!');
        console.log("Web Share API is not supported in this browser.");
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleCopyLink = () => {
    try {
      navigator.clipboard.writeText(customShareLink);
      console.log('Link copied!');

      setIsCopied(true); // Set the state to indicate link is copied
      setTimeout(() => {
        setIsCopied(false); // Reset the state after a delay
      }, 3000); // Reset after 3 seconds
    } catch (error) {
      console.error('Error copying link:', error);
    }
  };

  const handleShareModalClose = () => {
    setCardModalVisibility(false);
  };

  return (
    <main 
      className={`grid ${darkMode ? 'dark-mode' : ''}`}
      style={{ userSelect: cardModalVisibility ? 'none' : 'auto' }}
    >
      {currentProducts.map((product, index) => (
        <article key={index}>
          <div className="text_top">
            {product.image ? (
              <div className='card-image'>
                <img
                  className={`${darkMode ? 'dark-mode' : ''}`}
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
            <h2 className={`card-title ${darkMode ? 'dark-mode' : ''}`}>
              {product.productName.charAt(0).toUpperCase() + product.productName.slice(1)}
            </h2>
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
          <p className={`card-description ${darkMode ? 'dark-mode' : ''}`}>
            {product.description}
          </p>
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
      <ShareModel
        isVisible={cardModalVisibility}
        link={customShareLink}
        darkMode={darkMode}
        onClose={handleShareModalClose}
        onCopy={handleCopyLink}
        isCopied={isCopied} // Pass the isCopied state
      />
    </main>
  );
}

export default GridView;
