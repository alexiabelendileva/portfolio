//hover en cada item + animation cuando pasas el mouse en la palabra
import Home from "../Home/Home";
import "./Nav.css";
import "animate.css";
import { BiGitBranch, BiHomeHeart } from "react-icons/bi";
import {
  AiFillGithub,
  AiOutlineInfoCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { BsJournalCode, BsLinkedin } from "react-icons/bs";
import Burger from "../Burger/Burger";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import AboutMe from "../AboutMe/AboutMe";
import ScrollUp from "../Scroll Up/ScrollUp";

function Nav() {
  return (
    <div className="fondo">
      <Burger />
      <div
        className="sidebar" //hacer un componente en el que este el burger button en el que se muestre el dropdown - que sólo se muestre en el mediaquery más peque
      >
        <section>
          <p className="avatar"></p>
        </section>

        <a className="animate__animated animate__fadeIn " href="#Home">
          Home
          <BiHomeHeart className="icon" />
        </a>
        <a className="animate__animated animate__fadeIn" href="#AboutMe">
          About Me
          <AiOutlineUser className="icon" />
        </a>
        <a className="animate__animated animate__fadeIn" href="#Skills">
          Skills
          <BiGitBranch className="icon" />
        </a>
        <a className="animate__animated animate__fadeIn" href="#Projects">
          Projects
          <BsJournalCode className="icon" />
        </a>
        <a className="animate__animated animate__fadeIn" href="#Contact">
          Contact
          <AiOutlineInfoCircle className="icon" />
        </a>

        <div className=" animate__animated animate__fadeIn redes">
          <a
            href="https://github.com/alexiabelendileva"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/alexia-bel%C3%A9n-gonzalez-di-leva-5a3292238/n"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>

      <Home/>

      <AboutMe/>
      <Skills  />
      <Projects  />
      <Contact  />
      <ScrollUp/>
    </div>
  );
}

export default Nav;
