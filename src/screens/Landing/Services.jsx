import React from "react";
import ServiceCard from "../../components/ServiceCard";
import { currentService, upcomingServices } from "../../data";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Professional healthcare services available now and coming soon
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ServiceCard {...currentService} isPrimary />
          <ServiceCard {...upcomingServices} />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
