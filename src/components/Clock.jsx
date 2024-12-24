import React, { useState, useEffect, useCallback } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(clock);
    };
  }, []);

  function format() {
    let hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const checkHour = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    return `${padZero(hour)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${checkHour}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  return (
    <div className="">
      <div className="text-white text-9xl font-bold font-mono text-center mt-44">
        <span>{format()}</span>
      </div>
    </div>
  );
}

export default Clock;
