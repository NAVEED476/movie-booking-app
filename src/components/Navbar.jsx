import React from 'react'
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
        <div className='nav-cont'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH1xuSODk4Mxy7fU_7qMTEVvqZCouDbCdpJM7euq1nBg&s" alt="" />
          <input type="text" placeholder='search for movies' />
        </div>
    </div>
  )
}

export default Navbar