import { Link } from "react-router-dom";
import "./SkillGrid.css";

const SkillGrid = () => {
  return (
    <div className="skills">
      <div className="text">
        <h1>Skills</h1>
        <div className="skill-grid">
          <div className="skill-grid-item">
            <Link to="https://github.com/sudge64">
              <img
                height="32"
                width="32"
                src="https://unpkg.com/simple-icons@v11/icons/github.svg"
              />
              <b>GitHub</b>
              <p>
                Experienced with git-based development. Both GitHub and Git cli.
              </p>
            </Link>
          </div>
          <div className="skill-grid-item">
            <Link to="https://en.wikipedia.org/wiki/C_(programming_language)">
            <img
              height="32"
              width="32"
              src="https://unpkg.com/simple-icons@v11/icons/c.svg"
            />
            <b>C</b>
            </Link>
            <p>
              Know basic <code>C</code> programming. Used for problem sovling
              and personal projects.{" "}
            </p>
          </div>
          <div className="skill-grid-item">
            <Link to="https://micropython.org/">
            <img
              height="32"
              width="32"
              src="https://unpkg.com/simple-icons@v11/icons/python.svg"
            />
            <b>MicroPython</b>
            </Link>
            <p>
              Using a fork called <code>MicroPython</code> for the firmware of
              my ground-up mechanical keyboard.
            </p>
          </div>
          <div className="skill-grid-item">
            <Link to="https://react.dev/">
            <img
              height="32"
              width="32"
              src="https://unpkg.com/simple-icons@v11/icons/react.svg"
            />
            <b>React</b>
            </Link>
            <p>Designing web pages from the basic building blocks.</p>
          </div>
          <div className="skill-grid-item">
            <Link to="https://daringfireball.net/projects/markdown/">
            <img
              height="32"
              width="32"
              src="https://unpkg.com/simple-icons@v11/icons/markdown.svg"
            />
            <b>Markdown</b>
            </Link>
            <p>
              All the articles on this website are written in{" "}
              <code>Markdown</code>, which is essentially human-friendly{" "}
              <code>HTML</code>.{" "}
            </p>
          </div>
          <div className="skill-grid-item">
            <Link to="https://kernel.org/">
            <img
              height="32"
              width="32"
              src="https://unpkg.com/simple-icons@v11/icons/linux.svg"
            />
            <b>Linux</b>
            </Link>
            <p>
              My operating system of choice. Always looking to improve, by the
              way.
            </p>
          </div>
          <div className="skill-grid-item">
            <Link to="https://www.rust-lang.org/">
            <img
              height="32"
              width="32"
              src="https://unpkg.com/simple-icons@v11/icons/rust.svg"
            />
            <b>Rust</b>
            </Link>
            <p>
              Developed internal tools @{" "}
              <Link to="https://adom.inc">Adom Inc</Link> to automatically
              generate KiCad PCB files.
            </p>
          </div>
          <div className="skill-grid-item">
            <Link to="https://nodejs.org/en">
            <img
              height="32"
              width="32"
              src="https://unpkg.com/simple-icons@v11/icons/nodedotjs.svg"
            />
            <b>NodeJS</b>
            </Link>
            <p>
              Built internal websites @{" "}
              <Link to="https://adom.inc">Adom Inc</Link> to host custom Rust
              tools.
            </p>
          </div>
          <div className="skill-grid-item">
            <Link to="https://www.python.org/">
            <img
              height="32"
              width="32"
              src="https://unpkg.com/simple-icons@v11/icons/python.svg"
            />
            <b>Python</b>
            </Link>
            <p>
              Created a KiCad plugin for{" "}
              <Link to="https://adom.inc">Adom Inc</Link> to automatically
              resize a PCB, with the GUI written with <code>wxpython</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillGrid;
