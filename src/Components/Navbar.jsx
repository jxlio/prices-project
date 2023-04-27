import React from 'react'
import "../pages/indexStyles.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='nav-container'>
        <nav className='nav'>
          <div className='logo'>
          <Link href="" >Logo</Link>
          </div>
            <Link href="">Sobre nosotros</Link>
            <Link href="">Contacto</Link>
            
        </nav>
    </header>
  )
}

export default Navbar