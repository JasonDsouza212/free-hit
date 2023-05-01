import React, { useState, useEffect } from 'react'
import Header from './components/header'
import Card from './components/card'
import Footer from './components/footer'
import products from './DB/product.json'
import BackToTopButton from './components/BackToTop'

function App() {
  const [category, setCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [productNames, setProductNames] = useState(
    products?.map((product) => product.productName) || []
  )

  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState([])

  function filterProduct(value) {
    setCategory(value)
    filteredButtonSelected(value)
  }

  async function filteredButtonSelected(value) {
    const button = document.querySelectorAll('.category-select')
    // Remove the "background-button-selected" class everytime the button is clicked at start to clear old selection
    button.forEach((i) => {
      i.classList.remove('background-button-selected')
    })
    let cnt = -1
    // Add the "background-button-selected" class to individual the button when it is clicked
    button.forEach((i) => {
      let selected = ''
      selected = i.getAttribute('productcategory')
      cnt++
      if (value === selected) {
        button[cnt].classList.add('background-button-selected')
        return
      }
    })
  }

  useEffect(() => {
    if (searchTerm.length > 1) {
      const filterNames = productNames.filter((productName) =>
        productName.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
      const sortedProductNames = filterNames.sort()
      setFilteredSuggestions(sortedProductNames)
      setShowSuggestions(filteredSuggestions.length > 0)
    } else {
      setFilteredSuggestions([])
    }
  }, [searchTerm, productNames])

  useEffect(() => {
    setCategory('all')
  }, [])

  const filteredProducts = products
    .filter((product) => {
      if (!searchTerm) return true
      const regex = new RegExp(searchTerm.trim(), 'gi')
      return (
        product.productName.match(regex) ||
        product.description.match(regex) ||
        product.category.match(regex)
      )
    })
    .sort((a, b) => {
      const nameA = a.productName.toUpperCase()
      const nameB = b.productName.toUpperCase()
      return nameA < nameB ? -1 : 1
    })

  return (
    <>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showSuggestions={showSuggestions}
        filteredSuggestions={filteredSuggestions}
      />
      <Card
        filterProduct={filterProduct}
        filteredProducts={filteredProducts}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        length={filteredProducts.length}
      />
      <Footer />
      <BackToTopButton />
    </>
  )
}

export default App
