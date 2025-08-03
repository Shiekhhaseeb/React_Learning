// import ComponentD from "./ComponentD";
// function ComponentC(props){

// return(
//     <div className="box">
//         <h1>Component C</h1>
// //         <ComponentC user={props.user}/>
//     </div>
// );

// }
// export default ComponentC;
/*************************** */
import React, { useContext } from "react";
import { UserContext } from "./ComponentA";
import ComponentD from "./ComponentD";

function ComponentC() {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>Component C</h1>
      <h2>{`Hello again ${user}`}</h2>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
