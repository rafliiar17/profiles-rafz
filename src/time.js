import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(moment().tz('Asia/Jakarta'));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().tz('Asia/Jakarta'));
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>Current Time (Jakarta): {currentTime.format('YYYY-MM-DD HH:mm:ss')}</p>
    </div>
  );
};

export default TimeDisplay;
