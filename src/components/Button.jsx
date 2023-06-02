import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ToolContext } from '../App'

const Button = ({ button: { category, name, icon }, filterProduct }) => {
  const { setIsMenuActive } = useContext(ToolContext)
  return (
    <li>
      <Link
        onClick={() => {
          filterProduct(category)
          // setIsMenuActive(false)
        }}
      >
        {/* <a onClick={() => filterProduct(category)}> */}
        <i className={icon}></i>
        {name}
        {/* </a> */}
      </Link>
    </li>
  )
}

export default Button
