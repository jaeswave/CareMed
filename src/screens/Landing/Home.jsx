import React from "react";
import Button from "../../components/Button";
import { motion } from "framer-motion";

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
    <section className="w-full h-[100vh] relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#e6f0ff] via-white to-[#fff5f5] font-outfit">
      {/* Decorative icons */}
      <div className="absolute inset-0 pointer-events-none opacity-10 select-none">
        <img
          src="/src/assets/icons/heart.svg"
          alt=""
          className="absolute top-10 left-10 w-10"
        />
        <img
          src="/src/assets/icons/pill.svg"
          alt=""
          className="absolute bottom-10 right-20 w-12"
        />
        <img
          src="/src/assets/icons/stethoscope.svg"
          alt=""
          className="absolute top-1/2 left-5 w-10"
        />
      </div>

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
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-xl sm:text-3xl mb-2"
          >
            🚀 Now Available: Holter ECG Monitoring
          </motion.h1>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-foreground">Caremed</span>{" "}
            <span className="bg-gradient-to-r from-customBlue via-blue-400 to-customBlue bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
              Connect
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Connecting you to quality care — fast.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Affordable, premium healthcare services booked in seconds.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button title="Partner With Us" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button title="Book Service" className="!bg-customRed" />
            </motion.div>
          </motion.div>

          {/* Down arrow */}
          <motion.div
            variants={itemVariants}
            className="mt-10 animate-bounce text-2xl text-customBlue"
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
