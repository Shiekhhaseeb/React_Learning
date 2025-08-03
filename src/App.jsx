// import  Header from './Header.jsx';
// import Footer from './Footer.jsx';
// import Food from './Food.jsx';

// function App() {

//   return(
//   <>
//    <Header/>
//    <Food/>

//     <Footer/>

//     </>


//   );
// }

// export default App
/************************** */

// import Card from './Card.jsx';

// function App() {
// return(
//   <>
//     <Card/>
//         <Card/>
//     <Card/>
//     <Card/>

//     <Card/>
//     <Card/>
//     <Card/>
//     <Card/>

//     <Card/>
//     <Card/>

//   </>

// )

// }

// export default App
/*************************** */
//How to style a component in React with css
//------------------------------------
//(not including external framewworks(bootstrap/tailwind) or preprocessors like SASS or LESS)
//1.External
//2. Module
//3. Inline
// import Button from "./Button.jsx"

// function App() {
// return(<Button/>);

// }

// export default App
/***************************** */
// import Student from "./Student.jsx";

// function App() {
//   return (
//     <>

//       <Student name="Spongebob" age={30} isStudent={true} />
//       <Student name="Patrik" age={42} isStudent={false} />
//       <Student name="Squidward" age={50} isStudent={false} />
//       <Student name="Sandy" age={27} isStudent={true} />
//       <Student/>

//     </>
//   );
// }

// export default App;
/*********************************** */
// import UserGreeting from "./UserGreeting.jsx";

// function App() {
//   return (
//     <>

//      <UserGreeting isLoggedIn={true} username="Brocode"/>

//     </>
//   );
// }

// export default App;
/*********************** */
//redering lists in React
// import List from "./List.jsx";

// function App() {
//   const fruits = [{id: 1, name: "apple", calories: 95},
//                   {id: 2, name: "orange", calories: 45},
//                   {id: 3, name: "banana", calories: 105},
//                   {id: 4, name: "coconut", calories: 159},
//                   {id: 5, name: "pineapple", calories: 37}];

//     const vegetables = [{id: 6, name: "potatoes", calories: 110},
//                         {id: 7, name: "celery", calories: 15},
//                         {id: 8, name: "carrots", calories: 25},
//                         {id: 9, name: "corn", calories: 63},
//                         {id: 10, name: "broccoli", calories: 50}];

// return (
//     <>
//       <List items={fruits}  category="Fruits"/>
//             <List items={vegetables}  category="vegetables"/>


//     </>
//   );

// }

// export default App;

/********************** */
//we can use conditional rendering to render our list only if there is elements in our list
// import List from "./List.jsx";

// function App() {
//   const fruits = [{ id: 1, name: "apple", calories: 95 },
//   { id: 2, name: "orange", calories: 45 },
//   { id: 3, name: "banana", calories: 105 },
//   { id: 4, name: "coconut", calories: 159 },
//   { id: 5, name: "pineapple", calories: 37 }];

//   const vegetables = [{ id: 6, name: "potatoes", calories: 110 },
//   { id: 7, name: "celery", calories: 15 },
//   { id: 8, name: "carrots", calories: 25 },
//   { id: 9, name: "corn", calories: 63 },
//   { id: 10, name: "broccoli", calories: 50 }];

//   return (
//     <>
//       {/* {fruits.length > 0 ? <List items={fruits}  category="Fruits"/> : null}
//       {vegetables.length > 0 ? <List items={vegetables}  category="vegetables"/> : null} */}

//       {/* Easy way using &&  :--> known as short circutiong*/}
//          {fruits.length > 0 && <List items={fruits} category="Fruits" />}
//       {vegetables.length > 0 && <List items={vegetables} category="vegetables" />}
//     </>
//   );

// }

// export default App;
/************************************ */
//7.Click events in React
//CLICK EVENTS :An interaction when a user clicks on an element, such as a button or link.we required to respond to click events in our application. a callback function is executed when the event occurs.

// import Button2 from "./Button2";
// import ProfilePicture from "./ProfilePicture";

// function App() {


//   return (
//     <>
//  <Button2/>
//  <ProfilePicture/>
//   </>
//   );

// }

// export default App;
/************************************* */
//8.React hooks are special function that allows fxnal components
//to use React features without writing write class components(React v16.8)
//to use react features without writing class components (React c16.8)
//(useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback, useImperativeHandle, useDebugValue, useTransition, useId)

//useState()= A React hook that allows the creation of a stateful value in a functional variable AND a setter function to update its value in the virtual DOM {name,setName}
// import MyComponents from "./MyComponents";
// function App(){
//   return(
//     <>
    
//     <MyComponents/>
//     </>
//   );
// }
// export default App;
/************************ */
//
// import Counter from "./Counter";
// import MyComponents from "./MyComponents"; 
// function App(){
//   return(
//     <>
//     {/* <Counter/> */}
//        <MyComponents/>

//     </>
//   );
// }
// export default App;
/****************************** */
// import Counter from "./Counter";
// import MyComponents from "./MyComponents1"; 
// import MyComponents2 from "./MyComponents2"; 

// import ColorPicker from "./ColorPicker";
// import ToDoList from "./ToDoList";
// import UseEffectHook from "./UseEffectHook";
// function App(){
//   return(
//     <>
// {/* <ColorPicker/> */}
//             {/* <MyComponents2/> */}

// {/* <ToDoList/> */}
//  {/* <MyComponents1/>  */}
//  <UseEffectHook/>
//     </>
//   );
// }
// export default App;
/**************************** */
// import UseEffectHook from "./UseEffectHook";

// function App() {
//   return (
//     <>
//       <UseEffectHook />
//     </>
//   );
// }

// export default App;
/********************** */
// import MyComponent from "./MyComponent";

// function App() {
//   return (
//     <>
//       <MyComponent />
//     </>
//   );
// }

// export default App;
///////////////////
// import DigitalClock from "./DigitalClock";

// function App() {
//   return (
//     <>
//       <DigitalClock />
//             <DigitalClock />
//       <DigitalClock />
//             <DigitalClock />


//     </>
//   );
// }

// export default App;
/******************************** */
//useContext()= 
//A React hook that allows the creation of a context for sharing stateful values between multiple components without passing props manually at every level
//Note :--> Sharing the props down the component tree is called prop drilling.

//PROVIER COMPONENT
//1.import {createContext} from "react";
//2.export const MyContext = createContext();
//3.<MYContext.Provider value={value}>
// <Child/>
// </MyContext.Provider>

//CONSUMER COMPONENT
//1. import React,{useContext} from "react";
//   import {MyContext} from "./ComponentA";
//2.const value =useContext(MyContext);


import React from "react";
import ComponentA from "./ComponentA";

function App() {
  return (
    <>
      <ComponentA />
    </>
  );
}

export default App;
