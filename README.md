# MERNeats – Food Ordering Platform

## 🌐 Live Link

**Frontend:** https://food-ordering-app-frontend-0tbn.onrender.com/

---

# 📖 Project Summary

**MERNeats** is a full-stack food ordering and delivery platform built using the MERN stack.

## Features

### 👤 Customer
- Search restaurants by city
- Filter restaurants by cuisine
- Browse restaurant menus
- Add food items to the cart
- Secure checkout using Stripe
- Track order status in real time (updates every 5 seconds)

### 🍽️ Restaurant Owner
- Create and manage a restaurant
- Upload restaurant image
- Add, edit, and delete menu items
- Manage restaurant details and cuisines
- View incoming orders
- Update order status:
  - Placed
  - Paid
  - In Progress
  - Out For Delivery
  - Delivered

---

# 🛠️ Tech Stack

## Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui + Radix UI
- React Query
- React Hook Form
- Zod
- Auth0 Authentication

## Backend
- Node.js
- Express 5
- TypeScript (ESM)
- MongoDB
- Mongoose
- Cloudinary
- Stripe
- Auth0 JWT Authentication

---

# 🗄️ Core Data Models

- **Users**
- **Restaurants**
  - Restaurant details
  - Embedded menu items
- **Orders**
  - Customer
  - Restaurant
  - Cart items
  - Delivery details
  - Payment status
  - Order status

---

# 🚀 Ordering Flow

```text
Search Restaurant
        ↓
Browse Menu
        ↓
Add Items to Cart
        ↓
Stripe Checkout
        ↓
Place Order
        ↓
Track Order Status
        ↓
Restaurant Updates Status
        ↓
Order Delivered
```

---

# ⚙️ Deployment

## Frontend (client)

Hosted on **Render Static Site**

| Setting | Value |
|---------|-------|
| Root Directory | `client` |
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |

---

## Backend (server)

Hosted on **Render Web Service**

| Setting | Value |
|---------|-------|
| Root Directory | `server` |
| Build Command | `npm install && npm run build` |
| Start Command | `npm start` |

---

# ▶️ Run Locally

## 1. Clone the repository

```bash
git clone <repository-url>
```

## 2. Navigate to the project

```bash
cd Food-ordering-platform
```

---

## Frontend

```bash
cd client

npm install

npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## Backend

```bash
cd server

npm install

npm run dev
```

Runs on:

```
http://localhost:4000
```

---

# 🔑 Environment Variables

Create a `.env` file inside both the **client** and **server** directories and add the required environment variables.

Examples include:

### Client

```env
VITE_API_BASE_URL=
VITE_AUTH0_DOMAIN=
VITE_AUTH0_CLIENT_ID=
VITE_AUTH0_CALLBACK_URL=
VITE_AUTH0_AUDIENCE=
VITE_STRIPE_PUBLISHABLE_KEY=
```

### Server

```env
PORT=
MONGODB_CONNECTION_STRING=
AUTH0_AUDIENCE=
AUTH0_ISSUER_BASE_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
STRIPE_API_KEY=
FRONTEND_URL=
```

---

# 📌 Current Status

This project implements a complete end-to-end food ordering workflow:

- Restaurant Search
- Restaurant Management
- Menu Management
- Shopping Cart
- Stripe Payments
- Order Placement
- Real-Time Order Tracking
- Restaurant Order Management

The project is under active development with additional features and improvements planned.
