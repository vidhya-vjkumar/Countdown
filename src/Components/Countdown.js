import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Countdown() {
  const [seconds, setSeconds] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    let timer
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
    } else if (timeLeft === 0 && isActive) {
      clearInterval(timer)
      navigate('/congrats')
    }
    return () => clearInterval(timer)
  }, [isActive, timeLeft, navigate])

  const handleStart = () => {
    setTimeLeft(seconds)
    setIsActive(true)
  };

  return (
    <div className="countdown-container">
      <h1>Countdown Timer</h1>
      <div>
        <input
          type="number"
          placeholder="Seconds"
          value={seconds}
          onChange={(e) => setSeconds(parseInt(e.target.value, 10))}
        />
        <button onClick={handleStart}>Start Countdown</button>
      </div>
      <div>
        <h2>{timeLeft} seconds left</h2>
      </div>
    </div>
  );
}

export default Countdown;
