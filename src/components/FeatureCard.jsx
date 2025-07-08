// src/components/FeatureCard.js
import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({
  title,
  description,
  Icon,
  index,
  isLastCol,
  isLastRow,
}) => {
  const borderClasses = `
    bg-white 
    p-6 
    text-center 
    shadow-sm 
    hover:shadow-lg 
    transition-all 
    duration-300 
    rounded-none 
    border-customBlue
    ${!isLastRow ? "border-b-2" : ""}
    ${!isLastCol ? "border-r-2" : ""}
  `;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className={borderClasses}
    >
      <div className="mx-auto w-16 h-16 bg-customBlue/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-customBlue text-3xl" />
      </div>
      <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
      <p className="text-sm text-black">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
