import React from "react";
import about from "../assets/about.jpg";
import about2 from "../assets/about2.jpg";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:7/12 lg:w-6/12">
            <img src={about} alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-5xl text-gray-900 font-bold md:text-4xl">
              Building Churn Prediction Model
            </h2>
            <p className="mt-6 text-gray-600">
              Growing a business involves a strategy of both acquiring new
              customers and preventing existing ones from churning. So, just as
              much as we invest in acquiring the right leads and converting
              them, we need to invest the same, or sometimes even more, in
              retaining our existing customers.
            </p>
            <p className="mt-4 text-gray-600">
              At ChurnSite, we are passionate about helping businesses retain
              their most valuable asset—their customers. In today’s fast-paced
              digital world, customer churn is a major challenge for businesses
              across industries. Losing customers not only affects revenue but
              also increases the cost of acquiring new ones. That’s where we
              come in. Our platform is built with cutting-edge machine learning
              and predictive analytics to help businesses identify at-risk
              customers before they leave. By analyzing customer behavior,
              engagement patterns, and key business metrics, we provide
              actionable insights that enable companies to take proactive
              measures to improve customer retention.
            </p>
          </div>
        </div>
      </div>
      <div className="container m-auto mt-10 px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:7/12 lg:w-6/12">
            <img src={about2} alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-5xl text-gray-900 font-bold md:text-4xl">
              What We Offer{" "}
            </h2>
            <p className="mt-6 text-gray-600">
              ✅ Advanced Churn Prediction: Our AI-powered models analyze
              customer data to detect early signs of churn and predict potential
              risks.
              <br />
              ✅ Real-Time Insights & Dashboards: Access intuitive dashboards
              that visualize trends, customer behaviors, and risk scores.
              <br />
              ✅ Data-Driven Retention Strategies: Get personalized
              recommendations to improve engagement and reduce churn.
              <br />
              ✅ Seamless Integration: Our solution integrates effortlessly with
              your existing CRM and business systems.
              <br />✅ Customizable Alerts & Reports: Stay informed with
              automated alerts and detailed reports tailored to your business
              needs.
            </p>
            <h2 className="text-5xl text-gray-900 font-bold md:text-4xl mt-10">
              Why Choose Us?{" "}
            </h2>
            <p className="mt-6 text-gray-600">
              🔹 Accuracy & Efficiency: We utilize state-of-the-art machine
              learning models to ensure high prediction accuracy.
              <br />
              🔹 User-Friendly Interface: No need for complex technical
              knowledge—our intuitive UI makes it easy to interpret insights.
              <br />
              🔹 Customer-Centric Approach: We believe that retaining customers
              should be as important as acquiring new ones.
              <br />
            </p>
            <p className="mt-4 text-gray-600">
              At ChurnSite, we strive to empower businesses with
              data-driven retention strategies, helping them maximize customer
              loyalty and long-term growth. Whether you’re a small startup or a
              large enterprise, our churn prediction platform gives you the
              tools you need to stay ahead of customer attrition and drive
              success. 📩 Let’s work together to reduce churn and build stronger
              customer relationships! Contact us today to learn more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
