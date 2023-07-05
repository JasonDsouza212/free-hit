import React, {
  useState,
  useEffect,
  createContext,
  lazy,
  Suspense,
} from 'react'
import { Route, Routes } from 'react-router-dom'
import Card from './pages/Home'
const About = lazy(() => import('./pages/About'))
const BookMarks = lazy(() => import('./pages/Bookmarks'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Community = lazy(() => import('./pages/Community'))
const Layout = lazy(() => import('./components/Layout'))
import Loader from './components/Loader'

const ToolContext = createContext()
const LOCAL_STORAGE_KEY = 'freehit.bookmarks'

function App() {
  const [gridView, setGridView] = useState(true)

  // all Bookmarks
  const [bookmarks, setBookmarks] = useState([])

  // dark mode
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") || false);

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
    const darkmodejson = localStorage.getItem("darkMode")
    if (darkmodejson != null) setDarkMode(JSON.parse(darkmodejson))
    // else setDarkMode([])
  }, [])
  
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
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
    darkMode,
    setDarkMode
  }

  return (
    <>
      <div className="app">
        <ToolContext.Provider value={toolContextValue}>
          <div className="routes-holder">
            <Suspense fallback={Loader}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Card />} />
                  <Route path="about" element={<About />} />
                  <Route path="bookmarks" element={<BookMarks />} />
                  <Route path="community" element={<Community />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
          </div>
        </ToolContext.Provider>
      </div>
    </>
  )
}

export default App
export { ToolContext }
