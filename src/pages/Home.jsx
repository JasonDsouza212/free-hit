import Header from '../components/Navbar'
import React, { useContext, useEffect, useState } from 'react'
import { ToolContext } from '../App'
import noresultimg from '../assets/sad-face-2.webp'
import GridView from '../components/Card/GridView'
import ListView from '../components/Card/ListView'
import { BsFillGridFill, BsListUl } from 'react-icons/bs'
import '../styles/Home.css'
import { useSearchParams, Navigate } from 'react-router-dom'
import checkFilter from "..//utils/check_filters"
import Loader from '../components/Loader'
import products from "../DB/product.json"
import filterProducts from '../utils/filter/filter_products'
import searchProducts from '../utils/search/search_products'
import Pagination from '../components/Pagination'

const Card = () => {
  const {
    gridView,
    setGridView,
    darkMode
  } = useContext(ToolContext)


  const [searchParams,] = useSearchParams()
  let filters = searchParams.get('filters') || "all"
  filters = filters.split(",")

  const searchTerm = searchParams.get('q') || ''

  if (checkFilter(filters)) return <Navigate to="/notfound" />

  const filteredProducts = filterProducts(products, filters)
  let currentProducts = searchProducts(filteredProducts, searchTerm)

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500)
  }, [])

  const productNames = filteredProducts?.map((product) => product.productName) || []

  const productsPerPage = 16
  const totalPages = Math.ceil(currentProducts.length / productsPerPage)

  const filterNames = searchTerm.length > 0 ? productNames.filter((productName) => productName.toLowerCase().startsWith(searchTerm.toLowerCase())) : []
  if (filterNames.length === 1 && currentProducts.filter(product => product.productName === searchTerm).length === 1) {
    currentProducts = currentProducts.filter(product => product.productName === filterNames[0])
  } else if (searchTerm.length === 0) {
    const currentPage = searchParams.get('page') || 1
    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage
    currentProducts = currentProducts.slice(firstProductIndex, lastProductIndex)
  }

  return (
    <div className={`card_container ${darkMode ? 'dark-mode' : ''}`}>
      <Header filteredSuggestions={filterNames} />
      <div className="card_view">
        {totalPages > 1 && searchTerm.length === 0 && <Pagination totalPages={totalPages} atTop />}
        <BsFillGridFill
          onClick={() => setGridView(true)}
          size={22}
          title="Grid"
          color={gridView ? "#212121" : "#9E9E9E"}
        />
        <BsListUl
          onClick={() => setGridView(false)}
          size={28}
          title="List"
          color={gridView ? "#9E9E9E" : "#212121"}
        />

      </div>
      <div className="card-container">
        {!isLoading ?
          currentProducts.length === 0 ? (
            <div className="not-found-wrapper">
              <p className={`no-results ${darkMode ? 'dark-mode' : ''}`}>
                Sorry, our toolbox seems empty for this search term!
              </p>
              <img className="not-found-img" src={noresultimg} alt="not found" />
            </div>
          ) : gridView ? (
            <GridView currentProducts={currentProducts} />
          ) : (
            <ListView currentProducts={currentProducts} />
          )
          :
          <div className="loader">
            <Loader />
          </div>
        }
      </div>
      {totalPages > 1 && searchTerm.length === 0 && <Pagination totalPages={totalPages} />}
    </div>
  )
}

export default Card
