import React, { useState, useEffect, createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Card from './components/card'
import Footer from './components/footer'
import About from './components/about'
import products from './DB/product.json'
import BookMarks from './components/bookmarks'
import BackToTopButton from './components/BackToTop'
import Commonpage from './components/Commonpage'
import FooterNew from './components/FooterNew'

const ToolContext = createContext()
const LOCAL_STORAGE_KEY = 'freehit.bookmarks'

function App() {
  const [category, setCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [gridView, setGridView] = useState(true)

  // all products
  const [productNames, setProductNames] = useState(
    products?.map((product) => product.productName) || []
  )
  const [filteredSuggestions, setFilteredSuggestions] = useState([])

  // all Bookmarks
  const [bookmarkfiltersuggestions, setBookmarkfiltersuggestions] = useState([])
  const [bookmarks, setBookmarks] = useState([])

  // for menu bar close and open
  const [isMenuActive, setIsMenuActive] = useState(true)

  const [boomarkNames, setBookmarkNames] = useState(
    bookmarks?.map((bookmark) => bookmark.productName) || []
  )

  function filterProduct(value) {
    setCategory(value)
    filteredButtonSelected(value)
  }

  // initial Storage
  useEffect(() => {
    const bookmarkJson = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (bookmarkJson != null) setBookmarks(JSON.parse(bookmarkJson))
    else setBookmarks([])
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookmarks))
  }, [bookmarks])

  // Add bookmark
  function handelBookmarkAdd(bookmark) {
    const newBookmark = {
      productName: bookmark.productName,
      category: bookmark.category,
      image: bookmark.image,
      link: bookmark.link,
      description: bookmark.description,
    }
    setBookmarks([...bookmarks, newBookmark])
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

  // Search filter methods
  useEffect(() => {
    // Checks if the search term have a word
    if (searchTerm.length > 1) {
      // This filters out the names that starts with the given search term.
      const filterNames = productNames.filter((productName) =>
        productName.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
      const filterBookmarks = boomarkNames.filter((bookmarkname) =>
        bookmarkname.toLowerCase().startsWith(searchTerm.toLowerCase())
      )

      // the array containing the filtered words gets sorted.
      const sortedProductNames = filterNames.sort()
      const sortedbookmarks = filterBookmarks.sort()
      setBookmarkfiltersuggestions(sortedbookmarks)
      setFilteredSuggestions(sortedProductNames)
    } else {
      setBookmarkfiltersuggestions([])
      setFilteredSuggestions([])
    }
  }, [searchTerm, productNames, boomarkNames])

  useEffect(() => {
    setCategory('all')
  }, [])

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
  }

  // filtering methods
  const filteredProducts = products
    .filter((product) => {
      if (!searchTerm) return true
      const regex = new RegExp(escapeRegExp(searchTerm.trim()), 'gi')
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

  const bookmarkfilteredProducts = bookmarks
    .filter((bookmark) => {
      if (!searchTerm) return true
      const regex = new RegExp(escapeRegExp(searchTerm.trim()), 'gi')
      return (
        bookmark.productName.match(regex) ||
        bookmark.description.match(regex) ||
        bookmark.category.match(regex)
      )
    })
    .sort((a, b) => {
      const nameA = a.productName.toUpperCase()
      const nameB = b.productName.toUpperCase()
      return nameA < nameB ? -1 : 1
    })

  // Remove Bookmark
  function deleteres(product) {
    setBookmarks(
      bookmarks.filter((res) => res.productName !== product.productName)
    )
  }

  // values to pass to context hook s
  const toolContextValue = {
    filterProduct,
    filteredProducts,
    searchTerm,
    setSearchTerm,
    category,
    handelBookmarkAdd,
    bookmarks,
    deleteres,
    filteredSuggestions,
    bookmarkfilteredProducts,
    isMenuActive,
    setIsMenuActive,
    gridView,
    setGridView,
  }

  return (
    <>
      <ToolContext.Provider value={toolContextValue}>
        <Routes>
          <Route path="/" element={<Card length={filteredProducts.length} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/bookmarks"
            element={<BookMarks length={bookmarkfilteredProducts.length} />}
          />
          <Route path="*" element={<Commonpage />} />
        </Routes>
        {/* <Footer /> */}
        <FooterNew />
        <BackToTopButton />
      </ToolContext.Provider>
    </>
  )
}

export default App
export { ToolContext }
