import { motion } from "framer-motion";
import { DataList } from "../Data/data";
import { FaStar } from "react-icons/fa";
import { FramerMotion } from "../Animations/Animation";

function Main() {
  const { CardAnimation } = FramerMotion;
  return (
    <div className="grid -z-20 grid-cols-4 max-lg:grid-cols-3 mx-5  max-md:grid-cols-2 max-sm:grid-cols-1 gap-7 ">
      {DataList.map((items) => (
        <motion.div
          variants={CardAnimation}
          initial={"hidden"}
          animate={"visible"}
          key={items.id}
          className="card max-sm:mx-auto  cursor-pointer bg-base-100"
        >
          <figure className="h-[250px] rounded-box">
            <div className="carousel  rounded-box w-full space-x-4">
              <div className="carousel-item w-full rounded-box  ">
                <img
                  src={items.Img1}
                  className="w-full rounded-box"
                  alt="Hotels Room Image"
                />
              </div>
            </div>
          </figure>
          <div className="card-body ">
            <p className="w-full flex justify-between text-[14px] font-bold">
              <span>{items.Location}</span>
              <span className="flex items-center opacity-80 gap-1">
                <FaStar />
                {items.Rating}
              </span>
            </p>
            <section className="text-[14px] font-bold">
              <h3 className="opacity-70">{items.Distance}</h3>
              <h3 className="opacity-70">{items.CheckIn_Out}</h3>
              <h3>{items.Price} night</h3>
            </section>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Main;
