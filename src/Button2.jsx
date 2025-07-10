// import { func } from "prop-types";

// function Button2() {
//   // Simple click handler (no arguments)
//   const handleClick = () => {
//     alert("Button clicked! 😊");
//   };

//   // Click handler with parameters
//   const handleClick2 = (name) => {
//     alert(`${name} stop clicking me!`);
//   };

// return( <button className="btn btn-primary" onClick={ () => handleClick2("Bro")}>
//       Click Me! 😊
//     </button>
//   );
// }
// export default Button2;

/******************************/
//add some conditional rendering to our button

// import { func } from "prop-types";

// function Button2() {
//   let count =0;

//   // Simple click handler (no arguments)
//   const handleClick = (name) => {

// if (count <3) {
//   count++;
//   alert(`${name} you clicked me${count} time/s 😊`);

// }  
// else {
//   alert("You have clicked me too many times! 😡");

// };
//   };


// return( <button onClick={() => handleClick("Bro")}>
//       Click Me! 😊
//     </button>
//   )

// }
// export default Button2
/********************************* */
//Event parameter
// import { func } from "prop-types";

// function Button2() {
//   // Simple click handler (no arguments)
//   const handleClick = (e) => {
//     console.log(e); // Log the event object
//   };



// return( <button  onClick={ (e) => handleClick(e)}>
//       Click Me! 😊
//     </button>
//   );
// }
// export default Button2;
/************** */
import { func } from "prop-types";

function Button2() {
  // Simple click handler (no arguments)
  const handleClick = (e) => {
e.target.textContent = "Ouch! 😢"; // Change button text on click
  };



return( <button  onDoubleClick={ (e) => handleClick(e)}>
      Click Me! 😊
    </button>
  );
}
export default Button2;