import React, { useState } from "react";
import axios from "axios";
function Retail() {
  const [retailFormdata, setretailFormdata] = useState({
    Tenure: "",
    PreferredLoginDevice: "Mobile Phone",
    CityTier: "1",
    WarehouseToHome: "",
    PreferredPaymentMode: "Debit Card",
    Gender: "Male",
    HourSpendOnApp: "",
    NumberOfDeviceRegistered: "",
    PreferedOrderCat: "Laptop & Accessory",
    SatisfactionScore: "",
    MaritalStatus: "Single",
    NumberOfAddress: "",
    Complain: "0",
    OrderAmountHikeFromlastYear: "",
    CouponUsed: "",
    OrderCount: "",
    DaySinceLastOrder: "",
    CashbackAmount: "",
  });

  const handleChange = (e) => {
    setretailFormdata({ ...retailFormdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(retailFormdata);
    try {
      const response = await axios.post('http://localhost:5000/api/retailcurn/predict', retailFormdata);
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
          Ecommerce Customer Churn Prediction Form
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Fields */}
          <div>
            <label className="text-gray-800 text-xl p-3">Customer Tenure</label>
            <input
              type="number"
              name="Tenure"
              onChange={handleChange}
              className="input-field bg-gray-100 p-3 mt-1"
              placeholder="Enter Customer Tenure"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">
              Prefered Login Device
            </label>
            <select
              name="PreferredLoginDevice"
              onChange={handleChange}
              className="input-field mt-1 bg-gray-100 p-3"
              required
            >
              <option>Mobile Phone</option>
              <option>Phone</option>
              <option>Computer</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700 text-xl p-3">
              City Tier
            </label>
            <select
              name="CityTier"
              onChange={handleChange}
              className="input-field mt-1 bg-gray-100 p-3"
              required
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              
            </select>
            </div>

          <div>
            <label className="text-gray-700 text-xl p-3">
              Warehouse To Home
            </label>
            <input
              required
              name="WarehouseToHome"
              onChange={handleChange}
              type="number"
              className="input-field p-3 bg-gray-100 mt-1"
              placeholder="Enter Warehouse To Home ratio"
            />
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">
              Prefered Payment Mode
            </label>
            <select
              name="PreferredPaymentMode"
              onChange={handleChange}
              className="input-field mt-1 bg-gray-100 p-3"
              required
            >
              <option>Debit Card</option>
              <option>UPI</option>
              <option>CC</option>
              <option>Cash on Delivery</option>
              <option>E wallet</option>
              <option>COD</option>
              <option>Credit Card</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Gender</label>
            <select
              name="Gender"
              onChange={handleChange}
              className="input-field mt-1 bg-gray-100 p-3"
              required
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">
              Hours Spend On App
            </label>
            <input
              required
              name="HourSpendOnApp"
              onChange={handleChange}
              type="number"
              className="input-field p-3 bg-gray-100 mt-1"
              placeholder="Enter the hours"
            />
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">
              Total Number Of Device
            </label>
            <input
              required
              name="NumberOfDeviceRegistered"
              onChange={handleChange}
              type="number"
              className="input-field p-3 bg-gray-100 mt-1"
              placeholder="Enter No. of Device"
            />
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">
              Prefered order Categories
            </label>
            <select
              name="PreferedOrderCat"
              onChange={handleChange}
              className="input-field mt-1 bg-gray-100 p-3"
              required
            >
              <option>Laptop & Accessory </option>
              <option>Mobile</option>
              <option>Mobile Phone</option>
              <option>Others</option>
              <option>Fashion</option>
              <option>Grocery</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">
              Satisfaction Score
            </label>
            <input
              required
              name="SatisfactionScore"
              type="number"
              onChange={handleChange}
              className="input-field p-3 bg-gray-100 mt-1"
              placeholder="Enter the Score"
            />
          </div>
          <div>
            <label className="text-gray-700 text-xl p-3">MArital Status</label>
            <select
              name="MaritalStatus"
              onChange={handleChange}
              className="input-field mt-1 bg-gray-100 p-3"
              required
            >
              <option>Single</option>
              <option>Divorced</option>
              <option>Married</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700 text-xl p-3">
              Number Of Address
            </label>
            <input
              required
              name="NumberOfAddress"
              type="number"
              onChange={handleChange}
              className="input-field p-3 bg-gray-100 mt-1"
              placeholder="Enter the NumberOfAddress"
            />
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Complain:</label>
            <select
              name="Complain"
              onChange={handleChange}
              className="input-field mt-1 bg-gray-100 p-3"
              required
            >
              <option>0</option>
              <option>1</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">
            Order Amount Hike From lastYear
            </label>
            <input
              required
              name="OrderAmountHikeFromlastYear"
              type="number"
              onChange={handleChange}
              className="input-field p-3 bg-gray-100 mt-1"
              placeholder="Enter the amount"
            />
          </div>
          <div>
            <label className="text-gray-700 text-xl p-3">
              Coupon Used
            </label>
            <input
              required
              name="CouponUsed"
              type="number"
              onChange={handleChange}
              className="input-field p-3 bg-gray-100 mt-1"
              placeholder="Enter the no of coupons used"
            />
          </div>
          <div>
            <label className="text-gray-700 text-xl p-3">
              order Count
            </label>
            <input
              required
              name="OrderCount"
              type="number"
              onChange={handleChange}
              className="input-field p-3 bg-gray-100 mt-1"
              placeholder="Enter the order count"
            />
          </div>
          <div>
            <label className="text-gray-700 text-xl p-3">
              Day Since Last Order
            </label>
            <input
              required
              name="DaySinceLastOrder"
              type="number"
              onChange={handleChange}
              className="input-field p-3 bg-gray-100 mt-1"
              placeholder="Enter the days"
            />
          </div>
          <div>
            <label className="text-gray-700 text-xl p-3">
              Cashback Amount
            </label>
            <input
              required
              name="CashbackAmount"
              type="text"
              onChange={handleChange}
              className="input-field p-3 bg-gray-100 mt-1"
              placeholder="Enter the amount"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Retail;
