# test_fetch.py
import yfinance as yf
import pandas as pd

def fetch_test_data():
    # Fetch AAPL data as a test
    ticker = yf.Ticker("AAPL")
    hist = ticker.history(period="1mo")
    print("Data fetched successfully:")
    print(hist.head())
    return hist

if __name__ == "__main__":
    fetch_test_data()