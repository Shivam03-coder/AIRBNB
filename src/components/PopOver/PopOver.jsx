import React from "react";
import { CgProfile } from "react-icons/cg";
import { FiAlignJustify } from "react-icons/fi";
import LoginPage from "../Modals/LoginPage";
import SignUpPage from "../Modals/SignUpPage";
function PopOver() {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <button
          data-ripple-light="true"
          data-popover-target="popover-bottom-end"
          className="select-none rounded-[32px] bg-white py-3 px-6 text-center  font-sans text-xs font-bold uppercase flex items-center space-x-2 border hover:bShadow"
        >
          <FiAlignJustify className="text-2xl" />
          <CgProfile className="text-2xl" />
        </button>
      </div>
      <ul
        tabIndex={0}
        className="mt-3 space-y-3 z-[1] p-5 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <LoginPage />
        <SignUpPage />
        <button className="btn">Airbnb your home</button>
        <button className="btn">Home Center</button>
      </ul>
    </div>
  );
}

export default PopOver;
