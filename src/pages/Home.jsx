import Header from '../components/Navbar'
import React, { useContext, useEffect, useState } from 'react'
import { ToolContext } from '../App'
import noresultimg from '../assets/sad-face-2.png'
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

const Card = () => {
  const {
    gridView,
    setGridView,
  } = useContext(ToolContext)

  const [searchParams,] = useSearchParams()
  let filters = searchParams.get('filters') || "all"
  filters = filters.split(",")

  const searchTerm = searchParams.get('q') || ''

  if (checkFilter(filters)) return <Navigate to="/notfound" />

  const filteredProducts = filterProducts(products, filters)
  const currentProducts = searchProducts(filteredProducts, searchTerm)

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500)
  }, [])

  const productNames = filteredProducts?.map((product) => product.productName) || []
  
  const filterNames = searchTerm.length > 0 ? productNames.filter((productName) => productName.toLowerCase().startsWith(searchTerm.toLowerCase())) : []

  return (
    <div className="card_container">
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
        {!isLoading ?
          currentProducts.length == 0 ? (
            <div className="not-found-wrapper">
              <p className="no-results">
                Sorry, our toolbox seems empty for this search term!
              </p>
              <img class="not-found-img" src={noresultimg} alt="not found" />
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
    </div>
  )
}

export default Card
