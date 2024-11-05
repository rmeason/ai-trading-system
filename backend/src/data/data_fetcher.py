import yfinance as yf
from alpha_vantage.timeseries import TimeSeries
import pandas as pd
from datetime import datetime
import sqlite3
import os
from dotenv import load_dotenv

load_dotenv()

class DataFetcher:
    def __init__(self):
        self.av_api_key = os.getenv('ALPHA_VANTAGE_API_KEY')
        self.db_path = os.getenv('DATABASE_URL').replace('sqlite:///', '')
        self.ts = TimeSeries(key=self.av_api_key)

    def fetch_yahoo_data(self, symbol, period="1mo"):
        try:
            ticker = yf.Ticker(symbol)
            data = ticker.history(period=period)
            return self._process_market_data(data, symbol)
        except Exception as e:
            print(f"Error fetching Yahoo Finance data: {e}")
            return None

    def fetch_alpha_vantage_data(self, symbol):
        try:
            data, _ = self.ts.get_daily(symbol=symbol)
            df = pd.DataFrame.from_dict(data, orient='index')
            return self._process_market_data(df, symbol)
        except Exception as e:
            print(f"Error fetching Alpha Vantage data: {e}")
            return None

    def _process_market_data(self, df, symbol):
        df.reset_index(inplace=True)
        df['symbol'] = symbol
        return df

    def save_to_db(self, df):
        with sqlite3.connect(self.db_path) as conn:
            df.to_sql('market_data', conn, if_exists='append', index=False)
