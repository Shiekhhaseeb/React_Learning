import profilePic from './assets/profile.jpg';

function Card() {
  return (
    <div className="card">
      <img className='card-image' src={profilePic} alt="profile picture" />
      <h2 className="card-title">Shiekh Haseeb</h2>
      <p className='card-text'>I make YouTube videos and play video games</p>
    </div>
  );
}

export default Card;
