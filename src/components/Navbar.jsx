import React, { useContext } from "react";
import "../stylesheets/Header.css";
import { IoGlobeOutline } from "react-icons/io5";
import LogoImg from "../assets/ABNB_BIG.png";
import PopOver from "./PopOver/PopOver";
import { FramerMotion } from "../Animations/Animation";
import { motion } from "framer-motion";
function Navbar() {
  const { Basevariants } = FramerMotion;
  return (
    <>
      <div className=" Navbar grid grid-cols-6 max-sm:grid-cols-12   justify-evenly gap-3 p-6">
        <div className="LOGO max-sm:col-span-6  flex items-center">
          <img
            className="h-8 mx-auto max-sm:items-center"
            src={LogoImg}
            alt="AIRBNB LOGO"
          />
        </div>
        <div className="SearchExperience max-sm:hidden max-md:hidden flex items-center col-span-3 justify-end font-sans text-lg">
          <a href="" className="font-semibold ExperienceChoice px-10 py-2 ">
            Stays
          </a>
          <a className="ExperienceChoice px-10 py-2 cursor-pointer opacity-80">
            Experience
          </a>
          <a className="ExperienceChoice px-10 py-2 cursor-pointer opacity-80">
            Online Experience
          </a>
        </div>
        <div className="Login col-span-2 max-sm:col-span-6  max-sm:justify-center flex justify-evenly items-center ">
          <a
            href=""
            className="ExperienceChoice max-md:hidden px-4 py-3 text-[15px]"
          >
            Airbnb your home
          </a>
          <IoGlobeOutline className="ExperienceChoice max-md:hidden text-xl " />
          <motion.div
            variants={Basevariants}
            initial={"hidden"}
            animate={"visible"}
          >
            <PopOver />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
