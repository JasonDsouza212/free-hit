import React, { useState, useEffect, createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Card from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import products from './DB/product.json'
import BookMarks from './pages/Bookmarks'
import BackToTopButton from './components/BackToTop'
import NotFound from './pages/NotFound'
import Community from './pages/Community'
import searchProducts from './utils/search/search_products'

const ToolContext = createContext()
const LOCAL_STORAGE_KEY = 'freehit.bookmarks'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [gridView, setGridView] = useState(true)

  // all products
  const [productNames, setProductNames] = useState(
    products?.map((product) => product.productName) || []
  )
  const [filteredSuggestions, setFilteredSuggestions] = useState([])

  // all Bookmarks
  const [bookmarks, setBookmarks] = useState([])

  // for menu bar close and open
  const [isMenuActive, setIsMenuActive] = useState(true)

  const [boomarkNames, setBookmarkNames] = useState(
    bookmarks?.map((bookmark) => bookmark.productName) || []
  )

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

  // Search filter methods
  useEffect(() => {
    // Checks if the search term have a word
    if (searchTerm.length > 1) {
      // This filters out the names that starts with the given search term.
      const filterNames = productNames.filter((productName) =>
        productName.toLowerCase().startsWith(searchTerm.toLowerCase())
      )

      // the array containing the filtered words gets sorted.
      const sortedProductNames = filterNames.sort()
      setFilteredSuggestions(sortedProductNames)
    } else {
      setFilteredSuggestions([])
    }
  }, [searchTerm, productNames, boomarkNames])

  // filtering methods
  const filteredProducts = searchProducts(products, searchTerm);

  const bookmarkfilteredProducts = searchProducts(bookmarks, searchTerm)

  // Remove Bookmark
  function deleteres(product) {
    setBookmarks(
      bookmarks.filter((res) => res.productName !== product.productName)
    )
  }

  // values to pass to context hook s
  const toolContextValue = {
    filteredProducts,
    searchTerm,
    setSearchTerm,
    handelBookmarkAdd,
    bookmarks,
    deleteres,
    filteredSuggestions,
    bookmarkfilteredProducts,
    gridView,
    setGridView,
  }

  return (
    <>
     <div className="app">
     <ToolContext.Provider value={toolContextValue}>
        <Routes>
          <Route path="/" element={<Card length={filteredProducts.length} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/bookmarks"
            element={<BookMarks length={bookmarkfilteredProducts.length} />}
          />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <BackToTopButton />
      </ToolContext.Provider>
      </div>
    </>
  )
}

export default App
export { ToolContext }
