import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 font-outfit text-muted-foreground">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center md:items-start gap-8">
        {/* Left: Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-[200px]">
          <img src={logo} alt="Caremed Logo" className="h-12 w-28 mb-2" />
          <p className="text-sm">Connecting you to quality care — fast.</p>
        </div>

        {/* Center: Social Media Icons */}
        <div className="flex flex-col items-center text-center min-w-[200px]">
          <div className="flex gap-5 text-2xl mb-3">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF0000]"
            >
              <FaYoutube />
            </a>
            <a
              href="https://whatsapp.com/channel/0029VbAsmUNCnA7oOzLDvX0l"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366]"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/drinx_ng?utm_source=qr&igsh=anh4bnZ0dnpqcHlr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C]"
            >
              <FaInstagram />
            </a>
          </div>
          <p className="text-xs">
            © {new Date().getFullYear()} Caremed Connect. All rights reserved.
          </p>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2 text-sm min-w-[200px]">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            +234-XXX-XXXXXXX
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            hello@caremedconnect.com
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            Lagos, Nigeria
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
