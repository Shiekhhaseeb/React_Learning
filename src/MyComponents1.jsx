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


// import { func } from "prop-types";
// import React, { useState } from "react";

// function MyComponents() {
//   const [name, setName] = useState("Guest");
//   const [quantity, setQuantity] = useState(1);
//   const [comment, setComment] = useState("");
// const[payment, setPayment] = useState("visa");
// const [shipping,setShipping] = useState("delivery");

//   function handleNameChange(event) {
//     setName(event.target.value);
//   }

//   function handleQuantityChange(event) {
//     setQuantity(event.target.value);
//   }

//   function handleCommentChange(event) {  // ✅ Corrected name
//     setComment(event.target.value);
//   }

//   function handlePaymentChange(event) {
//     setPayment(event.target.value);
//   }

//   function handleShippingChange(event) {
//     setShipping(event.target.value);
//   }
//   return (
//     <div>
//       <input value={name} onChange={handleNameChange} />
//       <p>Name: {name}</p>

//       <input value={quantity} onChange={handleQuantityChange} type="number" />
//       <p>Quantity: {quantity}</p>

//       <textarea
//         value={comment}
//         onChange={handleCommentChange}
//         placeholder="Enter delivery instructions"
//       />
//       <p>Comment: {comment}</p>

//       <select value={payment} onChange={handlePaymentChange}>
// <option value="">Select an option</option>
// <option value="visa">Visa</option>
// <option value="MasterCard">MasterCard</option>
// <option value="GiftCard">GiftCard</option>


//       </select>
//       <p>Payment: {payment}</p>


// <label>
//   <input
//   type="radio"
//   value="pick up"
//   checked={shipping === "pick up"}
//   onChange={handleShippingChange}
//   />
//   pick up
// </label><br/>
// <label>
//   <input
//   type="radio"
//   value="delivery"
//   checked={shipping === "delivery"}
//   onChange={handleShippingChange}
//   />
//   Delivery
// </label>
// <p>Shipping: {shipping}</p>
//     </div>
//   );
// }

// export default MyComponents;
/********************************* */
// //updater function in react= is a fxn passed as an argument to setState() usually 
// // e.g setYear(arrow function) .used when the new state depends on the previous state, allows for safe updates based in previous state used with multiple setState() calls and asynchronous fxns ,itss a good practice to use Upater fxn

// import React, { useState } from "react";

// function MyComponents() {
//   const [count,setCount] = useState(0);

//   function increment(){
//     // setCount(count+1);
//     // //update e.g (0+ 1) always 1 like refresh in browser
//     // setCount(count+1);
//     // //update
//     // setCount(count+1);
//     // //update
// //updater fxn is stored in a queue fcfs,take thePENDING state to calculate the next state,During the next render, it will call them in the same order.
//     setCount(prevCount+1);
// //or take 1st letter of state variable
// setCount(c =>c+1 )//c reps prev count
// setCount(c =>c+1 )
// setCount(c =>c+1 )

//   }

//     function decrement(){
//     setCount(c=>c-1);
//     setCount(c=>c-1);
//     setCount(c=>c-1);

//   }

//     function reset(){
//     setCount(c=> c =0);//we dont care about prev state
//   }
//   return(
//      <div>

//     </div>
  
//   );
 
// }

// export default MyComponents;

/****************************************** */
// import React, { useState } from "react";

// function MyComponents() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     // Correct: use updater form to ensure each update is based on latest state
//     setCount(c => c + 1);
//     setCount(c => c + 1);
//     setCount(c => c + 1);  // Total: +3
//   }

//   function decrement() {
//     setCount(c => c - 1);
//     setCount(c => c - 1);
//     setCount(c => c - 1);  // Total: -3
//   }

//   function reset() {
//     setCount(0); // No need for updater function here
//   }

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Updater Function Counter</h2>
//       <p style={{ fontSize: "2rem" }}>Count: {count}</p>
//       <button onClick={increment} style={{ margin: "5px" }}>Increment +3</button>
//       <button onClick={decrement} style={{ margin: "5px" }}>Decrement -3</button>
//       <button onClick={reset} style={{ margin: "5px" }}>Reset</button>
//     </div>
//   );
// }

