
import React from 'react';
import './Programs.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
    return (
      
        <div className="programs" id="Programs">
            {/* program header */}
            <div className="program-header">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>To shape your</span>
            </div>
            <div className="Programs-categories">
                {programsData.map((data, index) => {
                    console.log(data.image); // Log the image path to the console
                    return (
                        <div className="category" key={index}>
                            <img src={data.image} alt={data.heading} />
                            <span>{data.heading}</span>
                            <span>{data.details}</span>
                            <div className="join-now">
                                <span>Join Now</span>
                                <img src={RightArrow} alt="" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Programs;
