import React from "react";
import { whyCaremed } from "../../data";
import FeatureCard from "../../components/FeatureCard";

const WhyCaremed = () => {
  const cols = 4; // grid-cols-4
  const rows = Math.ceil(whyCaremed.length / cols);

  return (
    <section className="w-full min-h-[80vh] flex items-center bg-gradient-to-br from-[#e6f0ff] to-[#fff5f5] p-5 lg:p-10 pt-20 lg:pt-0">
      {" "}
      <div className="container w-[90%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Why Caremed Connect
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Healthcare that works for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {whyCaremed.map((item, index) => {
            const isLastCol = (index + 1) % cols === 0;
            const isLastRow = Math.floor(index / cols) === rows - 1;

            return (
              <FeatureCard
                key={index}
                title={item.title}
                description={item.description}
                Icon={item.Icon}
                index={index}
                isLastCol={isLastCol}
                isLastRow={isLastRow}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyCaremed;
