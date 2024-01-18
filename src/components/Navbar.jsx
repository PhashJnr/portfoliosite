/* eslint-disable react/prop-types */
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import chatlogo from "../assets/chat-logo.svg";
import cvlogo from "../assets/cv-logo.svg";
import hamburger from "../assets/hamburger-icon2.svg";
import close from "../assets/x-icon.svg";
import Button from "./Button";

function Navbar({ setIsModalOpen, setIsResumeModalOpen }) {
  const [isOpen, setIsOpen] = useState(false); // [false, function]
  const location = useLocation();

  return (
    <nav className="navbar px-[20px] sm:px-[50px]  text-[#fff] py-[15px] fixed top-0 right-0 left-0  bg-[#1c1c1c]/[0.5] backdrop-blur-sm  z-[6] ">
      <div className="navbarContainer flex sm:flex-row justify-between items-center ">
        <NavLink to="/">
          <h1 className="text-xl justify-self-center self-center font-bold font-sans ">
            phash
            <span className="text-background rounded py-[2px] px-1 bg-[linear-gradient(45deg,#ffd49c,#7a87fb)]">
              .Dev
            </span>
          </h1>
        </NavLink>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="navlink relative  hidden sm:block"
        >
          <div className="navBorder ">
            <ul className="flex gap-[10px]  rounded-[8px] bg-[#1C1C1C]/[0.8] px-[2px] py-[2px]">
              <NavLink
                to="/"
                className={location.pathname === "/" ? "active-link" : ""}
              >
                <li className=" px-11 py-2 ">Home</li>
              </NavLink>
              <NavLink
                to="/projects"
                className={
                  location.pathname === "/projects" ? "active-link" : ""
                }
              >
                <li className=" px-11 py-2 ">Projects</li>
              </NavLink>
              <NavLink
                to="/about"
                className={location.pathname === "/about" ? "active-link" : ""}
              >
                <li className=" px-11 py-2 ">About</li>
              </NavLink>
            </ul>
          </div>
        </motion.div>

        <div className="sm:flex gap-[24px] hidden">
          <img
            src={chatlogo}
            onClick={() => setIsModalOpen(true)}
            className="h-[24px] w-[24px] hover:opacity-70 cursor-pointer"
            alt="chat logo"
          />

          <img
            onClick={() => setIsResumeModalOpen(true)}
            src={cvlogo}
            className="h-[24px] w-[24px] hover:opacity-70 cursor-pointer"
            alt="cv icon"
          />
        </div>
        <div className="navBtn sm:hidden mobileNavBorder ">
          <div
            className=" bg-[#1c1c1c]/[0.9] rounded-[6px] px-[1px] py-[1px] "
            onClick={() => setIsOpen(!isOpen)}
          >
            <Button
              imgSrc={isOpen === false ? hamburger : close}
              altText={"Nav Icon"}
            />
          </div>
        </div>
      </div>

      <div
        className={`navBorderSm w-full h-[100vh]  sm:hidden absolute top-[70px]  ${
          isOpen ? "visible" : "hidden"
        }  left-0`}
      >
        <div className={`navlink py-4 bg-[#1C1C1C]/[0.8] h-full `}>
          <ul className="flex flex-col justify-center items-center  gap-[10px]">
            <NavLink
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
            >
              <li className=" py-[20px] px-[150px]  ">Home</li>
            </NavLink>
            <NavLink
              to="/projects"
              className={location.pathname === "/projects" ? "active-link" : ""}
            >
              <li className=" px-[150px]  py-[20px] ">Projects</li>
            </NavLink>
            <NavLink
              to="/about"
              className={location.pathname === "/about" ? "active-link" : ""}
            >
              <li className=" px-[150px] py-[20px] ">About</li>
            </NavLink>
          </ul>

          <div className="flex gap-[44px] mt-2 justify-center items-center">
            {/* <Link to="/"> */}
            <img
              src={chatlogo}
              onClick={() => setIsModalOpen(true)}
              className="h-[24px] w-[24px] hover:opacity-70"
              alt="chat logo"
            />
            {/* </Link> */}

            {/* <Link to="/"> */}
            <img
              onClick={() => setIsResumeModalOpen(true)}
              src={cvlogo}
              className="h-[24px] w-[24px] hover:opacity-70"
              alt="cv icon"
            />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
