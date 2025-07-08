import React from "react";
import { motion } from "framer-motion";

const AudienceCard = ({ Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-white border border-gray-200 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition duration-300 ease-in-out"
    >
      <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};

export default AudienceCard;
