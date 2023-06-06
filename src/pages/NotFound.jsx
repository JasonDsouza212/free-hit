import Header from '../components/Navbar'
import "../styles/NotFound.css"
import errorimg from '../assets/errorImg2.jpg'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <div className='errorBox'>
        <div></div>
        <img
          className="errorImage"
          src={errorimg}
          alt="error Image"
          onClick={() => {
            navigate(-1)
          }}
        ></img>
        <div></div>
      </div>
    </>
  )
}

export default NotFound
