import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { sendEmail } from "../services"; // Assuming you have a utility function to send emails
import Button from "../components/Button"; // Assuming you have a Button component
import { toast } from "sonner";

// Validation Schema
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const ContactForm = ({ onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await sendEmail(data);
      toast.success("Message sent successfully!");
      reset(); // Optional: if using react-hook-form's reset()
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white/60 p-6 rounded-lg shadow-lg w-full xl:w-[60%] mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              {...register("name")}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              {...register("message")}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <Button
          title={isSubmitting ? "Sending..." : "Send Message"}
          type="submit"
          disabled={isSubmitting}
        />
      </form>
    </section>
  );
};

export default ContactForm;
