import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY; 

    console.log('SERVICE_ID:', SERVICE_ID || 'Not Set');
    console.log('TEMPLATE_ID:', TEMPLATE_ID || 'Not Set');
    console.log('PUBLIC_KEY:', PUBLIC_KEY || 'Not Set');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        toast.success("Email sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        form.current.reset();
      })
      .catch((error) => {
        toast.error("Failed to send email. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.error("Error sending email:", error.text);
      });
  };

  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center relative z-10 px-4 py-8 bg-gray-900"
    >
      <div className="flex flex-col items-center w-full max-w-5xl space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-400 mt-5 md:text-3xl">
          Contact
        </h1>
        <p className="text-lg lg:text-xl max-w-2xl text-gray-300 mb-5 md:text-base text-center mx-2">
          Feel free to reach out to me for any questions or opportunities!
        </p>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-card bg-gray-800 p-8 rounded-xl shadow-md space-y-4"
        >
          <h2 className="text-2xl font-bold mb-2 text-indigo-400">
            Email Me 🚀
          </h2>
          <input
            className="w-full bg-gray-700 border border-secondary outline-none rounded-lg p-3 text-white focus:border-primary"
            placeholder="Your Email"
            name="from_email"
            type="email"
            required
          />
          <input
            className="w-full bg-gray-700 border border-secondary outline-none rounded-lg p-3 text-white focus:border-primary"
            placeholder="Your Name"
            name="from_name"
            type="text"
            required
          />
          <input
            className="w-full bg-gray-700 border border-secondary outline-none rounded-lg p-3 text-white focus:border-primary"
            placeholder="Subject"
            name="subject"
            type="text"
            required
          />
          <textarea
            className="w-full bg-gray-700 border border-secondary outline-none rounded-lg p-3 text-white focus:border-primary"
            placeholder="Message"
            rows="4"
            name="message"
            required
          />
          <input
            type="submit"
            value="Send"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-semibold cursor-pointer"
          />
        </form>
        <ToastContainer className="mt-12" />
      </div>
    </div>
  );
};

export default Contact;
