# AI Trading System

## Setup Instructions

1. Install Python dependencies:
   `ash
   pip install -r requirements.txt
   `

2. Install Node.js dependencies:
   `ash
   cd frontend
   npm install
   `

3. Set up environment variables:
   - Copy .env.example to .env
   - Add your Alpha Vantage API key

4. Start the development servers:
   
   Backend:
   `ash
   python backend/src/main.py
   `

   Frontend:
   `ash
   cd frontend
   npm run dev
   `

## Project Structure

- /backend - Python backend
  - /src - Source code
  - /tests - Test files
  - /database - SQLite database

- /frontend - React frontend
  - /src - Source code
  - /public - Static files

## Available Scripts

- 
pm run dev - Start frontend development server
- 
pm run build - Build frontend for production
- python -m pytest - Run backend tests
