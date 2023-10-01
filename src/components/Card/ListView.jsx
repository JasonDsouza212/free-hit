import { useContext, useState } from 'react';
import { ToolContext } from '../../App';
import { toast } from 'react-hot-toast'
import '../../styles/ListView.css';
import { Box, Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const ListView = ({ currentProducts }) => {
  const { handelBookmarkAdd, bookmarks, deleteres, darkMode } = useContext(ToolContext);
  const [cardModelVisibility, setCardModelVisibility] = useState(false);
  const [customShareLink, setCustomShareLink] = useState('');
  const [isCopied, setIsCopied] = useState(false); // State to track copied status

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
    <Accordion 
      allowToggle 
      className={`list ${darkMode ? 'dark-mode' : ''}`}
      style={{ userSelect: cardModelVisibility ? 'none' : 'auto' }}
    >
      {currentProducts.map((product, index) => (
        <AccordionItem
          borderRadius="8px"
          boxShadow={darkMode ? '8px 8px 2px 0px #ffffff' : '8px 8px 2px 0px #373530'}
          border={darkMode ? '1px solid #ffffff' : '1px solid #373530'}
          key={index}
          className="accordion_item"
        >
          <AccordionButton>
            <Box padding={1} py="3px" flex="1" className="image">
              {product.image ? (
                <div className='card-img'>
                  <img
                  className={`${darkMode ? 'dark-mode ' : ''}`}
                  src={product.image}
                  alt="product-img"
                  onError={(e) => {
                    e.target.src = 'https://i.ibb.co/9H0s34n/default-img.jpg';
                  }}
                />
                </div>
              ) : (
                <img
                  className={`card-img ${darkMode ? 'dark-mode' : ''}`}
                  src="https://i.ibb.co/9H0s34n/default-img.jpg"
                  alt="Default"
                />
              )}
              <div className="accordion_btn">
                <h2 className={`card-title ${darkMode ? 'dark-mode' : ''}`}>
                  {product.productName.charAt(0).toUpperCase() + product.productName.slice(1,)}
                  <button
                  className={`share-icon`}
                  onClick={() => handleShareClick(product)}
                >
                  <i
                    className="ri-share-line"
                    style={{ color: darkMode ? 'white' : '' , marginLeft:'10px', fontSize:'18px'}}
                  ></i>
                </button>
                </h2>
                
                <div className="btn-cont">
                  <a target="_blank" href={product.link}>
                    <button className={`visit ${darkMode ? 'dark-mode' : ''}`}>
                      <font size="3">Visit</font>
                    </button>
                  </a>
                  {bookmarks.some((obj) => obj['productName'] === product.productName) ? (
                    <button className={`delete ${darkMode ? 'dark-mode' : ''}`}
                      onClick={(event) => {
                        event.stopPropagation();
                        deleteres(product);
                      }}
                    >
                      <a>Delete
                        <i className={`ri-bookmark-fill ${darkMode ? 'dark-mode' : ''}`}></i>
                      </a>
                    </button>
                  ) : (
                    <a>
                      <button
                        className={`bookmark ${darkMode ? 'dark-mode' : ''}`}
                        onClick={(event) => {
                          event.stopPropagation();
                          handelBookmarkAdd(product);
                        }}
                      >
                        <font size="3">Bookmark</font>
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </Box>
            <AccordionIcon className={`down ${darkMode ? 'dark-mode' : ''}`} as={BsChevronDown} size={5} fontWeight="bold" />
          </AccordionButton>
          <AccordionPanel py={2} pt={0}>
            <div className="text">
              <div className="accordion_panel">
                <p>
                  {product.description}
                </p>
                <div className="btn-cont ">
                  <a target="_blank" href={product.link}>
                    <button className="visit">
                      <font size="3">Visit</font>
                    </button>
                  </a>
                  {bookmarks.some((obj) => obj['productName'] === product.productName) ? (
                    <button onClick={() => deleteres(product)}>
                      <a>
                        Delete<i className="ri-bookmark-fill"></i>
                      </a>
                    </button>
                  ) : (
                    <a>
                      <button
                        className="bookmark"
                        onClick={() => handelBookmarkAdd(product)}
                      >
                        <font size="3">Bookmark</font>
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
      ))}
      {/* Use the ShareModel component */}
    </Accordion>
  );
};

export default ListView;
