
import React, { useContext } from 'react'
import Header from '../components/Navbar'
import { ToolContext } from '../App'
import noresultimg from '../assets/sad-face.webp'
import { useSearchParams, Navigate } from 'react-router-dom'
import filterProducts from '../utils/filter/filter_products'
import checkFilter from '../utils/check_filters'
import searchProducts from '../utils/search/search_products'
import GridView from '../components/Card/GridView'
import ListView from '../components/Card/ListView'
import { BsFillGridFill, BsListUl } from 'react-icons/bs'
import { useState } from 'react'


const BookMarks = () => {
  const [gridView, setGridView] = useState(true)
  const { bookmarks, deleteres } =
    useContext(ToolContext);

  const [searchParams] = useSearchParams()
  let filters = searchParams.get('filters') || "all"
  filters = filters.split(",")

  const searchTerm = searchParams.get('q') || '' 

  if (checkFilter(filters)) return <Navigate to="/notfound" />

  const filteredProducts = filterProducts(bookmarks, filters)
  let currentProducts = searchProducts(filteredProducts, searchTerm)

  const productNames = filteredProducts?.map((product) => product.productName) || []
  
  const filterNames = searchTerm.length > 0 ? productNames.filter((productName) => productName.toLowerCase().startsWith(searchTerm.toLowerCase())) : []

  if (filterNames.length == 1 && currentProducts.filter(product => product.productName == searchTerm) == 1) {
    currentProducts = currentProducts.filter(product => product.productName == filterNames[0])  
  }

  const { darkMode } = useContext(ToolContext);

  return ( 
    <div className={`card_container ${darkMode ? 'dark-mode' : ''}`}>
      <Header filteredSuggestions={filterNames} />
      <div className="card_view">
        <BsFillGridFill
          onClick={() => setGridView(true)}
          size={22}
          color={gridView ? "#212121" : "#9E9E9E"}
        />
        <BsListUl
          onClick={() => setGridView(false)}
          size={28}
          color={gridView ? "#9E9E9E" : "#212121"}
        />
      </div>
      <div className="card-container">
        {currentProducts.length === 0 ? (
          <div className="not-found-wrapper">
            <p className={`no-results ${darkMode ? 'dark-mode' : ''}`}>Sorry, no BookMarks in sight!</p>
            <img className="not-found-img" src={noresultimg} alt="no bookmarks" />
          </div>
        ) : (
          <>
            {filteredProducts.length > 0 ? (

              gridView ? (
                <GridView currentProducts={currentProducts} />
              ) : (
                <ListView currentProducts={currentProducts} />
              )

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
