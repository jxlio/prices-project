import React from 'react'
import "../Styles/indexStyles.css"

const CartaDistri = ({nombre}) => {
  return (
    <div>
        <h3>{nombre} </h3>
        <button>Info</button>
    </div>
  )
}

export default CartaDistri