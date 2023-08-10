// community.jsx
import React, { useState, useEffect } from 'react'
import Header from '../components/Navbar'
import '../styles/Community.css'
import Loader from '../components/Loader'
import { useContext } from 'react'
import { ToolContext } from '../App'
import Pagination from '../components/Pagination'
import { useLocation } from 'react-router-dom'

function Community() {
  const { darkMode } = useContext(ToolContext)
  window.scroll(0, 0)
  const [contributors, setContributors] = useState([])
  const [contributorLimit, setContributorLimit] = useState([])
  const [page, setPage] = useState(1)
  const [initialLoading, setInitialLoading] = useState(true)
  const [searchResult, setSearchResult] = useState('')
  const location = useLocation()
  const totalPages = 100

  useEffect(() => {
    getData()
  }, [searchResult])

  const getData = async () => {
    setInitialLoading(true)
    await fetch(
      `https://api.github.com/repos/JasonDsouza212/free-hit/contributors?per_page=100`
    )
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (data) {
            if (searchResult.length > 0) {
              const value = data.filter((item) => {
                return `${item.login.toLowerCase()}`.includes(
                  searchResult.toLowerCase()
                )
              })
              setContributors(value)
            } else {
              setContributors(data)
              setContributorLimit(data.slice(0, 18))
            }
            setInitialLoading(false)
          }
        }, 300)
      })
  }

  useEffect(() => {
    let pageIndex = location.search.indexOf('=') + 1
    setPage(location.search.toString().slice(pageIndex))
  }, [location])

  useEffect(() => {
    let data = contributors.slice(page >= 2 ? (page - 1) * 18 : 0, page * 18)
    setContributorLimit(data)
  }, [page])

  return (
    <div className={`all ${darkMode ? 'dark-mode' : ''}`}>
      {' '}
      <Header />
      <div className={`contributor-heading ${darkMode ? 'dark-mode' : ''}`}>
        <h2>Meet Our Contributors</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          style={{ padding: '10px', borderRadius: '6px' }}
          type="text"
          className=""
          placeholder="Search Contributor"
          onChange={(e) => setSearchResult(e.target.value)}
        />
      </div>
      {initialLoading ? (
        <Loader />
      ) : (
        <>
          {searchResult.length > 0 && contributors.length == 0 ? (
            <div className="noResult">
              <h1>Contributor Not Found</h1>
            </div>
          ) : (
            <>
              <ul
                className={`contributors-list ${darkMode ? 'dark-mode' : ''}`}
              >
                {(searchResult.length > 0
                  ? contributors
                  : contributorLimit
                )?.map(
                  (contributor) =>
                    contributor &&
                    contributor.type !== 'Bot' && ( //to remove bot from the contributors list
                      <li
                        className={`contributor ${darkMode ? 'dark-mode' : ''}`}
                        key={contributor.id}
                      >
                        <div
                          className={`contributor-card ${
                            darkMode ? 'dark-mode' : ''
                          }`}
                        >
                          <a
                            rel="noopener noreferrer"
                            className={`contributor-anchor ${
                              darkMode ? 'dark-mode' : ''
                            }`}
                            href={contributor.html_url}
                            target="_blank"
                            title={`${contributor.login}`}
                            aria-label={`${contributor.login}`}
                          >
                            <img
                              alt={contributor.login}
                              className={`contributor-image ${
                                darkMode ? 'dark-mode' : ''
                              }`}
                              loading="lazy"
                              src={contributor.avatar_url}
                              aria-label="Contributor Avatar"
                            />
                          </a>
                        </div>
                        <div
                          className={`username ${darkMode ? 'dark-mode' : ''}`}
                        >
                          <p>{contributor.login}</p>
                        </div>
                        <p
                          className={`contributions ${
                            darkMode ? 'dark-mode' : ''
                          }`}
                        >
                          {contributor.contributions} commits
                        </p>
                      </li>
                    )
                )}
              </ul>
              {searchResult.length == 0 && totalPages > 1 && (
                <Pagination totalPages={totalPages} />
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Community
