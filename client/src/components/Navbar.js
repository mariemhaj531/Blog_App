import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <nav className='border-b-4 border-green-700 text-center fixed top-0 bg-green-600 font-bold w-full text-lg text-white'>
       {/* <Link to="/">
          <img src={logo} alt="Logo" className="" />
        </Link>  */}
            <ul>
        <li className='inline-block py-4'>
            <Link to="/" className='pl-6 pr-8'>
            Home
            </Link>
        </li>
        <li className='inline-block py-4'>
            <Link to="/about" className='pl-6 pr-8'>
            About
            </Link>
        </li>
        <li className='inline-block py-4'>
            <Link to="/articles-list" className='pl-6 pr-8'>
            Blogs
            </Link>
        </li>
        <li className='inline-block py-4'>
            <Link to="/contact" className='pl-6 pr-8'>
            Contact
            </Link>
        </li>
     </ul>
    </nav>
  )
}

export default Navbar