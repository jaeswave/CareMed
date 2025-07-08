import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ name, location, quote, rating }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white border border-gray-200 shadow-md rounded-xl p-8 text-center"
    >
      <div className="flex justify-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">
            ★
          </span>
        ))}
      </div>
      <blockquote className="text-lg text-muted-foreground italic mb-6">
        “{quote}”
      </blockquote>
      <div className="text-foreground font-semibold">{name}</div>
      <div className="text-muted-foreground text-sm">{location}</div>
    </motion.div>
  );
};

export default TestimonialCard;
