import React from "react";
import { useState } from "react";
import axios from 'axios';
function Telecom() {
  const [Telecomformdata,setTelecomformdata] =useState({
    gender:"Male",
    SeniorCitizen:"Yes",
    Partner:"Yes",
    Dependents:"Yes",
    tenure:"",
    PhoneService:"Yes",
    MultipleLines:"Yes",
    InternetServiceTypes:"No",
    
    OnlineSecurity:"Yes",
    OnlineBackup:"Yes",
    DeviceProtection:"Yes",
    TechSupport:"Yes",
    StreamingTV:"Yes",
    StreamingMovies:"Yes",
    Contract:"One year",
    PaperlessBilling:"Yes",
    PaymentMethod:"Electronic check",
    MonthlyCharges:"",
    TotalCharges:"",
    InternetService:"Yes"
    })

    const handleChange = (e) => {
      setTelecomformdata({ ...Telecomformdata, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(Telecomformdata);
      try {
        const response = await axios.post('http://localhost:5000/api/telecomcurn/predict', Telecomformdata);
        console.log('Prediction:', response.data);
        alert(`Prediction Result: ${response.data.prediction}`);  // you can show result nicely on page too
      } catch (error) {
        console.error('Error sending data:', error);
        alert('Error in prediction');
      }
    };
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center py-10 px-6">
      <div className="bg-white  shadow-lg rounded-lg p-8 max-w-4xl w-full">
        
        {/* Title */}
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">
          Telecom Churn Prediction Form
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Fields */}
          <div>
            <label className="text-gray-700 text-xl p-3">Gender</label>
            <select name="gender" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700 text-xl p-3">Senior Citizen</label>
            <select name="SeniorCitizen" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          
          <div>
            <label className="text-gray-700 text-xl p-3">Senior Citizen</label>
            <select name="SeniorCitizen" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          

          <div>
            <label className="text-gray-700 text-xl p-3">Partner</label>
            <select name="Partner" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Dependents</label>
            <select name="Dependents" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Tenure:</label>
            <input required name="tenure" onChange={handleChange} type="number" className="input-field p-3 bg-gray-100 mt-1" placeholder="Enter the tenure" />
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Phone Service</label>
            <select name="PhoneService" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Multiple Lines</label>
            <select name="MultipleLines" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>Yes</option>
              <option>No</option>
              <option>No phone service</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Internet Service</label>
            <select name="InternetService" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Internet Service Types</label>
            <select name="InternetServiceTypes" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>No</option>
              <option>DSL</option>
              <option>Fiber optic</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700 text-xl p-3">Online Security</label>
            <select name="OnlineSecurity" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>Yes</option>
              <option>No</option>
              <option>No internet service</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700 text-xl p-3">Online Backup</label>
            <select name="OnlineBackup" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>Yes</option>
              <option>No</option>
              <option>No internet service</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700 text-xl p-3">Device protection:</label>
            <select name="DeviceProtection" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>Yes</option>
              <option>No</option>
              <option>No internet service</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700 text-xl p-3">Tech Support</label>
            <select name="TechSupport" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>Yes</option>
              <option>No</option>
              <option>No internet service</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700 text-xl p-3">Streaming tv</label>
            <select name="StreamingTV" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>Yes</option>
              <option>No</option>
              <option>No internet service</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700 text-xl p-3">Streaming Movies</label>
            <select name="StreamingMovies" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>Yes</option>
              <option>No</option>
              <option>No internet service</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700 text-xl p-3">Contract</label>
            <select name="Contract" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>One year</option>
              <option>Two year</option>
              <option>Month-to-month</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700 text-xl p-3">Paperless Billing</label>
            <select name="PaperlessBilling" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Payment Method</label>
            <select name="PaymentMethod" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>Electronic check</option>
              <option>Mailed check</option>
              <option>Credit card (automatic)</option>
              <option>Bank transfer (automatic)</option>
            </select>
          </div>

          
          <div>
            <label className="text-gray-700 text-xl p-3">Monthly Charges</label>
            <input required name="MonthlyCharges" onChange={handleChange}  type="text" className="input-field p-3 bg-gray-100 mt-1" placeholder="Enter the amount" />
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Total Charges:</label>
            <input required name="TotalCharges" onChange={handleChange} type="text" className="input-field p-3 bg-gray-100 mt-1" placeholder="Enter the amount" />
          </div>
          

          

     
          
         
          {/* Submit Button */}
          <div className="col-span-2 flex justify-center">
            <button type="submit" className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
              Submit
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

export default Telecom;
