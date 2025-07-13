import React from "react";
import AudienceCard from "../../components/AudienceCard";
import { whoWeServe } from "../../data";

const Who = () => {
  return (
    <section className="w-full min-h-[80vh] flex items-center bg-gradient-to-br from-[#e6f0ff] to-[#fff5f5] p-5 lg:p-10">
      {" "}
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Who We Serve
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Healthcare solutions for everyone
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid lg:grid-cols-3 gap-10 mt-10 w-full">
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
