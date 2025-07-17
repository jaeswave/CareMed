import  ContactForm  from "../../components/ContactForm";
import  ServiceList  from "../../components/ServiceList";
import  Partnership  from "../../components/Partnership";




const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
export const Contact = () => {
  const services = [
    { id: 1, name: "ECG Monitoring" },
    { id: 2, name: "Holter Monitoring" },
    { id: 3, name: "Cardiac Stress Testing" },
    { id: 4, name: "Ambulatory Blood Pressure" },
    { id: 5, name: "Telemedicine Consultation" },
    { id: 6, name: "Home Health Services" },
  ];

  const handleFormSubmit = async (formData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    alert("Thank you for your message!");
  };

  const handleBookService = (serviceId) => {
    const service = services.find((s) => s.id === serviceId);
    alert(`Booking ${service.name}...`);
    // Redirect to booking page or show modal
  };

  return (
    <section className=" mt-16 mb-10 w-full min-h-screen py-10 bg-hero-bg bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto w-[60%] grid grid-rows-3 space-y-20">
        <ContactForm id="contact" onSubmit={handleFormSubmit} />
        <ServiceList id="book-services" services={services} onBookService={handleBookService} />
        <Partnership id="partnership" />
      </div>
    </section>
  );
};

export default Contact;
