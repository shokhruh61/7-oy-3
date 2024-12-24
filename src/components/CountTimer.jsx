import React, { useState } from "react";
import { Link } from "react-router-dom";

function CountTimer() {
  const [name, setName] = useState("");
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [end, setEnd] = useState("");
  const [start, setStart] = useState(false);

  function reset() {
    setName("");
    setTime(0);
    setStart(false);
    setEnd("");
    setIsRunning(false);
  }

  function startTime() {
    const copied = name;
    if (copied > 0 && !isRunning) {
      setIsRunning(true);
      setStart(true);
      setEnd("");
      setTime(copied);
      const intervalId = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(intervalId);
            setIsRunning(false);
            setEnd("Vaqt tugadi!");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    setName("");
  }

  const hour = Math.floor(time / 3600);
  const minute = Math.floor((time % 3600) / 60);
  const second = time % 60;

  return (
    <div className="flex items-center justify-center mt-32">
      <div className="w-[400px] flex flex-col items-center bg-neutral-800 p-2 rounded-lg justify-center">
        <input
          disabled={isRunning}
          type="number"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full p-2 mb-4 border rounded-md text-lg focus:outline-none"
          placeholder="Vaqtni kiriting"
        />
        <button
          disabled={isRunning}
          className="w-full bg-green-700 text-white py-2 rounded-md mb-2"
          onClick={startTime}
        >
          Boshlash
        </button>
        {start && (
          <div className="font-bold flex items-center justify-center text-white mt-4 text-5xl">
            {hour > 0 && <h2>{hour}:</h2>}
            {minute > 0 && <h3>{minute}:</h3>}
            <h4>{second}</h4>
          </div>
        )}
        {start && (
          <button
            onClick={reset}
            className="w-full bg-red-700 text-white py-2 rounded-md mt-4"
          >
            Qayta boshlash
          </button>
        )}
        {end && !isRunning && <div className="mt-4 text-xl">{end}</div>}
      </div>
    </div>
  );
}

export default CountTimer;
