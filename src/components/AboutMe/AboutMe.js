/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./AboutMe.css";

function Card() {
  return (
    <div className="connnt">
      <div className="cont">
        <a name="AboutMe"></a>
        <h1 className="about-me">About Me</h1>

        <h2 className="guion">-</h2>
        <p /*I like to learn from other people mentioning things that I can improve too on from what I've already done*/
        >
          Hi! I'm Belen, a self-taught, passionate about technology, learning,
          art and design based in Argentina. One of my goals is to grow professionally with all my
          efforts as a Front-End Developer.
        </p>
        <p>
          I seek to be in constant training and put what I've learned into
          practice. I mostly love working on the front-end using React and CSS.
        </p>
        <p>I'm responsible, empathetic, persevering, dedicated and curious.</p>
        <p>
          I would love to be part of projects that allows me to develop myself
          as a professional and improve my performance, as well as collaborate
          with a work team to meet objectives and continue polishing my soft
          skills.
        </p>
        <div className="timeline">
          <div class="container education">
            <h2>Education</h2>
            <div className="content-item info-item">
              <h4>2017</h4>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
            <div className="content-item info-item">
              <h4>2017</h4>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
            <div className="content-item info-item">
              <h4>2017</h4>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
          <div className="container work">
            <h2>Work Experience</h2>
          <div className="content-item info-item">
              <h4>Working task</h4>
              <h5>working date</h5>
              <h5><i>working place</i></h5>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
