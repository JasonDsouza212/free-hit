import Header from './header'
import errorimg from '../images/errorImg2.jpg'
import { useNavigate } from 'react-router-dom'
const Commonpage = () => {
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

export default Commonpage
