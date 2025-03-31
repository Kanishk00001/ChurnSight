import React from "react";
import kanishk from "../assets/kanishk.jpeg"

import Harsh from "../assets/Harsh.jpeg"
export default function Team() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-6">
      <div className="container mx-auto text-center">
        
        {/* Title Section */}
        <h1 className="text-5xl font-bold text-gray-900">
          Meet Our <span className="text-indigo-600">Team</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Our expert team is dedicated to building cutting-edge solutions for customer retention and churn prediction.
        </p>

        {/* Team Members Grid */}
        <div className="mt-12 grid gap-10 md:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
          
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
            <img 
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
              alt="Etish Jain"
            />
            <h2 className="mt-4 text-2xl font-semibold text-gray-800 ">Etisha Jain</h2>
            <p className="text-gray-500 ">20233125</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white  rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
            <img 
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
              src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Gunn Agarwal"
            />
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">Gunn Agarwal</h2>
            <p className="text-gray-500">20233131</p>
          </div>

         {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
            <img 
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
              src={Harsh} 
              alt="Harsh Agrawal"
            />
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">Harsh Agrawal</h2>
            <p className="text-gray-500">20233522</p>
          </div>
          
        </div>

        {/* Team Members Grid */}
        <div className="mt-12 grid gap-10 md:grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
          
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
            <img 
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
              src={kanishk} 
              alt="Kanishk Agrawal"
            />
            <h2 className="mt-4 text-2xl font-semibold text-gray-800 ">Kanishk Agrawal</h2>
            <p className="text-gray-500 ">20233526</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white  rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
            <img 
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
              src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Mia"
            />
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">Khushboo Solanki</h2>
            <p className="text-gray-500">20233161</p>
          </div>

         
          
        </div>



      </div>
    </section>
  );
}
