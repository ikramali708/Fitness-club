import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import Heart from '../../assets/heart.png'
import hero_img from '../../assets/hero_image.png'
import hero_img_back from '../../assets/hero_image_back.png'
import calories from '../../assets/calories.png'
import {motion, transform} from 'framer-motion'

const Hero = () => {
    const transition={type:'spring',duration:3}
    const mobile=window.innerWidth<=768 ? true:false
    return (
        <div className='hero'>
            <div className="blur hero-blur">

            </div>
       
            <div className="left-h">
                <Header />
                {/* best-ad section */}
                <div className="best-ad">
                    <motion.div
                    initial={{left:mobile? '165px':'238px'}}    whileInView={{left:'8px'}}
                    transition={{duration: 1, ease: 'easeOut', type: 'tween'}}>
                     
                    
                    </motion.div>
                    <span>The best fitness club in town</span>
                </div>
                {/* hero heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div><span>
                        Ideal Body</span>
                        </div>
                        <div>
                            <span>
                                In Here we will help you to shape and build your ideal body and live up to your life to Fullest
                            </span>

                        </div>
                </div>

                <div className="figures">
                    <div>
                        <span>+140 </span>
                        <span>expert coaches</span>
                        </div>
                        <div>
                        <span>+978 </span>
                        <span>members joined</span>
                        </div>
                        <div>
                        <span>+50 </span>
                        <span>fitness Programs</span>
                        </div>
                </div>
            {/* hero button */}
            <div className="hero-button">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>
            </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>
              <motion.div
              transition={transition}
              initial={{right:'0px'}}
              whileInView={{right:'20%'}}
               className="heart-rate">
              <img src={Heart} alt="" />
              <span>Heart Rate </span>
                <span>116 bpm</span>
              </motion.div>
              <img src={hero_img} alt="" className='hero-img' />
              <motion.img  transition={transition} initial={{right:'11rem'}} whileInView={{right:'20rem'}} src={hero_img_back} className='hero-img-back' alt="" />
              {/* calories */}
             <motion.div
              className="calories" transition={transition} initial={{right:'37rem'}} whileInView={{right:'28rem'
              }}>
             <img src={calories} alt="" />
              <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
              </div>
             </motion.div>
            </div>

        </div>
    )
}

export default Hero
