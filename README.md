# Stock_Market_Prediction
Overview
This project predicts stock prices using a combination of a Hidden Markov Model (HMM) and a Long Short-Term Memory (LSTM) neural network. The project also includes a web interface created with HTML, CSS, and JavaScript to visualize the predicted stock prices.

Features
Historical Data Download: Fetches historical stock data using the Yahoo Finance API.
Feature Engineering: Computes key financial features such as Open-Close difference, High-Low difference, daily returns, and log returns.
Hidden Markov Model: Trains an HMM to model the hidden states of stock market behavior.
LSTM Neural Network: Uses an LSTM model to predict future stock prices based on historical data.
Web Interface: Visualizes the predicted stock prices using a user-friendly web page.
Prerequisites
Python 3.x
numpy
pandas
yfinance
hmmlearn
scikit-learn
tensorflow
matplotlib
Installation
1. Clone the repository:

git clone https://github.com/yourusername/stock-prediction-hmm-lstm.git cd stock-prediction-hmm-lstm

2. Install the required Python packages:

pip install -r requirements.txt

3. Run the Python script:

python stock_prediction.py

Open the index.html file in your web browser to view the predicted stock prices.
Usage
Data Fetching: The script downloads historical stock data from Yahoo Finance for the specified ticker, start date, and end date.

Feature Engineering: The script computes features and trains an HMM on the historical data.

Model Training: The LSTM model is trained on the scaled stock price data to predict future prices.

Prediction: The model predicts future stock prices, which are then visualized using the provided web interface.

Visualization: The predicted prices can be viewed in the browser using the HTML, CSS, and JavaScript files.

Results
The script outputs the predicted stock prices and visualizes them in comparison to the actual prices. The results are displayed in the web interface.

Acknowledgments
Yahoo Finance API
TensorFlow
Matplotlib
