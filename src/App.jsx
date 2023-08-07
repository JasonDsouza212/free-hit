import React, { useState, useEffect, createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Card from './pages/Home'
import About from './pages/About'
import BookMarks from './pages/Bookmarks'
import NotFound from './pages/NotFound'
import Community from './pages/Community'
import Layout from './components/Layout'
import {Analytics} from '@vercel/analytics/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ToolContext = createContext()
const LOCAL_STORAGE_KEY = 'freehit.bookmarks'

function App() {
  const [gridView, setGridView] = useState(true)

  // all Bookmarks
  const [bookmarks, setBookmarks] = useState([])

  // dark mode
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
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

  //dark-mode
  useEffect(() => {
    const darkmodejson = localStorage.getItem('darkMode')
    if (darkmodejson != null) setDarkMode(JSON.parse(darkmodejson))
    // else setDarkMode([])
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  // Add bookmark
  function handelBookmarkAdd(bookmark) {
    const newBookmark = {
      productName: bookmark.productName,
      category: bookmark.category,
      image: bookmark.image,
      link: bookmark.link,
      description: bookmark.description,
    }
    toast.success('Bookmarked', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    setBookmarks([...bookmarks, newBookmark])
  }

  // Remove Bookmark
  function deleteres(product) {
    setBookmarks(
      bookmarks.filter((res) => res.productName !== product.productName)
    )
    toast.error("Deleted",{
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  //search box debouncing
  const debounce = (fn, delay) => { 
    let timerId = null;
    return (...args) => {
      if(timerId){  
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => fn(...args), delay);
    };
  }

  // values to pass to context hook s
  const toolContextValue = {
    handelBookmarkAdd,
    bookmarks,
    deleteres,
    gridView,
    setGridView,
    darkMode,
    setDarkMode,
    debounce
  }

  return (
    <>
      <div className="app">
        <ToolContext.Provider value={toolContextValue}>
          <div className="routes-holder">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Card />} />
                <Route path="about" element={<About />} />
                <Route path="bookmarks" element={<BookMarks />} />
                <Route path="community" element={<Community />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </div>
        </ToolContext.Provider>
      </div>
      <Analytics/>
      <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" />
    </>
  )
}

export default App
export { ToolContext }
