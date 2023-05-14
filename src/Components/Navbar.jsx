import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/indexStyles.css"


const Navbar = () => {
  return (
    <div className='nav-container'>
        <header className='nav-container'>
            <nav className='nav'>
                <Link className='logo' to={"/products"}>Logo</Link>
                <Link>Sobre Nosotros</Link>
                <Link>Contacto</Link>
            </nav>
        </header>
    </div>
  )
}

export default Navbar