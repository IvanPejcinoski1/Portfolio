"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaAnglesDown } from "react-icons/fa6";

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: [0, 10, 0], opacity: [1, 0.8, 1] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center text-white"
      >
        <FaAnglesDown size={40} />
      </motion.div>
    </div>
  );
};

export default ScrollIndicator;
