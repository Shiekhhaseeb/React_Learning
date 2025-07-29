// // import React from "react"
// //we dont need entire react library
// import React, { useState } from "react";

// function MyComponents() {
//   const [name, setName] = useState("Guest"); //sfull.var + function
//   const [age, setAge] = useState(0);
//   const [isEmployed, setIsEmployed] = useState(false);

//   const updateName = () => {
//     setName("Haseeb"); //it will trigger every render of V.DOM
//   };
//   const incrementAge = () => {
//     setAge(age + 1);
//   };
//   const toggleEmployedStatus = () => {
//     setIsEmployed(!isEmployed);
//   };
//   return (
//     <div>
//       <p>Name : {name}</p>
//       <button onClick={updateName}>Set Name</button>

//       <p>Age : {age}</p>
//       <button onClick={incrementAge}>Increment Age</button>

//       <p>Is Employed : {isEmployed ? "yes" : "No"}</p>
//       <button onClick={toggleEmployedStatus}>Toggle Status</button>
//     </div>
//   );
// }
// export default MyComponents;
/*********************** */
//onChange =event handler is used primarly with form  elements e.x <input> <textarea> <select> <radio> triggers a fxn every time the value of the input changes 