import { useContext } from 'react'
import { ToolContext } from '../../App'
import '../../styles/ListView.css'
import {
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import { BsChevronDown } from 'react-icons/bs'
import filterProducts from '../../utils/filter/filter_products'

const ListView = ({filters}) => {
  const {
    filteredProducts,
    handelBookmarkAdd,
    bookmarkfilteredProducts,
    deleteres,
  } = useContext(ToolContext)
  return (
    <Accordion allowToggle className="list">
      {filterProducts(filteredProducts, filters).map((product, index) => (
          <AccordionItem
            borderRadius={'8px'}
            boxShadow={'8px 8px 2px 0px #373530'}
            border={'1px solid #373530'}
            key={index}
            className="accordion_item"
          >
            <AccordionButton>
              <Box padding={1} py={'3px'} flex="1" className="image">
                {product.image ? (
                  <img
                  className="card-img"
                  src={product.image}
                  alt=""
                  onError={(e) => {
                    e.target.src = "https://i.ibb.co/9H0s34n/default-img.jpg";
                  }}
                        />
                ) : (
                  <img className="card-img" src="https://i.ibb.co/9H0s34n/default-img.jpg" alt="Default" />
                )}
                <div className="accordion_btn">
                  <h3 className="card-title">{product.productName}</h3>
                  <div className="btn-cont">
                    <a target="_blank" href={product.link}>
                      <button className="visit">
                        <font color="white" size="3">
                          Visit
                        </font>
                      </button>
                    </a>
                    {bookmarkfilteredProducts.some(
                      (obj) => obj['productName'] === product.productName
                    ) ? (
                      <button onClick={(event) =>{event.stopPropagation();  deleteres(product)}}>
                        <a >
                          Delete<i className="ri-bookmark-fill"></i>
                        </a>
                      </button>
                    ) : (
                      <a >
                        <button
                          className="bookmark"
                          onClick={(event) => { event.stopPropagation(); handelBookmarkAdd(product)}}
                        >
                          <font color="white" size="3">
                            Bookmark
                          </font>
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </Box>
              <AccordionIcon as={BsChevronDown} size={5} fontWeight={'bold'} />
            </AccordionButton>
            <AccordionPanel py={2} pt={0}>
              <div className="text">
                <div className="accordion_panel">
                  <p>{product.description}</p>
                  <div className="btn-cont ">
                    <a target="_blank" href={product.link}>
                      <button className="visit">
                        <font color="white" size="3">
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
                          <font color="white" size="3">
                            Bookmark
                          </font>
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AccordionPanel>
          </AccordionItem>
        ))}
    </Accordion>
  )
}

export default ListView
