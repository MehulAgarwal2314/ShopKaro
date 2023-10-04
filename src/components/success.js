import React, { useState, useEffect } from 'react';
import { runFireworks } from './utils';
import { BsBagCheckFill } from 'react-icons/bs';
import './success.css';
import { useNavigate, useLocation } from 'react-router-dom';
import confetti from 'canvas-confetti';


const Success = () => {
  const navigate=useNavigate();
  const location = useLocation();
  let interval;
  const [animationStopped, setAnimationStopped] = useState(false);
  const handleClick=()=>{
    navigate('/');
  }

  useEffect(() => {
    const runFireworks = () => {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          clearInterval(interval);
        }

        if (!animationStopped) {
          const particleCount = 50 * (timeLeft / duration);
          confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
          confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }
      }, 250);
    };

    // Start the fireworks animation when the component mounts
    runFireworks();

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [animationStopped]);

  useEffect(() => {
    // Check if the current location pathname is not '/success'
    if (location.pathname !== '/success') {
      setAnimationStopped(true); // Stop the animation when navigating away from the success page
    }
  }, [location.pathname]);



  

  return (
    <div className="success-wrapper">
      <div className="success" >
      <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="contact.mehul2314@gmail.com">
            contact.mehul2314@gmail.com
          </a>
        </p>
          <button type="button" width="300px" className="btn1" onClick={handleClick}>
            Continue Shopping
          </button>
      </div>
    </div>
  )
}

export default Success