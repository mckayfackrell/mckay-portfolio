import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    // navbar
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#546f7a] text-black">
      {/* logo */}
      <div>
        <img src={Logo} alt="Logo" style={{ width: "60px" }} />
      </div>

      {/* menu */}
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* mobile menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#546f7a] flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* social icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;