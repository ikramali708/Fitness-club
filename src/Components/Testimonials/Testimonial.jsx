import React, { useState } from 'react'
import './Testimonial.css'
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import RightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'
const Testimonial = () => {
  const transition={type:'string',duration:3}
  const[selected,setSelected]=useState(0)
  const tLen=testimonialsData.length;
  return (
   <div className="Testimonials">
    <div className="left-t">
      <span>Testimonials</span>
      <span className='stroke-text'>What they</span>
      <span>say about us</span>
      <motion.span
      key={selected}
      initial={{opacity:0,x:-100}}
      animate={{opacity:1,x:0}}
      exit={{opacity:0,x:-100}}
      transition={{...transition,duration:0.7}}
      >
        {testimonialsData[selected].review}
      </motion.span>
      <span style={{color:"var(--orange)"}}>
        <span>{testimonialsData[selected].name}</span>{" "}
        - {testimonialsData[selected].status}
      </span>
    </div>
    <div className="right-t">
      <motion.div initial={{opacity:'0',x:-100}}
      transition={{...transition,duration:1}}
      whileInView={{opacity:'1',x:0}}
      ></motion.div>
        <motion.div initial={{opacity:'0',x:100}}
      transition={{...transition,duration:1}}
      whileInView={{opacity:'1',x:0}}
      ></motion.div>
      <motion.img
      key={selected}
      initial={{opacity:0,x:100}}
      animate={{opacity:1,x:0}}
      exit={{opacity:0,x:-100}}
      transition={{...transition,duration:0.7}}
      
      src={testimonialsData[selected].image} alt="" />
      <div className="arrows">
      <img
  onClick={() => {
    if (selected === 0) {
      setSelected(tLen - 1);
    } else {
      setSelected((prev) => prev - 1);
    }
  }}
  src={leftArrow}
  alt="Left Arrow"
/>
{ "     "}
<img
            onClick={() => {
              if (selected === tLen - 1) {
                setSelected(0);
              } else {
                setSelected((prev) => prev + 1);
              }
            }}
            src={RightArrow}
            alt="Right Arrow"
          />
      </div>
    </div>
   </div>
  )
}

export default Testimonial
