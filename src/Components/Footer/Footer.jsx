// import React from 'react'
// import './Footer.css'
// import github from '../../assets/github.png'
// import instagram from '../../assets/instagram.png'
// import linkedin from '../../assets/linkedin.png'
// import logo from '../../assets/logo.png'

// const Footer = () => {
//   return (
//     <div className="Footer-container">
//         <hr/>
//         <div className="footer">
//             <img src={github} alt="" />
//             <img src={instagram} alt="" />
//             <img src={linkedin} alt="" />
//         </div>
//         <div className="logo-f">
//             <img src={logo} alt="" />
//         </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react'

import './Footer.css'
 import github from '../../assets/github.png'
 import instagram from '../../assets/instagram.png'
 import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <hr/>

     
        <div className="col">
        <img src={github} alt="" />             <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
        </div>
        <div className="logo-f">
            <img src={logo} alt="" />
           
        </div>
        <div className='footer-copy'>
        <span >©copyright.All rights reserved.</span><br/><br/><span>Designed By <a href="https://ikramali-liard.vercel.app/">Ikram Ali</a></span>
        </div>
        
              <div className='blur-footer' id='blur-f-1'></div>
        <div  className='blur-footer' id='blur-f-2'>
          
        </div>
       
    </div>
  )
}

export default Footer
