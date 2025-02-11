import React from 'react';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen flex flex-col justify-center items-center text-white sm:p-6">
      <h2 className="text-4xl font-bold text-center mb-5 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Get in Touch
      </h2>
      <p className="text-gray-400 text-center max-w-md">
        Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
      </p>

      <form className="w-full max-w-lg p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">Name</label>
          <div className="flex items-center bg-black/90 backdrop-blur-lg border border-gray-600 rounded-lg p-3">
            <FaUser className="text-gray-400 mr-3" />
            <input
              type="text"
              className="w-full bg-transparent focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">Email</label>
          <div className="flex items-center bg-black/90 backdrop-blur-lg border border-gray-600 rounded-lg p-3">
            <FaEnvelope className="text-gray-400 mr-3" />
            <input
              type="email"
              className="w-full bg-transparent focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-gray-300 text-sm font-bold mb-2">Message</label>
          <textarea
            className="w-full p-3 bg-black/90 backdrop-blur-lg border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-black font-bold py-3 rounded-lg flex justify-center items-center gap-2 transition duration-300">
          <FaPaperPlane />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
