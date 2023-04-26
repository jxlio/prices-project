import React from 'react'
import "../pages/indexStyles.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='nav-container'>
        <nav className='nav'>
            <Link href="">Logo</Link>
            <Link href="">About us</Link>
            <Link href="">Contacto</Link>
        </nav>
    </header>
  )
}

export default Navbar