# ChurnSight
# 🔍 ChurnSight

**AI-Powered Customer Churn Prediction Platform**

ChurnSight is a comprehensive web application that helps businesses predict customer churn across multiple industries using advanced machine learning models. Get actionable insights to retain your customers and reduce attrition rates.

![ChurnSight Demo](https://img.shields.io/badge/Demo-Live-green) ![License](https://img.shields.io/badge/License-MIT-blue) ![Python](https://img.shields.io/badge/Python-3.8+-yellow) ![React](https://img.shields.io/badge/React-18+-blue)

## 🚀 Features

- **Multi-Industry Support**: Specialized models for Telecom, Credit Card, Tour & Travel, and Online Retail industries
- **Real-time Predictions**: Get instant churn probability scores for individual customers
- **Interactive Dashboard**: Clean, responsive React-based interface for easy data input and visualization
- **RESTful API**: Flask-powered backend with comprehensive API endpoints
- **Data Validation**: Built-in validation for all input parameters
- **Export Capabilities**: Download prediction results and reports
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🏗️ Architecture

```
ChurnSight/
├── frontend/          # React.js application
├── backend/           # Flask API server
├── models/           # Pre-trained ML models
├── data/             # Sample datasets
└── docs/             # Documentation
```

**Tech Stack:**
- **Frontend**: React.js, Axios, CSS3, HTML5
- **Backend**: Flask, Python, scikit-learn, pandas, numpy
- **Machine Learning**: Random Forest, Gradient Boosting, Logistic Regression
- **Data Processing**: pandas, numpy, scikit-learn

## 🎯 Supported Industries

### 🔌 Telecom
Predict customer churn based on:
- Usage patterns, billing history, service calls, contract type, demographics

### 💳 Credit Card
Identify at-risk customers using:
- Transaction history, credit utilization, payment patterns, account age

### ✈️ Tour & Travel
Forecast customer retention with:
- Booking frequency, seasonal patterns, service preferences, loyalty points

### 🛒 Online Retail
Predict churn probability from:
- Purchase history, browsing behavior, cart abandonment, seasonal trends

## 🚀 Quick Start

### Prerequisites
- Python 3.8 or higher
- Node.js 14 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kanishk00001/ChurnSight.git
   cd ChurnSight
   ```

2. **Set up the backend**
   ```bash
   cd backend
   pip install -r requirements.txt
   python app.py
   ```

3. **Set up the frontend**
   ```bash
   cd frontend
   npm install
   npm start
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📊 Usage

### Web Interface
1. Select your industry from the dropdown menu
2. Input customer data in the provided form
3. Click "Predict Churn" to get results
4. View probability score and risk assessment
5. Export results for further analysis

### API Usage
```python
import requests

# Example prediction request
data = {
    "industry": "telecom",
    "customer_data": {
        "tenure": 24,
        "monthly_charges": 85.50,
        "total_charges": 2050.00,
        "contract": "Month-to-month",
        # ... other features
    }
}

response = requests.post("http://localhost:5000/api/predict", json=data)
result = response.json()
print(f"Churn Probability: {result['churn_probability']:.2%}")
```

## 🔧 API Reference

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/predict` | Get churn prediction |
| GET | `/api/features/{industry}` | Get required features for industry |
| POST | `/api/batch-predict` | Bulk predictions |

### Example Response
```json
{
  "churn_probability": 0.75,
  "risk_level": "High",
  "confidence": 0.89,
  "key_factors": [
    "High monthly charges",
    "Short tenure",
    "Month-to-month contract"
  ],
  "recommendations": [
    "Offer loyalty discount",
    "Upgrade to annual contract",
    "Provide customer support outreach"
  ]
}
```

## 🧠 Machine Learning Models

ChurnSight employs industry-specific models optimized for each sector:

- **Algorithm Selection**: Random Forest, Gradient Boosting, and Logistic Regression
- **Model Performance**: 85-92% accuracy across different industries
- **Feature Engineering**: Domain-specific feature extraction and selection
- **Cross-Validation**: 5-fold cross-validation for model reliability

### Model Metrics
| Industry | Accuracy | Precision | Recall | F1-Score |
|----------|----------|-----------|---------|----------|
| Telecom | 89.2% | 0.87 | 0.85 | 0.86 |
| Credit Card | 91.5% | 0.89 | 0.88 | 0.89 |
| Travel | 87.8% | 0.85 | 0.84 | 0.85 |
| Retail | 88.6% | 0.86 | 0.87 | 0.87 |

## 📈 Project Structure

```
ChurnSight/
├── backend/
│   ├── app.py              # Main Flask application
│   ├── models/             # ML model files
│   ├── utils/              # Helper functions
│   ├── routes/             # API route handlers
│   └── requirements.txt    # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   └── styles/         # CSS files
│   ├── public/             # Static assets
│   └── package.json        # Node dependencies
├── data/
│   ├── sample_data/        # Sample datasets
│   └── processed/          # Cleaned datasets
├── notebooks/              # Jupyter notebooks for analysis
├── tests/                  # Test files
└── README.md              # This file
```

## 🧪 Testing

Run the test suite:

```bash
# Backend tests
cd backend
python -m pytest tests/

# Frontend tests
cd frontend
npm test
```


### Manual Deployment
1. Configure environment variables
2. Set up production database
3. Deploy backend to your preferred platform (Heroku, AWS, etc.)
4. Build and deploy frontend to static hosting (Netlify, Vercel)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow PEP 8 for Python code
- Use ESLint for JavaScript code
- Write tests for new features
- Update documentation as needed

## 👥 Authors

- **Kanishk** - *Initial work* - [@Kanishk00001](https://github.com/Kanishk00001)
- **Harsh**  - *developed mdels for churn predictions and web app* - [@HarshAgrawal7672](https://github.com/HarshAgrawal7672)

## 🙏 Acknowledgments

- Thanks to the open-source ML community
- Inspired by industry best practices in churn prediction
- Special thanks to contributors and testers

## 📞 Support

- 📧 Email: [agrawalkanishk086@gmail.com]
- 🐛 Issues: [GitHub Issues](https://github.com/Kanishk00001/ChurnSight/issues)

## 🔮 Roadmap

- [ ] Add more industry verticals
- [ ] Implement real-time model retraining
- [ ] Add advanced visualization dashboard
- [ ] Integrate with popular CRM systems
- [ ] Mobile app development
- [ ] Advanced explanation AI features

---

⭐ **Star this repository if you find it helpful!**

Made with ❤️ for businesses looking to reduce customer churn
