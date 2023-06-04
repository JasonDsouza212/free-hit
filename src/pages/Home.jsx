import Header from '../components/Navbar'
import React, { useContext, useEffect, useState } from 'react'
import { ToolContext } from '../App'
import noresultimg from '../assets/sad-face-2.png'
import GridView from '../components/Card/GridView'
import ListView from '../components/Card/ListView'
import { BsFillGridFill, BsListUl } from 'react-icons/bs'
import '../styles/Home.css'
import { useSearchParams } from 'react-router-dom'
import { TailSpin } from "react-loader-spinner"

const Card = ({ length }) => {
  const {
    gridView,
    setGridView,
  } = useContext(ToolContext)

  const [searchParams,] = useSearchParams()
  let filters = searchParams.getAll('filters').length > 0 ? searchParams.getAll('filters') : ["all"]
  filters = filters[0].split(",")
  console.log(filters)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500)
  }, [])

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
        {!isLoading ?
          length == 0 ? (
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
          )
          :
          <div className="loader">
            <TailSpin
              height="340"
              width="80"
              color="black"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{marginLeft: "700px"}}
              wrapperClass=""
              visible={true}
            />
          </div>
        }
      </div>
    </div>
  )
}

export default Card
