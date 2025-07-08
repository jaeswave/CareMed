import {
  FaStethoscope,
  FaCalendarCheck,
  FaHouseMedical,
 
} from "react-icons/fa6";
import { Clock, Heart, CheckCircle, Shield } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { FaUsers, FaHeart, FaShieldAlt } from "react-icons/fa";



export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Services", path: "/services" },
  { label: "Contact Us", path: "/contact-us" },
];

export const howItWorks = [
  {
    number: 1,
    title: "Choose a Service",
    description:
      "Select from available diagnostic and medical slots (starting with Holter ECG).",
    Icon: FaStethoscope,
  },
  {
    number: 2,
    title: "Book Instantly",
    description: "Reserve your appointment online, by phone, or via WhatsApp.",
    Icon: FaCalendarCheck,
  },
  {
    number: 3,
    title: "Get Quality Care",
    description:
      "Visit the selected facility or enjoy at-home service where available.",
    Icon: FaHouseMedical,
  },
];






export const whyCaremed = [
  {
    title: "Fast Access",
    description: "Fast access to trusted healthcare providers",
    Icon: Clock,
  },
  {
    title: "Affordable",
    description: "Affordable services powered by underused capacity",
    Icon: Heart,
  },
  {
    title: "Easy Booking",
    description: "Easy booking with no long waits",
    Icon: CheckCircle,
  },
  {
    title: "Quality Assured",
    description: "Quality assured partnerships with vetted clinics and labs",
    Icon: Shield,
  },
];




export const currentService = {
  badge: "Available Now",
  title: "Holter ECG Monitoring",
  description:
    "A 24-hour cardiac rhythm monitor for evaluating palpitations, dizziness, or suspected arrhythmias.",
  points: [
    "Includes device fitting, patient instructions, and physician review",
    "Same-day or next-day appointments",
    "Available at partner clinics or home service (where applicable)",
  ],
  buttonText: "Book Holter ECG",
};

export const upcomingServices = {
  badge: "Coming Soon",
  title: "Expanding Services",
  description: "We're rapidly expanding our service offerings",
  items: [
    "Laboratory Blood Tests",
    "ECG and Echocardiography",
    "General Ultrasound",
    "Radiology Services (CT, MRI)",
    "Specialist Consultations",
  ],
};




export const whoWeServe = [
  {
    icon: FaUsers,
    title: "Individuals",
    description: "Individuals looking for affordable, timely diagnostics",
  },
  {
    icon: FaHeart,
    title: "Clinics",
    description: "Clinics needing overflow support",
  },
  {
    icon: FaShieldAlt,
    title: "Employers & HMOs",
    description: "Employers and HMOs seeking efficient partnerships",
  },
];




export const partnerBenefits = [
  "Seamless patient referrals",
  "Centralized customer support",
  "Transparent reporting",
  "Guaranteed payout per completed service",

];



export const testimonials = [
  {
    name: "Sarah O.",
    location: "Lagos, Nigeria",
    rating: 5,
    quote:
      "Booked my Holter ECG in 2 minutes and had it done same day! Caremed Connect is a game-changer.",
  },
  {
    name: "Emeka T.",
    location: "Abuja, Nigeria",
    rating: 5,
    quote:
      "Fast, reliable, and professional. This platform helped me find a clinic near me in minutes.",
  },
  {
    name: "Aisha B.",
    location: "Kano, Nigeria",
    rating: 4,
    quote:
      "The process was smooth and the follow-up was excellent. Will definitely recommend to friends.",
  },
  {
    name: "John D.",
    location: "Ibadan, Nigeria",
    rating: 5,
    quote:
      "I scheduled my mother's ultrasound using Caremed Connect. It was convenient and efficient.",
  },
  {
    name: "Chidinma U.",
    location: "Enugu, Nigeria",
    rating: 4,
    quote:
      "Loved the ease of use and quick response time. The home service was a bonus!",
  },
];

