import React from "react";
import { LuSlidersHorizontal } from "react-icons/lu";
import IconsTab from "./Icons";
function ScrolableTab() {
  return (
    <div className="grid grid-cols-6 max-sm:grid-cols-12 max-sm:my-5 border-none my-3">
      <div className="col-span-4 max-sm:col-span-12 px-6 max-sm:px-2 max-sm:my-5 flex items-center space-x-5">
        <IconsTab />
      </div>
      <div className="col-span-2 max-sm:col-span-12">
        <div className="grid grid-cols-3 max-sm:grid-cols-12 text-center">
          <div className=" p-3 col-span-1 max-sm:col-span-4 flex items-center justify-center">
            <button className="btn  bg-white btn-outlin borderClass2 text-[14px]  flex gap-2">
              <LuSlidersHorizontal />
              Filter
            </button>
          </div>
          <div className=" p-3 col-span-2 max-sm:col-span-8  flex items-center">
            <button className="btn hover:shadow-xl w-full max-sm:w-full  max-sm:mx-auto bg-white btn-outlin borderClass2 text-[14px]  flex gap-2 ">
              <p className="max-sm:hidden" > Display total before taxes</p>
              <p className="hidden max-sm:block">Display total prices</p>
              <input type="checkbox" className="toggle " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrolableTab;
