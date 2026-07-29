# Fiverr Clone

A full-stack Fiverr-inspired freelance marketplace built using the MERN stack. The application allows users to register, log in securely, browse services (gigs), and interact through a modern and responsive interface.

## 🚀 Features

* User authentication using JWT and HTTP-only cookies
* Secure login and logout
* Buyer and Seller roles
* Create, update, and delete gigs
* Browse and search available gigs
* Responsive user interface
* RESTful API architecture
* MongoDB database integration

## 🛠️ Tech Stack

### Frontend

* React
* React Router
* Axios
* SCSS
* Swiper

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt
* Cookie Parser
* CORS

## 📂 Project Structure

```
Fiverr-Clone/
│
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/fiverr-clone.git
```

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file inside the Backend directory.

Example:

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_KEY=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

The frontend runs on:

```
http://localhost:5173
```

The backend runs on:

```
http://localhost:5000
```

## 🔐 Authentication

Authentication is implemented using:

* JSON Web Tokens (JWT)
* HTTP-only cookies
* bcrypt password hashing
* Protected API routes

## 📌 Future Improvements

* Payment integration
* Real-time chat
* Reviews and ratings
* Notifications
* Image upload optimization
* Advanced search and filtering
* Admin dashboard

## 🤝 Contributing

Contributions are welcome. Feel free to fork the repository and submit pull requests.

## 📄 License

This project is created for learning and portfolio purposes.
