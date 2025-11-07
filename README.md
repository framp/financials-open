[<img width="2146" height="1762" alt="CleanShot 2025-11-07 at 11 49 13@2x" src="https://github.com/user-attachments/assets/bad8d166-a98f-4d6f-a438-69c9abd6e3e5" />](https://framp.me/financials-open/)

[Demo](https://framp.me/financials-open/)

# Financial Dashboard

A web-based financial dashboard that allows users to visualize and manipulate financial data through interactive formulas and sliders.

## Features

- Dynamic formula evaluation with variable substitution
- Interactive sliders for adjusting financial parameters
- Support for multiple currencies (EUR, USD, GBP, RUB)
- Automatic formatting of monetary values
- Real-time recalculation of all dependent values
- Responsive design using Tailwind CSS

## Usage

## Setup

1. Generate up-to-date forex data by running:
   ```
   bun update-forex.js
   ```
2. Define your financial data in `financials.js`
3. Open `index.html` in a browser to view and interact with your financial dashboard

## Structure

- `index.html` - Main dashboard interface
- `financials.js` - Financial data and settings
- `forex.js` - Currency exchange rate data
