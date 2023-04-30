import React from 'react'
import "../Components/Modal.css"

const InfoModal = ({children, close}) => {
  return (
    <div className='back-modal'>
   
        <div className='modal-container'>
        <button onClick={close}> X </button>
            {children}
        </div>
    </div>
  )
}

export default InfoModal