import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <p className='contact'>📞 +91 9713171999</p>
      <div className="logo">
        <img src={assets.logo} alt="Amrutam Logo" />
      </div>
      <div className="navbarRight">
        <div className="searchIcon">
          <img src={assets.searchIcon} height="22px" alt="" />
        </div>
        <div className="userlogo">
          <img src={assets.userImg} height="22px" alt="" />
        </div>
        <div className="heartimg">
          <img src={assets.heartImg} height="22px" alt="" />
        </div>
        <div className="cartimg">
          <img src={assets.cartImg} height="22px" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
