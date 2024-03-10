import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { FramerMotion } from "../../Animations/Animation";

function HomeModal({ ShowMoadal, setShowMoadal }) {
  const { ModalAnimation, ModalBoxAnimation } = FramerMotion;
  useEffect(() => {
    setTimeout(() => {
      setShowMoadal(true);
    }, 6000);
  }, [setShowMoadal]);
  return (
    <AnimatePresence>
      {ShowMoadal && (
        <motion.div
          variants={ModalAnimation}
          exit="hidden"
          initial={"hidden"}
          animate={"visible"}
          className="hero z-50 fixed top-0 left-0 w-full  min-h-screen"
        >
          <motion.div
            variants={ModalBoxAnimation}
            className="hero-content  mx-auto text-center rounded-xl CustomBoxShadow text-black bg-base-100"
          >
            <div className="max-w-md max-sm:w-72 mx-auto">
              <h1 className="text-5xl text-red-600  font-bold">WELCOME</h1>
              <p className="py-6 text-xl font-semibold">
                Welcome to airbnb here we give you hotels at lowest cost , we
                are best in market and all over the world.Enjoy Sir
              </p>
              <button
                onClick={() => setShowMoadal(false)}
                className="btn w-full bg-red-500 hover:bg-red-500 text-white text-xl mx-auto"
              >
                GET STARTED
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default HomeModal;
