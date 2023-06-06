import Header from '../components/Navbar'
import '../styles/NotFound.css'

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="errormessage">
        <h1>
          404 <br />
          page not found
        </h1>
      </div>
    </>
  )
}

export default NotFound
