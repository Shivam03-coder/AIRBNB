import React from "react";
import Popular from "./Navigations/Popular";
import ArtsCulture from "./Navigations/ArtsCulture";
import ThingssToDo from "./Navigations/ThingssToDo";
import Outdoors from "./Navigations/Outdoors";
import Muontains from "./Navigations/Muontains";
import Beaches from "./Navigations/Beaches";
import UniqueStays from "./Navigations/UniqueStays";
import Categories from "./Navigations/Categories";

function Footer() {
  return (
    <div className="Footer bg-base-200">
      <h1 className="text-[26px] font-[600] px-9 py-8">
        Inspiration for future getaways
      </h1>
      <div role="tablist" className="tabs max-md:hidden tabs-bordered px-9 border-none">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab px-7 opacity-90  font-[600] text-lg"
          aria-label="Popular"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
          <Popular />
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab px-7 opacity-90  font-[600] text-lg"
          aria-label="Arts & culture"
        />
        <div role="tabpanel" className="tab-content p-10">
          <ArtsCulture />
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab px-7 opacity-90  font-[600]  text-lg"
          aria-label="Outdoors"
        />
        <div role="tabpanel" className="tab-content p-10">
          <Outdoors />
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab px-7 opacity-90  font-[600] text-lg"
          aria-label="Mountains"
        />
        <div role="tabpanel" className="tab-content p-10">
          <Muontains />
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab px-7 opacity-90  font-[600]  text-lg"
          aria-label="Beaches"
        />
        <div role="tabpanel" className="tab-content p-10">
          <Beaches />
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab px-7 opacity-90  font-[600]  text-lg"
          aria-label="Unique stays"
        />
        <div role="tabpanel" className="tab-content p-10">
          <UniqueStays />
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab px-7  opacity-90  font-[600]  text-lg"
          aria-label="Categories"
        />
        <div role="tabpanel" className="tab-content p-10">
          <Categories />
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab px-7 opacity-90  font-[600]  text-lg"
          aria-label="Things to do"
        />
        <div role="tabpanel" className="tab-content p-10">
          <ThingssToDo />
        </div>
      </div>
    </div>
  );
}

export default Footer;
