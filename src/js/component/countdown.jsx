import React from "react";
import { useState, useEffect } from "react";

//create your first component
export default function CountDown() {
  const [time, setTime] = useState(100000);

  useEffect(() => {
    const intervalId = setInterval(
      () => setTime((prevTime) => prevTime - 1),
      1000
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home">
      <h1 className="h1">Countdown</h1>
      <div className="card text-bg-dark mb-3">
        <div className="card-body">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-clock"
            viewBox="0 0 16 16"
            style={{ padding: "0 10 0 10" }}
          >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
          </svg>
        </div>
      </div>
      <div className="card text-bg-dark mb-3">
        <div className="card-body">{Math.floor((time / 100000) % 10)}</div>
      </div>
      <div className="card text-bg-dark mb-3">
        <div className="card-body">{Math.floor((time / 10000) % 10)}</div>
      </div>
      <div className="card text-bg-dark mb-3">
        <div className="card-body">{Math.floor((time / 1000) % 10)}</div>
      </div>
      <div className="card text-bg-dark mb-3">
        <div className="card-body">{Math.floor((time / 100) % 10)}</div>
      </div>
      <div className="card text-bg-dark mb-3">
        <div className="card-body">{Math.floor((time / 10) % 10)}</div>
      </div>
      <div className="card text-bg-dark mb-3">
        <div className="card-body">{(time / 1) % 10}</div>
      </div>
    </div>
  );
}
