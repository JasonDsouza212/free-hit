<<<<<<< HEAD:src/components/Commonpage.jsx
import Header from './header'
import errorimg from '../images/errorImg2.jpg'
import { useNavigate } from 'react-router-dom'
const Commonpage = () => {
  const navigate = useNavigate()
=======
import Header from '../components/Navbar'
import "../styles/NotFound.css"

const NotFound = () => {
>>>>>>> f0b13d97cfafd3e588fcb023304cddab385ca7f0:src/pages/NotFound.jsx
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
