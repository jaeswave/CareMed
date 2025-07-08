import React from "react";
import TestimonialCard from "../../components/TestimonialCard";
import { testimonials } from "../../data";

const Testimonial = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real people
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
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
