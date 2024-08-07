import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {
  const mobile=window.innerWidth<=768 ? true :false;
  const[menuopened,setMenuopened]=useState(false)
  return (
    <div className='header' alt="logo image">
      <img src={Logo} className='logo'/>
      {
       ( menuopened===false && mobile===true)?(
        <div 
        style={{
          backgroundColor:'var(--appColor)', padding:'0.5rem'
        }}
        onClick={()=>setMenuopened(true)}>
         
          <img src={bars} alt=""  style={{width:'1.5rem', height:'1.5rem'}}/>
        </div>
       ):
       <ul className="header-menu">
        <li onClick={()=>setMenuopened(false)}>
          <Link to='hero' span={true} smooth={true}>Home</Link>
        </li>
        <li > <Link to='programs' span={true} smooth={true} onClick={()=>setMenuopened(false)}>Programs</Link> </li>
        <li>
        <Link  onClick={()=>setMenuopened(false)} to='reasons' span={true} smooth={true}>why us</Link>
        </li>
        <li>
          <Link  onClick={()=>setMenuopened(false)} to='plans' span={true} smooth={true}>Plans</Link>
        </li>
        <li  >  <Link to='Testimonials'  onClick={()=>setMenuopened(false)}
        span={true} smooth={true}>Testimonials</Link></li>
      </ul>
      }
      
    </div>
  )
}

export default Header
