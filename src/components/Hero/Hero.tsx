import "./Hero.css";
import heroImg from "../../assets/hero.jpg";
import logoWhiteImg from "../../assets/logo-white.png";

const Hero = () => {
  return (
    <>
      {/* header component */}
      <header>
        <img src={logoWhiteImg} alt="logo.png" />
        <div className="nav-links">
          <a href="">FOOD DELIVERY</a>
          <a href="">HOW IT WORKS</a>
          <a href="">OUR CITE</a>
          <a href="">SIGN UP</a>
        </div>
      </header>

      {/* hero component */}
      <div className="hero">
        <div className="hero-text">
          <div>GOODBYE JUNK FOOD.</div>
          <div>HELLO SUPER HEALTHY MEALS.</div>
        </div>
        <div className="hero-btn">
          <button className="btn1"> I’m hungry</button>
          <button className="btn2"> Show me more</button>
        </div>
      </div>

      {/* background image  */}
      <img className="hero-img" src={heroImg} alt="hero.jpg" />
    </>
  );
};

export default Hero;
