import React, { useState, useEffect } from "react";

function LocalTime() {
  const [select, setSelect] = useState("Tashkent");
  const [time, setTime] = useState("");

  const cityzona = {
    Tashkent: "Asia/Tashkent",
    London: "Europe/London",
    Tokyo: "Asia/Tokyo",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const timezona = cityzona[select];
      const format = new Intl.DateTimeFormat("en-US", {
        timeZone: timezona,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(format.format(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, [select]);

  return (
    <div className="flex justify-center items-center">
      <div className="bg-slate-700 rounded-xl shadow-2xl p-6 mt-32 w-[340px]">
        <select
          value={select}
          onChange={(e) => setSelect(e.target.value)}
          className="w-full bg-black text-white border-none focus:outline-none cursor-pointer p-2 mb-4 border rounded-md text-[17px]"
        >
          {Object.keys(cityzona).map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
        <h1 className="text-4xl text-center font-bold text-white">{time}</h1>
      </div>
    </div>
  );
}

export default LocalTime;
