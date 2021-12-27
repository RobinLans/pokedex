import React from "react";
import generationsJSON from "../generations.json";
import { motion, AnimatePresence } from "framer-motion";

const selectorVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function CustomSelector({ setGeneration }) {
  return (
    <AnimatePresence>
      <motion.div
        className="customDropdown"
        variants={selectorVariants}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 0.2,
        }}
        exit="hidden"
      >
        {generationsJSON.map((gen, i) => {
          return (
            <div
              key={i}
              className="dropSelect"
              onClick={() => {
                setGeneration(gen);
              }}
            >
              <p className="text-[#2a477c]">{gen.name}</p>
            </div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}

export default CustomSelector;
