import React from 'react'

const Button = ({ button: { category, name, icon }, filterProduct }) => {
  return (
    <button
      rel="noopener noreferrer"
      className="category-select background-button"
      productcategory={category}
      onClick={() => filterProduct(category)}
    >
      <span>{icon}</span>
      <span>{name}</span>
    </button>
  )
}

export default Button
