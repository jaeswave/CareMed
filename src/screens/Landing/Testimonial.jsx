import React from "react";
import TestimonialCard from "../../components/TestimonialCard";
import { testimonials } from "../../data";

const Testimonial = () => {
  return (
    <section className="w-full min-h-[80vh] flex items-center bg-gradient-to-br from-[#fff5f5] to-[#e6f0ff] p-5 lg:p-10">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real people
          </p>
        </div>

        <div className="w-full mx-auto">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              name={t.name}
              location={t.location}
              quote={t.quote}
              rating={t.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
