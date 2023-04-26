import Button from './Button'
import {
  All,
  ResumeBuilder,
  Hacker,
  AI,
  Movies,
  Extensions,
  Tools,
  Jobs,
} from './Icons'
import LazyLoad from 'react-lazyload'

const ButtonLinks = [
  {
    id: 1,
    name: 'All',
    category: 'all',
    icon: <All />,
  },
  {
    id: 2,
    name: 'Remote Jobs',
    category: 'remote',
    icon: <Jobs />,
  },
  {
    id: 3,
    name: 'Resume Builder',
    category: 'resume',
    icon: <ResumeBuilder />,
  },
  {
    id: 4,
    name: 'AI',
    category: 'ai',
    icon: <AI />,
  },
  {
    id: 5,
    name: 'Ethical Hacking',
    category: 'ethical',
    icon: <Hacker />,
  },
  {
    id: 6,
    name: 'Movies | Series',
    category: 'movies',
    icon: <Movies />,
  },
  {
    id: 7,
    name: 'Useful Extensions',
    category: 'extensions',
    icon: <Extensions />,
  },
  {
    id: 8,
    name: 'Useful Tools',
    category: 'tools',
    icon: <Tools />,
  },
]

const Card = ({ filterProduct, filteredProducts, length, category }) => {
  return (
    <div className="App">
      <header>
        <div className="filter-section">
          {ButtonLinks.map((buttonLink) => (
            <Button
              key={buttonLink.id}
              button={buttonLink}
              filterProduct={filterProduct}
            />
          ))}
        </div>
      </header>
      <div className="card_wrapper">
        {length == 0 ? (
          <p className="no-results">
            Sorry, no tools available for this search term.
          </p>
        ) : (
          <div className="cols">
            {filteredProducts.map((product, index) => {
              return category === 'all' || category === product.category ? (
                <div className="col" key={index}>
                  <div className="container">
                    <div className="front">
                      <div className="inner">
                        <span>
                          <LazyLoad height={100}>
                            <img
                              className="card_image"
                              src={product.image}
                              alt={product.productName}
                            />
                          </LazyLoad>
                        </span>
                        <p>{product.productName}</p>
                      </div>
                    </div>
                    <div className="back">
                      <div className="inner">
                        <h3>{product.productName}</h3>
                        <br />
                        <p>{product.description}</p>
                        <br />
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            })}
          </div>
        )}
      </div>
    </div>
  )
}
export default Card
