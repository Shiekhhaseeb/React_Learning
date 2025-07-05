// function UserGreeting(props){

//   if(props.isLoggedIn){//if true
//     return <h2>Welcome {props.username}</h2>
//   }
//   else{
//     return <h2>Please log in to Continue</h2>
//   }
// }
// export default UserGreeting

/****************** */
//using ternary operator
// import './index.css'; // Add this import
// function UserGreeting(props) {
//   return props.isLoggedIn ? 
//     <h2 className="welcome-message">Welcome {props.username}</h2> : 
//     <h2 className="login-prompt">Please log in to Continue</h2>;
// }

// export default UserGreeting;
/**************************************/
//Easir way to write the same code
// import './index.css'; // Add this import
function UserGreeting(props) {

const welcomeMessage= <h2 className="welcome-message">
  Welcome {props.username}
</h2>;
const loginPrompt= <h2 className="login-prompt">
  Please log in to Continue
</h2>;


  return (props.isLoggedIn ? welcomeMessage: loginPrompt)
 ;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string
};
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};  
export default UserGreeting;