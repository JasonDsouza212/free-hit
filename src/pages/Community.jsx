import React, { useState, useEffect } from 'react'
import Header from '../components/Navbar'
import "../styles/Community.css"

function Community() {
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
    <div>
      {' '}
      <Header />
      <h1 className="contributor-heading">Meet Our Contributors</h1>
      {initialLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <ul className="contributors-list">
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
                      className="contributor-image"
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
