# Product Filter (Static Web App)

A clean, responsive product listing with interactive filtering by category and instant search results. This project is built using plain **HTML**, **CSS**, and **JavaScript** with **Bootstrap 5** UI components.

## 🚀 Project Overview

- UI: index.html, style.css
- Filter logic: script.js
- Features: search by product title, category filter, live result updates, no-results message
- Supported categories: Electronics, Clothing, Home Appliances

## 🌟 Core Features

- Search field (type text to filter items by title)
- Dropdown category filter
- Combined search + category filtering
- Product card layout with Bootstrap styling
- No results fallback message
- Simple and extendable code for new filters

## 🧩 How it Works

- script.js selects all cards with class .product
- On input (search text) and change (category dropdown), ilterProducts() runs
- Each card is checked using:
  - data-category attribute
  - .card-title text content
- Matching cards are shown (style.display='block'), others hidden
- When no cards match, the <p id='noResults'> message appears

## 🛠️ Installation & Run

1. Clone repository:

`ash
git clone https://github.com/nagaraj1295/ProductFilter.git
`

2. Open folder:

`ash
cd ProductFilter
`

3. Open index.html in any browser (no server required)

## 📁 Project Structure

- index.html — product cards, filter controls
- style.css — UI styles (cards, filter box, hover effects)
- script.js — product filtering behavior
- README.md — project documentation

## 🎯 Usage

1. Enter product text in  Search products by title.
2. Choose a category from All Categories / Electronics / Clothing / Home Appliances.
3. Results update immediately.
4. If no matching products, message displayed.

## ⚠️ Notes & Current Behavior

- The price inputs are present in UI but are not yet wired into filtering code.
- Product prices are currently hardcoded in HTML cards.
- script.js currently contains a second products.forEach block at the end that duplicates the filtering logic; this may be cleaned up.

## 💡 Suggested Enhancements

- Implement min/max price filtering using existing inputs
- Add sorting (price, name)
- Convert product data to JSON array for easier maintenance
- Add animations for show/hide transitions
- Add dark mode and accessibility improvements

## 📌 License

MIT License

## 👤 Author
Nagaraj C
