import React, { useState, useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
  const [email, setEmail] = useState('');
  const form = useRef();


  const sendEmail = (e) => {
   
    e.preventDefault();
    if (email.trim() === '') {
     
      alert("Please Enter Email")
      return;
    }

    emailjs
      .sendForm('service_oens8nr', 'template_6rlswfp', form.current, 'y8CKq4EoKd633407L')
      .then(
        () => {
         
          console.log('SUCCESS!');
          setEmail(''); // Clear the input field after successful submission
          alert("Submitted Suceessfully!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready To</span>
          <span> LEVEL Up</span>
        </div>
        <div>
          <span>Your Body</span>
          <span className="stroke-text"> with us</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            placeholder="Enter Email"
            name="user_Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn-j" type="submit">Join Now</button><br/><br/>
        
        </form>
        {/* <div className='valid'>
         {valid &&
          <span >Please Enter Email!</span>
          }
          
         </div>  */}
      </div>
    </div>
  );
};

export default Join;
