import React, { useState, useEffect } from 'react'
import Header from '../components/Navbar'
import "../styles/Community.css"
import Loader from '../components/Loader'
import { useContext } from 'react';
import { ToolContext } from '../App';

function Community() {
  const { darkMode } = useContext(ToolContext);
  window.scroll(0, 0)
  const [contributors, setContributors] = useState([])
  const [initialLoading, setInitialLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setInitialLoading(true)
    await fetch(
      `https://api.github.com/repos/JasonDsouza212/free-hit/contributors?per_page=100`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setContributors(data)
          setInitialLoading(false)
        }
      })
  }

  return (
    <div className={`all ${darkMode ? 'dark-mode' : ''}`}>
      <Header />
      <h2 className={`contributor-heading ${darkMode ? 'dark-mode' : ''}`}>Meet Our Contributors</h2>
      {initialLoading ? (
        <Loader />
      ) : (
        <ul className={`contributors-list ${darkMode ? 'dark-mode' : ''}`}>
          {contributors.map(
            (contributor) =>
              contributor &&
              contributor.type !== 'Bot' && ( //to remove bot from the contributors list
                <li className="contributor" key={contributor.id}>
                  <a
                    className="contributor-anchor"
                    href={contributor.html_url}
                    target="_blank"
                    title={`${contributor.login}`}
                  >
                    <img
                      alt={contributor.login}
                      className={`contributor-image ${darkMode ? 'dark-mode' : ''}`}
                      loading="lazy"
                      src={contributor.avatar_url}
                    />
                  </a>
                </li>
              )
          )}
        </ul>
      )}
    </div>
  )
}

export default Community
