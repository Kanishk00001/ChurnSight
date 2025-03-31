import React, { useState } from 'react'

function Credit() {
  const [formData,setFormData] =useState({
    Customer_Age:"",
    Gender:"M",
    Dependent_count:"",
    Education_Level:"High School",
    Marital_Status:"Married",
    Income_Category:"Less than $40K",
    Card_Category:"Blue",
    Months_on_book:"",
    Total_Relationship_Count:"",
    Months_Inactive_12_mon:"",
    Contacts_Count_12_mon:"",
    Credit_Limit:"",
    Total_Revolving_Bal:"",
    Avg_Open_To_Buy:"",
    Total_Amt_Chng_Q4_Q1:"",
    Total_Trans_Amt:"",
    Total_Trans_Ct:"",
    Total_Ct_Chng_Q4_Q1:"",
    Avg_Utilization_Ratio:"",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center py-10 px-6">
      <div className="bg-white  shadow-lg rounded-lg p-8 max-w-4xl w-full">
        
        {/* Title */}
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">
          Credit Card Churn Prediction Form
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Fields */}
          <div>
            <label className="text-gray-800 text-xl p-3">Customer Age</label>
            <input type="number" name="Customer_Age" onChange={handleChange}  className="input-field bg-gray-100 p-3 mt-1" placeholder="Enter Customer Age" 
            required/>
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Gender</label>
            <select name="Gender" onChange={handleChange} className="input-field mt-1 bg-gray-100 p-3" required>
              <option>M</option>
              <option>F</option>
            </select>
          </div>
          <div>
            <label className="text-gray-800 text-xl p-3">Dependent Count</label>
            <input name='Dependent_count' onChange={handleChange} required type="number" className="input-field bg-gray-100 p-3 mt-1" placeholder="Enter Dependent Count" />
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Education Level</label>
            <select name="Education_Level" onChange={handleChange} className="input-field bg-gray-100 p-3 mt-1">
              <option>High School</option>
              <option>Graduate</option>
              <option>Uneducated</option>
              <option>College</option>
              <option>Post-Graduate</option>
              <option>Doctorate</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700 text-xl p-3">Marital Status</label>
            <select name="Marital_Status" onChange={handleChange} className="input-field bg-gray-100 p-3 mt-1">
              <option>Married</option>
              <option>Single</option>
              <option>Divorced</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700 text-xl p-3">Income Category</label>
            <select name="Income_Category" onChange={handleChange} className="input-field bg-gray-100 p-3 mt-1">
              <option>Less than $40K</option>
              <option>$40K - $60K</option>
              <option>$80K - $120K</option>
              <option>$60K - $80K</option>
              <option>$120K +</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Card Category</label>
            <select name="Card_Category" onChange={handleChange} className="input-field bg-gray-100 p-3 mt-1">
              <option>Blue</option>
              <option>Silver</option>
              <option>Gold</option>
              <option>Platinum</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Months On Book</label>
            <input required name="Months_on_book" onChange={handleChange} type="number" className="input-field p-3 bg-gray-100 mt-1" placeholder="Enter MOB" />
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Total Relationship Count</label>
            <input required name="Total_Relationship_Count" onChange={handleChange} type="number" className="input-field p-3 bg-gray-100 mt-1" placeholder="Enter Relationship Count" />
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Months Inactive in one Year</label>
            <input required name="Months_Inactive_12_mon" onChange={handleChange}  type="number" className="input-field p-3 bg-gray-100 mt-1" placeholder="Enter No. of months" />
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Number of time contacted in a Year</label>
            <input required name="Contacts_Count_12_mon" onChange={handleChange} type="number" className="input-field p-3 bg-gray-100 mt-1" placeholder="Enter No. of Times" />
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Credit Card Limit</label>
            <input required name="Credit_Limit" type="number" onChange={handleChange} className="input-field p-3 bg-gray-100 mt-1" placeholder="Enter Credit Limit" />
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Total Revolving Balance</label>
            <input required name="Total_Revolving_Bal" type="number" onChange={handleChange} className="input-field p-3 bg-gray-100 mt-1" placeholder="Enter TRB" />
          </div>
          
          <div>
            <label className="text-gray-700 text-xl p-3">Average Open To Buy</label>
            <input required name="Avg_Open_To_Buy" type="number" onChange={handleChange} className="input-field p-3 bg-gray-100 mt-1" placeholder="Enter Average Amt" />
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Total Amt Change from Q4 to Q1</label>
            <input required name="Total_Amt_Chng_Q4_Q1" type="number" onChange={handleChange} className="input-field p-3 bg-gray-100 mt-1" placeholder="Enter  in percentage" />
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Total Transaction Amount</label>
            <input required name="Total_Trans_Amt" type="number" onChange={handleChange} className="input-field p-3 bg-gray-100 mt-1" placeholder="Enter Transaction Amt" />
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Total Transaction CT</label>
            <input required name="Total_Trans_Ct" type="number" onChange={handleChange} className="input-field p-3 bg-gray-100 mt-1" placeholder="Enter Transaction CT" />
          </div>

          <div>
            <label className="text-gray-700 text-xl p-3">Total CT change from Q4 to Q1</label>
            <input required name="Total_Ct_Chng_Q4_Q1" type="number" onChange={handleChange} className="input-field p-3 bg-gray-100 mt-1" placeholder="Enter in percentage" />
          </div>
          
          <div>
            <label className="text-gray-700 text-xl p-3">Average Utilization Ratio</label>
            <input required name="Avg_Utilization_Ratio" type="number" onChange={handleChange} className="input-field p-3 bg-gray-100 mt-1" placeholder="Enter the Ratio" />
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
  )
}

export default Credit
