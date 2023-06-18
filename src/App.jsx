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

const ToolContext = createContext()
const LOCAL_STORAGE_KEY = 'freehit.bookmarks'

function App() {
  const [gridView, setGridView] = useState(true)

  // all Bookmarks
  const [bookmarks, setBookmarks] = useState([])

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

  // Remove Bookmark
  function deleteres(product) {
    setBookmarks(
      bookmarks.filter((res) => res.productName !== product.productName)
    )
  }

  // values to pass to context hook s
  const toolContextValue = {
    handelBookmarkAdd,
    bookmarks,
    deleteres,
    gridView,
    setGridView,
  }

  return (
    <>
     <div className="app">
     <ToolContext.Provider value={toolContextValue}>
        <div className="routes-holder">
          <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/bookmarks"
            element={<BookMarks />}
          />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        <BackToTopButton />
      </ToolContext.Provider>
      </div>
    </>
  )
}

export default App
export { ToolContext }
