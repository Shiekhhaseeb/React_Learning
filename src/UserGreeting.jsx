function UserGreeting(props){

  if(props){
    return <h2>Welcome {props.username}</h2>
  }
}
export default UserGreeting