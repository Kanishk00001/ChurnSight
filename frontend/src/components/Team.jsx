import React from "react";

export default function Team() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-16 px-6">
      <div className="container mx-auto text-center">
        
        {/* Title Section */}
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Meet Our <span className="text-indigo-600">Team</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Our expert team is dedicated to building cutting-edge solutions for customer retention and churn prediction.
        </p>

        {/* Team Members Grid */}
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          
          {/* Team Member 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
            <img 
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
              alt="John Doe"
            />
            <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">John Doe</h2>
            <p className="text-gray-500 dark:text-gray-400">Full Stack Developer</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
            <img 
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
              src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Mia"
            />
            <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">Mia</h2>
            <p className="text-gray-500 dark:text-gray-400">Graphic Designer</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
            <img 
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
              alt="Alex"
            />
            <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">Alex</h2>
            <p className="text-gray-500 dark:text-gray-400">AI Engineer</p>
          </div>

        </div>
      </div>
    </section>
  );
}
