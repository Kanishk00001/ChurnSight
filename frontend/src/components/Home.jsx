import React from "react";
import { Link } from "react-router-dom";
import LOGO1 from "../assets/img1.png";
import LOGO2 from "../assets/img2.png";
import LOGO3 from "../assets/img3.png";
import LOGO4 from "../assets/img4.png";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center text-center py-16 px-6">
      
      {/* Hero Section */}
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Unlock Customer Retention with <span className="text-indigo-600">AI-Powered Insights</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Our advanced churn prediction platform helps businesses identify at-risk customers,
          analyze engagement patterns, and create data-driven retention strategies.
        </p>

        <div className="mt-8">
          <Link 
            to="/about" 
            className="px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
        <div className="bg-white rounded-lg shadow-lg  transform hover:scale-105 transition duration-300">
          <img src={LOGO1} className="w-full h-full object-cover rounded-lg mb-4" alt="Feature 1" />
          
          
        </div>

        <div className="bg-white rounded-lg shadow-lg  transform hover:scale-105 transition duration-300">
          <img src={LOGO2} className="w-full h-full object-cover rounded-lg mb-4" alt="Feature 2" />
          
        </div>

        <div className="bg-white rounded-lg shadow-lg  transform hover:scale-105 transition duration-300">
          <img src={LOGO3} className="w-full h-full object-cover rounded-lg mb-4" alt="Feature 3" />
          
        </div>

        <div className="bg-white rounded-lg shadow-lg  transform hover:scale-105 transition duration-300">
          <img src={LOGO4} className="w-full h-full object-cover rounded-lg mb-4" alt="Feature 4" />
        
        </div>
      </div>
    </div>
  );
}

export default Home;
