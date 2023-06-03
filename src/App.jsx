import React, { useState, useEffect, createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Card from './components/card'
import Footer from './components/footer'
import About from './components/about'
import products from './DB/product.json'
import BookMarks from './components/bookmarks'
import BackToTopButton from './components/BackToTop'
import Commonpage from './components/Commonpage'
import Community from './components/Community'

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

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
  }

  function levenshteinDistance(s1, s2) {
    const m = s1.length
    const n = s2.length

    // Create a matrix of size (m+1) x (n+1)
    const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0))

    // Initialize the first row and column
    for (let i = 0; i <= m; i++) {
      dp[i][0] = 0
    }

    for (let j = 0; j <= n; j++) {
      dp[0][j] = 0
    }

    // Calculate the Levenshtein distance
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
        }
      }
    }
    console.log(dp[m][n])
    return Math.max(m, n) - dp[m][n]
  }

  function fuzzySearch(searchTerm, target) {
    searchTerm = searchTerm.toLowerCase()
    target = target.toLowerCase()
    console.log(searchTerm)
    console.log(target)

    const distance = levenshteinDistance(searchTerm, target)
    console.log(distance)

    const similarity = 1 - distance / Math.max(searchTerm.length, target.length)
    console.log(similarity)
    return similarity > 0.5 // Adjust the similarity threshold as needed
  }
  // filtering methods
  const filteredProducts = products
    .filter((product) => {
      if (!searchTerm) return true
      const regex = new RegExp(escapeRegExp(searchTerm.trim()), 'gi')
      console.log(fuzzySearch(searchTerm, product.productName))
      var found =
        product.productName.match(regex) ||
        product.description.match(regex) ||
        product.category.match(regex)
      if (found) return found
      if (!found) found = found || fuzzySearch(searchTerm, product.productName)
      return found
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
      var found =
        bookmark.productName.match(regex) ||
        bookmark.description.match(regex) ||
        bookmark.category.match(regex)
      if (found) return found
      if (!found) found = found || fuzzySearch(searchTerm, bookmark.productName)
      return found
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
      <ToolContext.Provider value={toolContextValue}>
        <Routes>
          <Route path="/" element={<Card length={filteredProducts.length} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/bookmarks"
            element={<BookMarks length={bookmarkfilteredProducts.length} />}
          />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<Commonpage />} />
        </Routes>
        <Footer />
        <BackToTopButton />
      </ToolContext.Provider>
    </>
  )
}

export default App
export { ToolContext }
