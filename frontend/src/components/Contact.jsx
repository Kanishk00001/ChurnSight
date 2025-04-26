import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-16 px-6">
      
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Get in <span className="text-indigo-600">Touch</span>
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl">
        Have questions or need help? Feel free to reach out to us using the form below,
        or contact us directly via email or phone.
      </p>

      {/* Contact Form & Info */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full bg-white p-10 shadow-lg rounded-lg">
        
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Your Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Your Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea 
                rows="4" 
                placeholder="Type your message..." 
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
          <p className="text-gray-600">
            Reach out to us via phone or email. We’re always here to help!
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-indigo-600 text-xl">📍</span>
            <p className="text-gray-700">MNNIT Allahabad, Prayagraj, India</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-indigo-600 text-xl">📧</span>
            <p className="text-gray-700">contact@churnsite.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-indigo-600 text-xl">📞</span>
            <p className="text-gray-700">+123 456 7890</p>
          </div>
        </div>
      </div>
    </div>
  );
}
