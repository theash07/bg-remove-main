# BG Remove AI - Image Background Removal App

A full-stack MERN application that removes image backgrounds using AI-powered background removal APIs.

## Features

* Upload images instantly
* AI-powered background removal
* User Authentication with Clerk
* Credit-based system
* Stripe Payment Integration
* Razorpay Payment Integration
* Responsive UI with React & Tailwind CSS
* MongoDB Database Integration

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM
* Clerk Authentication

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Multer
* JWT

### Payments

* Stripe
* Razorpay

## Project Structure

```bash
client/
├── src/
├── public/
└── package.json

server/
├── controllers/
├── models/
├── routes/
├── middlewares/
└── server.js
```

## Environment Variables

### Client (.env)

```env
VITE_BACKEND_URL=http://localhost:4000
```

### Server (.env)

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
CLERK_WEBHOOK_SECRET=your_clerk_secret
STRIPE_SECRET_KEY=your_stripe_secret
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
CLIPDROP_API=your_clipdrop_api_key
```

## Installation

### Clone Repository

```bash
git clone https://github.com/theash07/bg-remove-main.git
```

### Install Dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd server
npm install
```

### Run Backend

```bash
npm run server
```

### Run Frontend

```bash
npm run dev
```

## Author

Ashish Yadav

MCA Student | Full Stack Developer

GitHub: https://github.com/theash07
