import React from "react";
import { useState } from "react";

function Travel() {
  const [travelformdata, setTravelformdata] = useState({
    Age: "",
    FrequentFlyer: "Yes",
    AnnualIncomeClass: "Middle Income",
    ServicesOpted: "1",
    AccountSyncedToSocialMedia: "Yes",
    BookedHotelOrNot: "Yes",
  });

  const handleChange = (e) => {
    setTravelformdata({ ...travelformdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(travelformdata);
  };
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center py-10 px-6">
      <div className="bg-white  shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">
          Travel Churn Prediction Form
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Fields */}
          <div>
            <label className="text-gray-800 text-xl p-3">Customer Age</label>
            <input
              type="number"
              name="Age"
              onChange={handleChange}
              className="input-field bg-gray-100 p-3 mt-1"
              placeholder="Enter Customer Age"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">
              Freqent Flyer
            </label>
            <select
              name="FrequentFlyer"
              onChange={handleChange}
              className="input-field mt-1 bg-gray-100 p-3"
              required
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>  
          <div>
            <label className="text-gray-700 text-xl p-3">
              Annual Income Class
            </label>
            <select
              name="AnnualIncomeClass"
              onChange={handleChange}
              className="input-field mt-1 bg-gray-100 p-3"
              required
            >
              <option>Middle Income	</option>
              <option>Low Income</option>
              <option>High Income</option>
            </select>
          </div>  
          <div>
            <label className="text-gray-700 text-xl p-3">
              Service Opted
            </label>
            <select
              name="ServicesOpted"
              onChange={handleChange}
              className="input-field mt-1 bg-gray-100 p-3"
              required
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </div>  
          <div>
            <label className="text-gray-700 text-xl p-3">
              Account Synced To Social Media
            </label>
            <select
              name="AccountSyncedToSocialMedia"
              onChange={handleChange}
              className="input-field mt-1 bg-gray-100 p-3"
              required
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>  
          <div>
            <label className="text-gray-700 text-xl p-3">
              Booked Hotel or Not
            </label>
            <select
              name="BookedHotelOrNot"
              onChange={handleChange}
              className="input-field mt-1 bg-gray-100 p-3"
              required
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>  


        </form>
      </div>
    </section>
  );
}

export default Travel;
