// import React from 'react'
// import './Plans.css'
// import { plansData } from '../../data/plansData'
// import whiteTick from '../../assets/whiteTick.png'
// const Plans = () => {
//   return (
//    <div className="plans-container">
//     <div className="plans-header" style={{gap:'2rem'}}>
//         <span className='stroke-text'>READY TO START </span>
//         <span> YOUR JOURNEY</span>
//         <span className='stroke-text'> NOW WITHUS</span>
//     </div>
//     {/* plans card */}
//     <div className="plans">
//         {plansData.map((plan,i)=>{
//                 <div className="plan" key={i}>
//                     {plan.icon}
//                     <span>{plan.name}</span>
//                     <span>${plan.price}</span>
//                     <div className="features">
//                         {plan.features.map((feature,i)=>{
//                             <div className="feature">
//                                 <img src={whiteTick} alt="" />
//                                 <span key={i}>{feature}</span>
//                             </div>

//                         })}
//                     </div>

//                 </div>
//         })}
//     </div>

//    </div>
//   )
// }

// export default Plans

import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
   <div className="plans-container">
    <div className="blur plans-blur-1">

    </div>
    <div className="blur plans-blur-2">
        
        </div>
    <div className="plans-header" style={{gap:'2rem'}}>
        <span className='stroke-text'>READY TO START </span>
        <span> YOUR JOURNEY</span>
        <span className='stroke-text'> NOW WITHUS</span>
    </div>
    {/* plans card */}
    <div className="plans">
        {plansData.map((plan, planIndex) => (
            <div className="plan" key={planIndex}>
                {plan.icon}
                <span>{plan.name}</span>
                <span className='price'>${plan.price}</span>
                <div className="features">
                    {plan.features.map((feature, featureIndex) => (
                        <div className="feature" key={featureIndex}>
                            <img src={whiteTick} alt="" />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
                <div><span>See more  benefits -> </span></div>
                <button className='btn'>Join Now</button>
            </div>
        ))}
    </div>
   
   </div>
  )
}

export default Plans
