import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />

            </div>
            <div className="right-r">
                <span>Some Reasons</span>
                <div>
                    <span className='stroke-text'>Why </span>
                    <span>choose us?</span>
                </div>
                <div className='details-r'>
                <div><img src={tick} alt=""></img>
                <span>OVER 140+ EXPERT COACHES</span></div>
                <div><img src={tick} alt="" />
                <span>tRAINER SMARTER AND STARTER BEFORE</span></div>
                <div><img src={tick} alt="" />
                <span>FREE PROGRAM FOR NEW MEMEBER</span></div>
                <div><img src={tick} alt="" />
                <span>RELIABLE PARTNERS</span></div>

            </div>
            <span
            style={{color:"var(--gray)",fontWeight:"normal"
            }}>
                OUR PARTNERS
            </span>
            <div className="parnters">
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons
