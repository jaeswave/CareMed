import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";

const Layout = ({ children }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <>
      <Nav openContact={openContact} />
      <main>{children}</main>
      <Footer openContact={openContact} />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </>
  );
};

export default Layout;
