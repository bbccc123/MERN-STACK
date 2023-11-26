import '../assets/styles/CountdownTimer.css';
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference <= 0) {
      return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, '0');
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, '0');

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <>
      <div className='countdown-timer'>
        <div className='countdown-item'>{timeLeft.days}</div>
        <div className='space-item'>:</div>
        <div className='countdown-item'>{timeLeft.hours}</div>
        <div className='space-item'>:</div>
        <div className='countdown-item'>{timeLeft.minutes}</div>
        <div className='space-item'>:</div>
        <div className='countdown-item'>{timeLeft.seconds}</div>
      </div>
      <div className='timer'>
        <div className='timer-item'>NGÀY</div>
        <div className='timer-item'>GIỜ</div>
        <div className='timer-item'>PHÚT</div>
        <div className='timer-item'>GIÂY</div>
      </div>
    </>
  );
};

const App = () => {
  const targetDate = new Date('December 15, 2023 23:59:59 GMT+00:00');

  return (
    <div>
      <h1 className='new-product black-friday-container'>Black Friday!</h1>
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export default App;
