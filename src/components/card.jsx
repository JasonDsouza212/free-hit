import Header from './header'
import React, { Fragment, useContext } from 'react'
import { ToolContext } from '../App'
import { BsFillGridFill, BsListUl } from 'react-icons/bs'
import GridView from './Card/GridView'
import ListView from './Card/ListView'

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
      <div className="card-container">
        {length == 0 ? (
          <p className="no-results">
            Sorry, no tools available for this search term
          </p>
        ) : (
          <Fragment>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                width: '90%',
                gap: 12,
                marginTop: 20,
              }}
            >
              <BsFillGridFill
                style={{ cursor: 'pointer' }}
                onClick={() => setGridView(true)}
                size={20}
              />
              <BsListUl
                style={{ cursor: 'pointer' }}
                onClick={() => setGridView(false)}
                size={28}
              />
            </div>
            {gridView ? <GridView /> : <ListView />}
          </Fragment>
        )}
      </div>
    </>
  )
}

export default Card
