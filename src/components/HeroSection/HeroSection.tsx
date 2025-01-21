import "./HeroSection.css";
import hero from "../../assets/092122_cj_profile_512x512.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-logo">
        <img src={hero} />
      </div>
    </div>
  );
};

export default HeroSection;
