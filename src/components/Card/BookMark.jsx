import React,{useState} from 'react'
import '../../styles/shareModel.css';


const BookMark = ({showAlert,setShowAlert}) => {

  const handleAlertClose = () => {
    setShowAlert(false)
  }
  return (
    <div className='bookmarkModel'>
      {showAlert && (
        <div className="alert-box">
          <div className="alert-content">
            <h2>Alert</h2>
            <p>This is a custom alert box.</p>
            <button onClick={handleAlertClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookMark
