// src/components/StepCards.js
import React from "react";
import { motion } from "framer-motion";

const StepCards = ({ number, title, description, Icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: number * 0.2 }}
      className="bg-white rounded-2xl border-2 border-customBlue shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative flex justify-center mb-4 p-6">
        {/* Icon Circle */}
        <div className="w-16 h-16 bg-customBlue/10 rounded-full flex items-center justify-center">
          <Icon className="text-customBlue text-3xl" />
        </div>

        {/* Number Badge */}
        <div className="absolute -top-3 -right-3 z-10 w-7 h-7 text-xs font-bold text-white bg-customBlue rounded-full flex items-center justify-center shadow-md">
          {number}
        </div>
      </div>

      {/* Title in black */}
      <h3 className="text-lg font-semibold text-black">{title}</h3>

      {/* Description in black */}
      <p className="mt-2 text-black text-base">{description}</p>
    </motion.div>
  );
};

export default StepCards;
