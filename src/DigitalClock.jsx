import { func } from "prop-types";
import React, { useState, useEffect } from "react";

function DigitalClock(){

const[time, setTime] = useState(new Date());

useEffect(()=>{
const intervalId= setInterval(()=>{
  setTime(new Date());
},1000);

return () => clearInterval(intervalId);
},[]);

function formatTime(time){

let hours = time.getHours();
const minutes = time.getMinutes();
const seconds = time.getSeconds();
const mediderm = hours >= 12 ? "PM" : "AM";


hours = hours % 12|| 12;
return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${mediderm}`;
}


function padZero(num){
  return (num < 10 ? "0" : "")+ num;
}
  return(<div className="clock-container">
  
  <div className="clock">
<span>{formatTime(time)}</span>
  </div>
  </div>)
}
export default DigitalClock;