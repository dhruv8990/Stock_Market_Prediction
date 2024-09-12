# Stock Market Prediction Using HMM and LSTM

This project predicts stock prices using a combination of a Hidden Markov Model (HMM) and a Long Short-Term Memory (LSTM) neural network. A web interface created with HTML, CSS, and JavaScript is included to visualize the predicted stock prices.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Results](#results)
- [Acknowledgments](#acknowledgments)

## Overview
This project uses historical stock data to predict future stock prices by combining two models:
- **Hidden Markov Model (HMM)**: Captures hidden states in stock market behavior.
- **LSTM Neural Network**: Predicts future prices based on historical patterns.
  
A web interface allows users to view predicted stock prices in an easy-to-navigate format.

## Features
- **Historical Data Download**: Fetches stock market data using the Yahoo Finance API.
- **Feature Engineering**: Calculates financial metrics such as:
  - Open-Close difference
  - High-Low difference
  - Daily returns
  - Log returns
- **HMM**: Models the hidden states underlying stock market trends.
- **LSTM**: Predicts future prices using time-series data.
- **Web Interface**: Visualizes predicted stock prices on a webpage.

## Prerequisites
- Python 3.x
- Required libraries:
  - `numpy`
  - `pandas`
  - `yfinance`
  - `hmmlearn`
  - `scikit-learn`
  - `tensorflow`
  - `matplotlib`

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/stock-prediction-hmm-lstm.git
    cd stock-prediction-hmm-lstm
    ```

2. Install the required packages:
    ```bash
    pip install -r requirements.txt
    ```

3. Run the prediction script:
    ```bash
    python stock_prediction.py
    ```

4. Open the `index.html` file in your web browser to visualize the predicted stock prices.

## Usage

1. **Data Fetching**: The script downloads historical stock data from Yahoo Finance based on user-defined ticker, start date, and end date.
   
2. **Feature Engineering**: It calculates financial metrics and trains an HMM to understand market behavior.
   
3. **Model Training**: The LSTM model is trained on the processed stock data to make predictions.

4. **Prediction**: The model predicts future stock prices, which are output for further use or displayed via the web interface.
   
5. **Visualization**: The results are displayed through the web page using HTML, CSS, and JavaScript, enabling easy interpretation of the prediction.

## Results

The script outputs the predicted stock prices and visualizes them alongside actual prices in the web interface. The model's performance can be monitored through this interactive view.

## Acknowledgments
- **Yahoo Finance API** for providing historical stock data.
- **TensorFlow** for LSTM model implementation.
- **Matplotlib** for plotting stock price trends.

