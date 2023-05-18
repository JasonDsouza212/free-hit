import React from 'react'

const Button = ({ button: { category, name, icon }, filterProduct }) => {
  return (
    <li>
      <a onClick={() => filterProduct(category)}>
        <i className={icon}></i>
        {name}
      </a>
    </li>
  )
}

export default Button
