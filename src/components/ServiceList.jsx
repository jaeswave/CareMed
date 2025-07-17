import { useState } from "react";

const ServiceList = (props) => {
  const { services, onBookService } = props;
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id={id} className="service-list bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Book a Service</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedService(service.id)}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedService === service.id
                ? "bg-blue-50 border-blue-500"
                : "hover:bg-gray-50"
            }`}
          >
            <h3 className="font-medium">{service.name}</h3>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-4">
            Selected:{" "}
            <span className="font-semibold text-blue-600">
              {services.find((s) => s.id === selectedService).name}
            </span>
          </p>
          <button
            onClick={() => onBookService(selectedService)}
            className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700"
          >
            Book Now
          </button>
        </div>
      )}
    </section>
  );
};

export default ServiceList;
