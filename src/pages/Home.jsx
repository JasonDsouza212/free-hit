import Header from '../components/Navbar'
import React, { useContext } from 'react'
import { ToolContext } from '../App'
import noresultimg from '../assets/sad-face-2.png'
import GridView from '../components/Card/GridView'
import ListView from '../components/Card/ListView'
import { BsFillGridFill, BsListUl } from 'react-icons/bs'
import '../styles/Home.css'
import { useSearchParams, Navigate } from 'react-router-dom'
import { allFilters } from '../utils/data/filters'

const Card = ({ length }) => {
  const {
    gridView,
    setGridView,
  } = useContext(ToolContext)

  const [searchParams,] = useSearchParams()
  let filters = searchParams.get('filters') || "all"
  filters = filters.split(",")
  
  for (let i = 0; i < filters.length; i++) {
    if (! allFilters.includes(filters[i].toLowerCase())) {
      return <Navigate to="/notfound" />
    }
  }

  return (
    <div className="card_container">
      <Header />
      <div className="card_view">
        <BsFillGridFill onClick={() => setGridView(true)} size={22} />
        <BsListUl
          onClick={() => setGridView(false)}
          size={28}
          color="#212121"
        />
      </div>
      <div className="card-container">
        {length == 0 ? (
          <div className="not-found-wrapper">
            <p className="no-results">
              Sorry, our toolbox seems empty for this search term!
            </p>
            <img class="not-found-img" src={noresultimg} alt="" />
          </div>
        ) : gridView ? (
          <GridView filters={filters} />
        ) : (
          <ListView filters={filters} />
        )}
      </div>
    </div>
  )
}

export default Card
