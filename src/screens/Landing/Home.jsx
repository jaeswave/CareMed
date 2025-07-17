import React from "react";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
  return (
    <section className="bg-hero-bg bg-center bg-cover bg-no-repeat mt-16 w-full h-[70vh] md:h-[100vh] flex items-center justify-center  font-outfit">
      {/* Background glow/pulse */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-customRed/10 blur-2xl opacity-60 animate-pulse" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container w-[90%] h-[80vh] mx-auto flex items-center justify-center"
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto max-w-[80%] text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-lg sm:text-3xl mb-2"
          >
            Now Available: Holter ECG Monitoring
          </motion.h1>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-[9rem]"
          >
            <span className="text-outfit">CareMed</span>{" "}
            <span className="bg-gradient-to-r from-customBlue via-blue-400 to-customBlue bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
              Connect
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-sm lg:text-2xl w-full lg:w-[70%] mx-auto bg-customBlue text-white rounded-3xl p-1 lg:p-2"
          >
            Connecting you to quality care — fast.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-2 text-xl max-w-3xl mx-auto"
          >
            Affordable, premium healthcare services booked in seconds.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact-us">
                <Button
                  title="Partner With Us"
                  className="!bg-white !text-customBlue border-2 !border-customBlue"
                />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact-us#book-service">
                {" "}
                {/* Scrolls to book-service section */}
                <Button title="Book Service" className="!bg-customBlue" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Down arrow */}
          <motion.div
            variants={itemVariants}
            className="mt-10 animate-bounce text-2xl font-bold text-customBlue"
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