// export default MyComponents;
/******************************************** */ 
//Update OBJECTS in state
// import React, { useState } from "react";

// function MyComponents() {
// //array destr
// const [car,setCar] = useState({year:2024,

//                                make:"Ford",
//                                model:"Mustang"});

//   function handleYearChange(event){
//     // after using spread(...)operator it will look like this,but writing 2 keys twice is not allowed in js,use ... only

// // setCar({year:2024,make :"Ford",
// // model:"Mustang",year:2025});

// // setCar({...car,year:event.target.value});
// //but better is to use the arrow function
// setCar(c=>({...c,year:event.target.value}));// c = prev value
//   }
//    function handleMakeChange(event){
// setCar(c =>({...c,make:event.target.value}))
//   }
//     function handleModelChange(event){

// setCar(c=> ({...c,model:event.target.value}));
//   }
//       return(<div>
//         <p>Your favroute car is : {car.year} {car.make} {car.model}</p>
//         <input type="number" value={car.year} onChange={handleYearChange}/><br/>
//         <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
//         <input type="text" value={car.model} onChange={handleModelChange}/><br/>

//       </div>);

// }
// export default MyComponents
/********************************* */
//Update ARRAYS in state
// import React, { useState } from "react";

// function MyComponents() {
// //array destr
// const [foods,setFoods ] = useState(["apple","orange","banana"]);

// function handleAddFood(){

// const newFood = document.getElementById("foodInput").value;
// document.getElementById("foodInput").value= "";//resets the input
// //pass new array
// //setFoods(["apple","orange","banana",newFood])
// //the above works like spread operator, ... is better to use

// // setFoods([...foods,newFood])
// //better to use updater fxn
// setFoods(f=>([...f,newFood]));//f is prev state
// }
// function handlerRemoveFood(index){

// setFoods(foods.filter((_,i)=> i!==index));// parameter passed to fxn/element=_ means its ignored as we are not using it
// }
//       return(<div>
  
// <h2>
//   List of Food
// </h2>
// <ul>
//   {foods.map((food,index)=>
//   <li key={index} onClick={() => handlerRemoveFood(index)}>
//     {food}
//     </li>)}
// </ul>
// <input type="text" id="foodInput" placeholder="Enter food name"/>
// <button onClick={handleAddFood}>Add Food</button>
//       </div>);

// }
// export default MyComponents

/************************ */
// import React, { useState } from "react";

// function MyComponents() {
// //array destr
// const [cars,setCars ] = useState([]);
// const [carYear,setCarYear] = useState(new Date().getFullYear());
// const [carMake,setCarMake] = useState("");
// const [carModel,setCarModel] = useState("");

// function handleAddCar(){  

// }
// function handleRemoveCar(index){

// }
// function handleYearChange(event){

// }

// function hadleMakeChange(event){

// }

// function hadleModelChange(event){

// }
//       return(<div>
  
// <h1>List of car objects</h1>
// <ul>

// </ul>
// <input type="number" value={carYear} onChange={handleYearChange}/>
// </div>);

// }
// export default MyComponents

/************************************************/
// //useEffect()=USE SIDE CODE
// //useEffect() = React Hook that tells React DOM do some code when(pick one):
//                           //This component is rendered
//                           //This component is mounts
//                           //The  state of a value
// //useEffect(function,[dependencies])
// //1.useEffect(()=>{})     //Runs after every re-render
// //2.useEffect(()=>{},[])  //Runs only on mount
// //3.useEffect(()=>{},[value])//Runs on mount and when value changes

// //uses:--->
// //1.Event Listerers
// //2. DOM manipulation
// //3.Subscriptions (real-time updates)
// //4.Fetching Data from an API
// //5.Clean up when a component is unmounted(removing component from the DOM)

// import { func } from "prop-types";
// import React, { useState ,useEffect} from "react";

// function MyComponents() {
//       const[count,setCount] = useState(0);

// function addCount(){
//   setCount(c => c + 1);

// }


//       return(<div>
//   <p>Count: {count}</p>
// <button onClick={addCount}>Add</button>
// </div>);

// }
// export default MyComponents