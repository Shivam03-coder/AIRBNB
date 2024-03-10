import "../stylesheets/Icons.css";
import { TbViewportWide } from "react-icons/tb";
import { AiFillBank } from "react-icons/ai";
import { FiGitlab, FiHardDrive } from "react-icons/fi";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";

import {
  Bs0Square,
  Bs2CircleFill,
  Bs5SquareFill,
  BsBasket3,
  BsInbox,
  BsCart3,
  BsDice1,
  BsFeather,
} from "react-icons/bs";

function IconsTab() {
  const HandleScrollLeft = () => {
    const scrollContainer = document.getElementById("scrollContainer");
    scrollContainer.scrollLeft += 200;
  };

  const HandleScrollRight = () => {
    const scrollContainer = document.getElementById("scrollContainer");
    scrollContainer.scrollLeft -= 200;
  };

  return (
    <>
      <span className="VericalCenter  bg-base-200  p-3 max-sm:p-1 rounded-[50%] border-2 cursor-pointer">
        <BsChevronDoubleLeft onClick={HandleScrollLeft} className="text-lg" />
      </span>
      <div
        id="scrollContainer"
        className="IconsWrapper flex items-center cursor-pointer  h-16 text-xl px-4 max-sm:px-1 overflow-auto gap-14 max-sm:gap-8"
      >
        <span className="VericalCenter">
          <Bs0Square />
          <p className="IconsText">Veiws</p>
        </span>
        <span className="VericalCenter">
          <BsInbox />
          <p className="IconsText">Rooms</p>
        </span>
        <span className="VericalCenter">
          <Bs2CircleFill />
          <p className="IconsText">Pools</p>
        </span>
        <span className="VericalCenter">
          <Bs5SquareFill />
          <p className="IconsText">Play</p>
        </span>
        <span className="VericalCenter">
          <TbViewportWide />
          <p className="IconsText">Bread</p>
        </span>
        <span className="VericalCenter">
          <AiFillBank />
          <p className="IconsText">Windmills</p>
        </span>
        <span className="VericalCenter">
          <FiGitlab />
          <p className="IconsText">Skills</p>
        </span>
        <span className="VericalCenter">
          <FiHardDrive />
          <p className="IconsText">Homes</p>
        </span>
        <span className="VericalCenter">
          <BsBasket3 />
          <p className="IconsText">Beach</p>
        </span>
        <span className="VericalCenter">
          <BsCart3 />
          <p className="IconsText">Food</p>
        </span>
        <span className="VericalCenter">
          <BsFeather />
          <p className="IconsText">Yurts</p>
        </span>
        <span className="VericalCenter">
          <Bs0Square />
          <p className="IconsText">Arctic</p>
        </span>
        <span className="VericalCenter">
          <AiFillBank />
          <p className="IconsText">Farms</p>
        </span>
        <span className="VericalCenter">
          <FiGitlab />
          <p className="IconsText">Cabins</p>
        </span>
        <span className="VericalCenter">
          <FiHardDrive />
          <p className="IconsText">Enjoy</p>
        </span>
        <span className="VericalCenter">
          <BsBasket3 />
          <p className="IconsText">Medical</p>
        </span>
        <span className="VericalCenter">
          <BsCart3 />
          <p className="IconsText">Dining</p>
        </span>
        <span className="VericalCenter">
          <BsDice1 />
          <p className="IconsText">Bar</p>
        </span>
        <span className="VericalCenter">
          <BsFeather />
          <p className="IconsText">Reception</p>
        </span>
        <span className="VericalCenter">
          <Bs0Square />
          <p className="IconsText">Club</p>
        </span>
        <span className="VericalCenter">
          <AiFillBank />
          <p className="IconsText">Garden</p>
        </span>
        <span className="VericalCenter">
          <FiGitlab />
          <p className="IconsText">Rooms</p>
        </span>
        <span className="VericalCenter">
          <FiHardDrive />
          <p className="IconsText">Schools</p>
        </span>
      </div>
      <span className="VericalCenter border-2 p-3 max-sm:p-1 rounded-[50%]  bg-base-200 cursor-pointer">
        <BsChevronDoubleRight onClick={HandleScrollRight} className="text-lg" />
      </span>
    </>
  );
}

export default IconsTab;
