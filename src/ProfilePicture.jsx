function profilePicture(){

  const imageUrl = './src/assets/profile.jpg';

  const handleClick = (e) => e.target.style.display ="none";
  

  return(
    <img onClick={(e) =>handleClick(e)} src={imageUrl} alt="Profile Picture" />
  )
};
export default profilePicture;