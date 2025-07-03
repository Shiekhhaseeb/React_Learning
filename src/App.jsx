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
import UserGreeting from "./UserGreeting.jsx";

function App() {
  return (
    <>

     <UserGreeting isLoggedIn={true} userName="Brocode"/>

    </>
  );
}

export default App;
