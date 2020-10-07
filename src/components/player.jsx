import React, { useEffect, useState } from "react";

function getDateTime(type) {
  let timeDate;
  let currentDate = new Date();
  function pad(num) {
    return num < 10 ? "0" + num.toString() : num.toString();
  }
  if (type === "time") {
    timeDate =
      pad(currentDate.getHours()) +
      " : " +
      pad(currentDate.getMinutes()) +
      " : " +
      pad(currentDate.getSeconds());
  } else if (type === "date") {
    timeDate =
      pad(currentDate.getDate()) +
      " . " +
      pad(currentDate.getMonth() + 1) +
      " . " +
      currentDate.getFullYear().toString().substring(2);
  }
  return timeDate;
}

// function drawDateTime() {
//   $("#curr-date")
//     .attr("data-time", getDateTime("time"))
//     .attr("data-date", getDateTime("date"));
//   let dateTimeout = setInterval(function () {
//     drawDateTime();
//     clearTimeout(dateTimeout);
//   }, 1000);
// }

const Player = () => {
  const [timer, setTimer] = useState(getDateTime("time"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(getDateTime("time"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="player" data-text="">
      <span
        id="curr-date"
        data-time={timer}
        data-date={getDateTime("date")}
      ></span>
      <audio id="audio" src="equaliser/test.mp3"></audio>
      <canvas id="canvas" width="1920" height="1080"></canvas>
    </div>
  );
};

export default Player;
