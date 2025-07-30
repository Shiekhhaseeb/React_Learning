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


import { func } from "prop-types";
import React, { useState } from "react";

function MyComponents() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
const[payment, setPayment] = useState("visa");
const [shipping,setShipping] = useState("delivery");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {  // ✅ Corrected name
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
<option value="">Select an option</option>
<option value="visa">Visa</option>
<option value="MasterCard">MasterCard</option>
<option value="GiftCard">GiftCard</option>


      </select>
      <p>Payment: {payment}</p>


<label>
  <input
  type="radio"
  value="pick up"
  checked={shipping === "pick up"}
  onChange={handleShippingChange}
  />
  pick up
</label><br/>
<label>
  <input
  type="radio"
  value="delivery"
  checked={shipping === "delivery"}
  onChange={handleShippingChange}
  />
  Delivery
</label>
<p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponents;
