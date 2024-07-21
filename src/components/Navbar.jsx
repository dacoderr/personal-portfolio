import { FaLinkedin } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrDocumentDownload } from "react-icons/gr";

import logo from "../assets/b.png"
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-start">
        <img className="mx-2 w-10" src={logo} alt="Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/bilalsajid1/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/dacoderr" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/dacoderr" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
        <a href="https://drive.google.com/file/d/1JU6z3AH6F7vZzy2J8OTmXr67gSTWo2GE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <GrDocumentDownload />
        </a>
      </div>
    </nav>
  );
};

export default Navbar