import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "../../components/Button";

const CallToAction = () => {
  const controls = useAnimation();

  useEffect(() => {
    const loop = async () => {
      while (true) {
        // Dangle
        await controls.start({
          rotate: [-3, 3, -2, 2, 0],
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        });
        // Pause for 4 seconds
        await new Promise((resolve) => setTimeout(resolve, 4000));
      }
    };
    loop();
  }, [controls]);

  return (
    <section className="w-full mx-auto min-h-[50vh] rounded-2xl relative overflow-hidden">
      {/* Blurred Background Layer */}
      <div className="absolute inset-0 bg-join-bg bg-cover bg-center blur-sm scale-105 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-5 lg:px-10">
        <motion.div
          animate={controls}
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="relative bg-white/50 backdrop-blur-sm px-8 py-10 text-center max-w-md mx-auto border border-black clip-tag rounded-xl origin-top-left"
        >
          {/* Pin Hole */}
          <div className="absolute top-4 left-4 w-4 h-4 bg-black rounded-full border border-white/30 shadow-inner animate-pulse z-20" />

          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base mb-6">
            Book your healthcare service today and experience the difference.
          </p>
          <Button
            title={"Book Your Slot Now"}
            className="bg-white !text-customBlue border-2 border-customBlue hover:bg-customBlue/5 hover:text-white"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
