import "./MainSection.css";
import SkillGrid from "../SkillGrid/SkillGrid";
import face from "../../assets/092122_cj_profile_512x512.png";

const MainSection = () => {
  return (
    <div className="main-section-background">
      <div className="main-section">
        <div className="text">
          <h1>C.J. Wade</h1>
          <div className="image">
            <img src={face} />
          </div>
          <br />
          <p>Hello! My name is Christian J. Wade, but please, call me C.J.</p>
          <br />
          <p>
            I’m a Computer Science graduate with a concentration in software
            engineering.
          </p>
          <br />
          <p>
            I like to work in low-level environments, microcontrollers for
            instance. The RP2040 being a favorite of mine.
          </p>
          <br />
          <p>
            I’m always ready to work on new and exciting technologies! My tools
            help people to rid themselves of trivial, repeatable tasks.
            Sometimes, I work on some fun projects such as PCB design.
          </p>
        </div>
      </div>
      <SkillGrid />
    </div>
  );
};

export default MainSection;
