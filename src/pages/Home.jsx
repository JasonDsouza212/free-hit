import Header from '../components/Navbar'
import React, { useContext } from 'react'
import { ToolContext } from '../App'
import noresultimg from '../assets/sad-face-2.png'
import GridView from '../components/Card/GridView'
import ListView from '../components/Card/ListView'
import { BsFillGridFill, BsListUl } from 'react-icons/bs'
import '../styles/card.css'
import { useSearchParams } from 'react-router-dom'

const Card = ({ length }) => {
  const {
    gridView,
    setGridView,
  } = useContext(ToolContext)

  const [searchParams,] = useSearchParams()
  const filter = searchParams.get("filter") || "all"

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
          <GridView category={filter} />
        ) : (
          <ListView category={filter} />
        )}
      </div>
    </div>
  )
}

export default Card
