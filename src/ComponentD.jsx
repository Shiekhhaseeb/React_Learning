
// function ComponentD(props){

// return(
//     <div className="box">
//         <h1>Component D</h1>
//         <h2>{`Bye ${props.user}`}</h2>
//     </div>
// );

// }
// export default ComponentD;
/******************************** */
//component D is consumer component
import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>Component D</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
}

export default ComponentD;
