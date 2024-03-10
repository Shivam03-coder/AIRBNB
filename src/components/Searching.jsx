import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FramerMotion } from "../Animations/Animation";
import { motion } from "framer-motion";
function Searching() {
  const { ButtonVariant } = FramerMotion;
  return (
    <div className="grid grid-cols-6  max-sm:grid-cols-12 gap-4 mb-6 ">
      <section className=" grid grid-cols-6 col-start-2 max-sm:col-start-auto  max-sm:col-span-12 max-sm:grid max-sm:grid-cols-12 divide-x divide-[#a8a8a8] col-span-4 bShadow border px-2 py-2 rounded-[40px]">
        <div className="col-span-2 max-sm:col-span-4  px-6  flex justify-center flex-col text-[15px]">
          <p>Where</p>
          <p className="opacity-40">Search destinations</p>
        </div>
        <div className="flex px-5 max-sm:col-span-4 justify-center flex-col text-[15px]">
          <p>Check In</p>
          <p className="opacity-40">Add Dates</p>
        </div>
        <div className="flex px-5 max-sm:hidden justify-center flex-col text-[15px]">
          <p>Check Out</p>
          <p className="opacity-40">Add Dates</p>
        </div>
        <div className="col-span-2  max-sm:col-span-4 px-5 flex  justify-between items-center text-[15px]">
          <div className="content">
            <p>Who</p>
            <p className="opacity-40 ">Add guests</p>
          </div>
          <motion.div
            variants={ButtonVariant}
            whileHover={"hover"}
            className="search_icon bg-red-500 p-3 rounded-full"
          >
            <IoSearchSharp className="text-3xl  text-white" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Searching;
