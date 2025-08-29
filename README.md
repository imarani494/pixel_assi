
E-Commerce Product Listing App

A modern and responsive React + TypeScript e-commerce product listing application with search, filtering, category-based dropdowns, and detailed product views.
The app fetches real data from the Fake Store API
 and displays them in an interactive, user-friendly UI.

📖 Table of Contents

Overview

Features

Tech Stack

Screenshots

Project Setup

Folder Structure

Code Walkthrough

Future Improvements

Author

📝 Overview

This project demonstrates a frontend assignment / mini-store app for displaying products in a grid layout.

Users can:

Browse products from a live API

Filter by category (electronics, jewelery, men's clothing, women's clothing)

Search products by title

View product details: title, price, description, category, and image

Explore all products in a single-page layout with dynamic filtering
### 🏠 Product Listing Page


✨ Features

✅ Responsive grid-based UI with Tailwind CSS
✅ Live API data integration
✅ Category filter via dropdown
✅ Search bar for product titles
✅ Product details modal (with description + price + category)
✅ Displays Title, Price, Description, Category, Image
✅ Minimal and clean design
✅ Loading & error handling

🛠️ Tech Stack

React (TypeScript + Vite) ⚛️

Tailwind CSS 🎨

Zustand (state management)

TanStack Query (React Query) (data fetching & caching)

Fake Store API 🌍

React Hook Form + Zod (form validation)

📸 Screenshots
🏠 Product Listing Page

## 📸 Screenshots

![Add Product](./src/assets/image/add.png)

![Home Page](./src/assets/image/home.png)

![Modal](./src/assets/image/modal.png)




🔍 Product Details Modal
## folder .....

ecommerce-store/
│── public/
│   ├── favicon.ico
│   └── index.html
│
│── src/
│   ├── components/
│   │   ├── AddProductForm.jsx
│   │   ├── CartIcon.jsx
│   │   ├── CartModal.jsx
│   │   ├── ProductGrid.jsx        # shows list of products
│   │   ├── ProductModal.jsx       # product details popup
│   │   ├── SearchFilter.jsx       # search + filter dropdown
│   │   └── ui/                    # reusable UI parts
│   │       ├── Button.jsx
│   │       ├── LoadingSpinner.jsx
│   │       └── Modal.jsx
│   │
│   ├── hooks/
│   │   ├── useCategories.js
│   │   └── useProducts.js
│   │
│   ├── pages/
│   │   ├── _app.jsx               # Next.js app entry
│   │   └── index.jsx              # Home page (search + product grid + modals)
│   │
│   ├── stores/
│   │   ├── useCartStore.js
│   │   └── useFilterStore.js
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── utils/
│   │   ├── api.js
│   │   └── validation.js
│   │
│   └── App.jsx                    # if using Vite/CRA instead of Next.js
│
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md


