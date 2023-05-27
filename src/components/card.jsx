import Header from './header'
import React, { Fragment, useContext } from 'react'
import { ToolContext } from '../App'
import GridView from './Card/GridView'
import ListView from './Card/ListView'
import { BsFillGridFill, BsListUl } from 'react-icons/bs'

const Card = ({ length }) => {
  const {
    filteredProducts,
    category,
    handelBookmarkAdd,
    bookmarkfilteredProducts,
    deleteres,
    gridView,
    setGridView,
  } = useContext(ToolContext)

  return (
    <>
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
          <p className="no-results">
            Sorry, no tools available for this search term
          </p>
        ) : gridView ? (
          <GridView />
        ) : (
          <ListView />
        )}
      </div>
    </>
  )
}

export default Card
