import React from "react";
import about from "../assets/about.jpg";
import about2 from "../assets/about2.jpg";

export default function About() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-gray-700 md:px-12 xl:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Image Section */}
          <div className="w-full">
            <img
              src={about}
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Building Churn Prediction Model
            </h2>
            <p className="mt-6 text-lg leading-relaxed">
              Growing a business requires both acquiring new customers and
              preventing churn. While we focus on getting new leads, it’s
              equally essential to retain existing ones.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              At{" "}
              <span className="font-semibold text-indigo-600">ChurnSite</span>,
              we help businesses reduce customer churn using <b>AI-powered
              predictive analytics.</b> Our platform identifies at-risk customers,
              analyzes engagement patterns, and offers actionable retention
              strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="container mx-auto mt-16 px-6 text-gray-700 md:px-12 xl:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Image Section */}
          <div className="w-full">
            <img
              src={about2}
              alt="Features"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Features Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              What We Offer
            </h2>
            <ul className="mt-6 space-y-4 text-lg leading-relaxed">
              <li className="flex items-center">
                ✅{" "}
                <span className="ml-3">
                  Advanced Churn Prediction with AI-driven insights.
                </span>
              </li>
              <li className="flex items-center">
                ✅{" "}
                <span className="ml-3">
                  Real-Time Dashboards to monitor customer engagement.
                </span>
              </li>
              <li className="flex items-center">
                ✅{" "}
                <span className="ml-3">
                  Seamless Integration with CRM & Business tools.
                </span>
              </li>
              <li className="flex items-center">
                ✅{" "}
                <span className="ml-3">
                  Customizable Reports & Automated Alerts.
                </span>
              </li>
            </ul>
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl mt-10">
              Why Choose Us?
            </h2>
            <ul className="mt-6 space-y-4 text-lg leading-relaxed">
              <li className="flex items-center">
                🔹{" "}
                <span className="ml-3">
                  Accuracy & Efficiency: We utilize state-of-the-art machine
                  learning models to ensure high prediction accuracy
                </span>
              </li>
              <li className="flex items-center">
                🔹{" "}
                <span className="ml-3">
                  User-Friendly Interface: No need for complex technical
                  knowledge—our intuitive UI makes it easy to interpret
                  insights.
                </span>
              </li>
              <li className="flex items-center">
                🔹{" "}
                <span className="ml-3">
                  {" "}
                  Customer-Centric Approach: We believe that retaining customers
                  should be as important as acquiring new ones.
                </span>
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed">
              At{" "}
              <span className="font-semibold text-indigo-600">ChurnSite</span>,
              we strive to empower businesses with data-driven retention
              strategies, helping them maximize customer loyalty and long-term
              growth. Whether you’re a small startup or a large enterprise, our
              churn prediction platform gives you the tools you need to stay
              ahead of customer attrition and drive success. 📩 Let’s work
              together to reduce churn and build stronger customer
              relationships! Contact us today to learn more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
