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
import Paginate from '../components/Paginate'
import filterProducts from '../utils/filter/filter_products'

const Card = ({ length }) => {
  const {
    gridView,
    setGridView,
    filteredProducts
  } = useContext(ToolContext)

  const [searchParams,] = useSearchParams()
  let filters = searchParams.get('filters') || "all"
  filters = filters.split(",")
  if (checkFilter(filters)) return <Navigate to="/notfound" />

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500)
  }, [])

  const [products] = useState(filterProducts(filteredProducts, filters))

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(16)

  const totalPages = Math.ceil(products.length / productsPerPage)

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage

  const currentProducts = products.slice(firstProductIndex, lastProductIndex)

  return (
    <div className="card_container">
      <Header />
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
          length == 0 ? (
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
      <Paginate currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default Card
