// src/sections/HowItWorks.js
import React from "react";
import StepCards from "../../components/StepCards";
import { howItWorks } from "../../data";

const HowItWorks = () => {
  return (
    <section className="w-full min-h-[90vh] flex items-center bg-gradient-to-br from-[#fff5f5] to-[#e6f0ff] py-10">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-outfit mt-10">How It Works</h2>
          <p className="mt-4 text-xl text-customBlue font-urbanist max-w-2xl mx-auto">
            Get the care you need in three simple steps
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-10 lg:mt-20 w-full">
          {howItWorks.map((step) => (
            <StepCards
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              Icon={step.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
