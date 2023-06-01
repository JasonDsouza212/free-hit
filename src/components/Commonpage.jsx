import Header from './header'
import errorimg from '../images/errorimg.png'
import { useNavigate } from 'react-router-dom'
const Commonpage = () => {
  const navigate=useNavigate();
  return (
    <>
      <Header />
        <img className='errorImage' src={errorimg} alt="error Image" onClick={()=>{navigate(-1)}}></img>
    </>
  )
}

export default Commonpage
