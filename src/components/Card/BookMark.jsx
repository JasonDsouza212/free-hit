import React, { useState } from 'react'
import '../../styles/shareModel.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const BookMark = ({ showAlert, setShowAlert,text }) => {

  return (
    <div className="bookmarkModel" onClick={() => setShowAlert(false)}>
      {showAlert && (
        <div className="alert-box" >
          <div className={`alert-content ${text=="BookMark Deleted successfully" && "bookmarkDelete"}`} >
            <AiFillCloseCircle size={30} style={{ position: 'absolute', top: '-9px',right:"-10px",cursor:"pointer" }} onClick={()=> setShowAlert(false)} />
            <p style={{ fontSize: '20px', marginTop: '40px' }}>
             {text}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookMark
