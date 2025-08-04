//useState()= Re-renders the component when the state changes.

//useRef() = "use Reference" Does not cause re-renders when its value changes.
//            when u wanna componenet to"remember" some info, but u don't want         that info to trigger new re-render.useRef() return an object ,that has   1 property of current(can be passed to it)
             //1.Accessing /Interacting with DOM elements.
             //2.Handling Focus,Animations and Transitions.
             //3.Managing Timers and Intervals.

//  import React, { useState,useEffect ,useRef } from 'react';

//              function useRef() {
// let [number, setNumber] = useState(0);

// useEffect(()=>{
//   console.log("Component Rendered!");
  
// })
// function handleCLick(){
//   setNumber(n => n+1);
// }
              
//               return(<button onClick={handleCLick}>
//                 Click me!
//               </button>)
//              }
//              export default useRef;

/**************************** */
 //2.using useRef()
// import React, { useState, useEffect, useRef } from "react";

// function UseRefExample() {
//   let [number, setNumber] = useState(0);

//   const inputRef1 = useRef(null);
//   const inputRef2 = useRef(null);
//   const inputRef3 = useRef(null);

//   useEffect(() => {
//     console.log("Component Rendered!");
    
//   });

//   function handleClick1() {
//     // ref.current = ref.current + 1;
//     // console.log(ref.current);
//     inputRef1.current.focus();
//     inputRef1.current.style.backgroundColor ="yellow"
//         inputRef1.current.style.backgroundColor =""
//     inputRef1.current.style.backgroundColor =""

//   }
//   function handleClick2() {

//     inputRef2.current.focus();
    
//     inputRef2.current.style.backgroundColor =""
//     inputRef1.current.style.backgroundColor ="yellow"
//     inputRef1.current.style.backgroundColor =""
//   }

//     function handleClick3() {

//     inputRef3.current.focus();
//     inputRef2.current.style.backgroundColor =""
//     inputRef2.current.style.backgroundColor =""
//     inputRef3.current.style.backgroundColor ="yellow"
//   }
//   return (<div>
//      <button onClick={handleClick1}>
//       Click me 1!
//     </button>
//     <input ref={inputRef1}/>

//          <button onClick={handleClick2}>
//       Click me! 2
//     </button>
//     <input ref={inputRef2}/>

//          <button onClick={handleClick3}>
//       Click me! 3
//     </button>
//     <input ref={inputRef3}/>
//   </div>
   
//   );
// }

// export default UseRefExample;

/****************************************** */
import React, { useState, useEffect, useRef } from "react";

function UseRefExample() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("Component Rendered!");
  });

  // Utility function to reset all input backgrounds
  function resetBackgrounds() {
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick1() {
    resetBackgrounds();
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
  }

  function handleClick2() {
    resetBackgrounds();
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "yellow";
  }

  function handleClick3() {
    resetBackgrounds();
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "yellow";
  }

  return (
    <div>
      <button onClick={handleClick1}>Click me 1!</button>
      <input ref={inputRef1} />

      <button onClick={handleClick2}>Click me 2!</button>
      <input ref={inputRef2} />

      <button onClick={handleClick3}>Click me 3!</button>
      <input ref={inputRef3} />
    </div>
  );
}

export default UseRefExample;
