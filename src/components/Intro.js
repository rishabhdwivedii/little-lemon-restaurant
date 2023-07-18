import foodImage from '../assets/foodImage.png'
import '../components/Intro.css'

function Intro() {
    return (
      <div className="intro-container">
        <div className="intro-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <img src={foodImage} alt="Food" className="food-image" />
      </div>
           );
    };
    
    export default Intro;