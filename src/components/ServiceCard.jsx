import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "./Button"

const ServiceCard = ({
  badge,
  title,
  description,
  points,
  items,
  buttonText,
  isPrimary,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}
      className={`bg-white font-outfit border transition-shadow duration-300 ${
        isPrimary ? "border-blue-200" : "border-gray-200"
      } shadow-sm hover:shadow-xl rounded-xl p-6`}
    >
      <div className="mb-4">
        <span
          className={`inline-block text-sm font-medium px-3 py-1 rounded-full mb-2 ${
            isPrimary
              ? "bg-blue-100 text-blue-700"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {badge}
        </span>
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className=" mt-2">{description}</p>
      </div>

      {points && (
        <ul className="space-y-3 mb-6 mt-4">
          {points.map((text, i) => (
            <li key={i} className="flex items-start gap-6">
              <FaCheckCircle className="text-blue-600 mt-1" />
              <span className="">{text}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Items list (upcoming) */}
      {items && (
        <ul className="space-y-3 mt-4">
          {items.map((text, i) => (
            <li key={i} className="flex items-center gap-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-5" />
              <span className="">{text}</span>
            </li>
          ))}
        </ul>
      )}

      {buttonText && (
      
        <Button title={buttonText} className="!w-full" />
      )}
    </motion.div>
  );
};

export default ServiceCard;
