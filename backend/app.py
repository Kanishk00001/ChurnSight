from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle
import numpy as np
from sklearn.preprocessing import StandardScaler
import pandas as pd
flask_app = Flask(__name__)
CORS(flask_app)
model_credit=pickle.load(open('model_creditcard.pkl', 'rb'))
scaler_credit = pickle.load(open('scalercredit.pkl', 'rb'))
model_travel=pickle.load(open('model_travel.pkl', 'rb'))
scaler_travel = pickle.load(open('scalertravel.pkl', 'rb'))
model_retail=pickle.load(open('model_retail.pkl', 'rb'))
model_telecom=pickle.load(open('model_telecom.pkl', 'rb'))  
scaler_telecom = pickle.load(open('scalertelecom.pkl', 'rb'))

# Set pandas display options
pd.set_option('display.max_columns', None)  # Show all columns
pd.set_option('display.width', 1000)  # Increase the width of the display
pd.set_option('display.max_rows', None)

def binary_encoding(tempdf,column,positive_value):
  tempdf=tempdf.copy()
  tempdf[column]=tempdf[column].apply(lambda x:1 if x==positive_value else 0)
  return tempdf

def preprocess_income_category(inpt):
  income_map={"Less than $40K": 0,"$40K - $60K":1,"$60K - $80K":2,"$80K - $120K":3,"$120K +":4}

  inpt['Income_Category']=inpt['Income_Category'].apply(lambda x:income_map[x])
  return inpt
@flask_app.route('/api/creditcurn/predict', methods=['POST'])
def predict_credit():
    data = request.get_json(force=True)
    
    # Convert the received data to DataFrame
    df = pd.DataFrame([data])  # Notice the square brackets []
    # Convert all numeric columns to float or int
    numeric_columns = [
        'Customer_Age', 'Dependent_count', 'Months_on_book', 'Total_Relationship_Count',
        'Months_Inactive_12_mon', 'Contacts_Count_12_mon', 'Credit_Limit',
        'Total_Revolving_Bal', 'Avg_Open_To_Buy', 'Total_Amt_Chng_Q4_Q1',
        'Total_Trans_Amt', 'Total_Trans_Ct', 'Total_Ct_Chng_Q4_Q1',
        'Avg_Utilization_Ratio'
    ]
    for col in numeric_columns:
        df[col] = pd.to_numeric(df[col], errors='coerce')
    
    
    df=binary_encoding(df,'Gender','M')
    
    education_levels = [
    'College','Graduate', 'High School', 'Others', 'Uneducated']
    for level in education_levels:
        column_name = f"Education_Level_{level}"
        df[column_name] = 1 if data["Education_Level"] == level else 0
        
    # Drop original 'Education_Level' column
    df = df.drop(columns=["Education_Level"])
    
    marriage_status = ['Divorced', 'Married', 'Single']
    for status in marriage_status:
        column_name = f"Marital_Status_{status}"
        df[column_name] = 1 if data["Marital_Status"] == status else 0
    df = df.drop(columns=["Marital_Status"])
    
    df=preprocess_income_category(df)
    
    card_status = ['Blue', 'Gold', 'Platinum', 'Silver']
    for status in card_status:
        column_name = f"Card_Category_{status}"
        df[column_name] = 1 if data["Card_Category"] == status else 0
    df = df.drop(columns=["Card_Category"])
     
    df_scaled = scaler_credit.transform(df)  # Apply the scaling transformation

    # print(df_scaled)
    df_scaled = pd.DataFrame(df_scaled, columns=df.columns)

    # Make prediction with the model
    prediction = model_credit.predict(df_scaled)
    print("Prediction:", prediction)
    result = 'Churn' if prediction[0] == 1 else 'Not Churn'

    return jsonify({'prediction': result})

