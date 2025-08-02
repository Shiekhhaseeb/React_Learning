//useEffect()=USE SIDE CODE
//useEffect() = React Hook that tells React DOM do some code when(pick one):
                          //This component is rendered
                          //This component is mounts
                          //The  state of a value
//useEffect(function,[dependencies])
//1.useEffect(()=>{})     //Runs after every re-render
//2.useEffect(()=>{},[])  //Runs only on mount
//3.useEffect(()=>{},[value])//Runs on mount and when value changes

//uses:--->
//1.Event Listerers
//2. DOM manipulation
//3.Subscriptions (real-time updates)
//4.Fetching Data from an API
//5.Clean up when a component is unmounted(removing component from the DOM)

import React, { useState, useEffect } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
    return () => {
      // cleanup if needed
    };
  }, [count, color]);

  function addCount() {
    setCount(c => c + 1);
  }

  function subtractCount() {
    setCount(c => c - 1);
  }

  function changeColor() {
    setColor(c => (c === "green" ? "red" : "green"));
  }

  return (
    <div style={{ padding: "20px" }}>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default UseEffectHook;
