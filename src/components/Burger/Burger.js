import { useState } from "react";
import "./Burger.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiGitBranch, BiHomeHeart } from "react-icons/bi";
import { AiOutlineInfoCircle, AiOutlineUser } from "react-icons/ai";
import { BsJournalCode } from "react-icons/bs";

function Burger() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="button-cont">
      <button onClick={handleOpen} className="drop">
      <GiHamburgerMenu className="boton" />
      {open ? (
        <div className="menu">
          <a name className="menu-item" href="#Home">
            Home
            <BiHomeHeart />
          </a>
          <a className="menu-item" href="#AboutMe">
            About Me
            <AiOutlineUser />
          </a>
          <a className="menu-item" href="#Skills">
            Skills
            <BiGitBranch />
          </a>
          <a className="menu-item" href="#Projects">
            Projects
            <BsJournalCode />
          </a>
          <a className="menu-item" href="#Contact">
            Contact
            <AiOutlineInfoCircle />
          </a>
        </div>
      ) : null}
    </button>
    </div>
  );
}

export default Burger;
