/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Skills.css";

function Skills() {
  return (
    <div className="skills-content">
      <a name="Skills"></a>
      <h1>Skills</h1>
      <h2 className="guion">-</h2>
      <div className="div-skcontent">
        <div>
          <h3>Front-End</h3>
          <p>HTML</p>
          <div className="skill-container">
            <div className="skills html ">90%</div>
          </div>

          <p>CSS</p>
          <div className="skill-container">
            <div className="skills css">80%</div>
          </div>

          <p>JavaScript</p>
          <div className="skill-container">
            <div className="skills js">65%</div>
          </div>

          <p>PHP</p>
          <div className="skill-container">
            <div className="skills php">60%</div>
          </div>
        </div>
        <div>
          <h3>Soft-Skills</h3>

          <p>Comunicativo</p>
          <div className="skill-container">
            <div className="skills html ">90%</div>
          </div>

          <p>Colaborativo</p>
          <div className="skill-container">
            <div className="skills css">80%</div>
          </div>

          <p>Empático</p>
          <div className="skill-container">
            <div className="skills js">65%</div>
          </div>

          <p>Autodidacta</p>
          <div className="skill-container">
            <div className="skills php">60%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
