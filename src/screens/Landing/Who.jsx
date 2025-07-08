import React from "react";
import AudienceCard from "../../components/AudienceCard";
import { whoWeServe } from "../../data";

const Who = () => {
  return (
    <section className="p-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Who We Serve
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Healthcare solutions for everyone
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
            {whoWeServe.map((item, i) => (
              <AudienceCard
                key={i}
                Icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