@flask_app.route('/api/travelcurn/predict', methods=['POST'])
def predict_travel():
    data = request.get_json(force=True)
    # print("Received data:", data)
    # Convert the received data to DataFrame
    df = pd.DataFrame([data])
    # Convert all numeric columns to float or int
    numeric_columns = [
        'Age','ServicesOpted']
    for col in numeric_columns:
        df[col] = pd.to_numeric(df[col], errors='coerce')
    df=binary_encoding(df,'FrequentFlyer','Yes')
    df=binary_encoding(df,'AccountSyncedToSocialMedia','Yes')
    df=binary_encoding(df,'BookedHotelOrNot','Yes')
    income_map={"Middle Income": 2,"Low Income":1,"High Income":0,}
    df['AnnualIncomeClass']=df['AnnualIncomeClass'].apply(lambda x:income_map[x])
    # print(df.info())
    # print(df.head())
    df_scaled =scaler_travel.transform(df)  # Apply the scaling transformation
    prediction =model_travel.predict(df_scaled)
    print("Prediction:", prediction)
    result = 'Churn' if prediction[0] == 1 else 'Not Churn'

    return jsonify({'prediction': result})

@flask_app.route('/api/retailcurn/predict', methods=['POST'])
def predict_reail():
    data = request.get_json(force=True)
    print("Received data:", data)
    df = pd.DataFrame([data])
    
    # Convert all numeric columns to float or int
    numeric_columns = ["Tenure","CityTier","WarehouseToHome","HourSpendOnApp","NumberOfDeviceRegistered","SatisfactionScore","NumberOfAddress","Complain","OrderAmountHikeFromlastYear","CouponUsed","OrderCount","DaySinceLastOrder","CashbackAmount"]
    
    for col in numeric_columns:
        df[col] = pd.to_numeric(df[col], errors='coerce')
        
    print("Processed DataFrame:\n", df.head())
    
    try:
        prediction = model_retail.predict(df)
        print("Prediction:", prediction)
        result = 'Churn' if prediction[0] == 1 else 'Not Churn'
    except Exception as e:
        print(f"Error during prediction: {e}")
        result = 'Error during prediction'
    
    return jsonify({'prediction': result})

@flask_app.route('/api/telecomcurn/predict', methods=['POST'])
def predict_telecom():
    data = request.get_json(force=True)
    df = pd.DataFrame([data])
    # Convert all numeric columns to float or int
    numeric_columns=['tenure','MonthlyCharges','TotalCharges']
    for col in numeric_columns:
        df[col] = pd.to_numeric(df[col], errors='coerce')
    
    
    expected_columns=['tenure',
 'MonthlyCharges',
 'TotalCharges',
 'gender_Male',
 'SeniorCitizen_Yes',
 'Partner_Yes',
 'Dependents_Yes',
 'PhoneService_Yes',
 'MultipleLines_No phone service',
 'MultipleLines_Yes',
 'InternetServiceTypes_Fiber optic',
 'InternetServiceTypes_No',
 'OnlineSecurity_No internet service',
 'OnlineSecurity_Yes',
 'OnlineBackup_No internet service',
 'OnlineBackup_Yes',
 'DeviceProtection_No internet service',
 'DeviceProtection_Yes',
 'TechSupport_No internet service',
 'TechSupport_Yes',
 'StreamingTV_No internet service',
 'StreamingTV_Yes',
 'StreamingMovies_No internet service',
 'StreamingMovies_Yes',
 'Contract_One year',
 'Contract_Two year',
 'PaperlessBilling_Yes',
 'PaymentMethod_Credit card (automatic)',
 'PaymentMethod_Electronic check',
 'PaymentMethod_Mailed check',
 'InternetService_Yes']
    
    # print(df.head())
    
    input_df_dummy = pd.get_dummies(df, dtype='int')

    input_df_dummy = input_df_dummy.reindex(columns=expected_columns, fill_value=0)

    scale_cols = ['tenure', 'MonthlyCharges', 'TotalCharges']
    input_df_dummy[scale_cols] = scaler_telecom.transform(input_df_dummy[scale_cols])
    # print(input_df_dummy.head())
    prediction = model_telecom.predict(input_df_dummy)
    print("Prediction:", prediction)
    result = 'Churn' if prediction[0] == 1 else 'Not Churn'
    return jsonify({'prediction': result})



if __name__ == '__main__':
    flask_app.run(debug=True)