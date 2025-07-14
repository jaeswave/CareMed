// components/ContactModal.jsx
import { Dialog } from "@headlessui/react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto w-full max-w-md rounded-xl bg-white p-6 shadow-xl space-y-4">
          <Dialog.Title className="text-xl font-bold">Contact Us</Dialog.Title>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="text-primary" size={20} />
              <span>+234-XXX-XXXXXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-primary" size={20} />
              <span>hello@caremedconnect.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-primary" size={20} />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-green-500" size={20} />
              <a
                href="https://wa.me/234XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full mt-4 bg-customBlue text-white py-2 rounded hover:bg-blue-700"
          >
            Close
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ContactModal;
