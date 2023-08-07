import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ button: { category, name, icon }, filterProduct }) => {
  return (
    <li>
      <Link
        onClick={() => {
          filterProduct(category)
        }}
      >
        <i className={icon}></i>
        {name}
      </Link>
    </li>
  )
}

export default Button
