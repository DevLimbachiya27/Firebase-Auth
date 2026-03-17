# 🔐 Firebase Authentication System

A modern and secure **Firebase Authentication System** built using **React.js (Vite)** and **Material UI**. This project provides complete user authentication functionality including registration, login, protected routes, and real-time authentication state management.

---

## 🚀 Features

- 🔐 User Registration (Email & Password)
- 🔑 User Login
- 🔄 Real-Time Authentication State
- 🔒 Protected Routes (Dashboard access control)
- 👤 User Session Handling
- 🚪 Logout Functionality
- 🎨 Responsive UI with Material UI

---

## 🛠 Tech Stack

- **Frontend:** React.js (Vite)
- **UI Library:** Material UI (MUI)
- **Authentication:** Firebase Authentication
- **Routing:** React Router DOM

---

## 📁 Folder Structure


src/
│
├── firebase/
│ └── config.js
│
├── context/
│ └── AuthContext.jsx
│
├── components/
│ └── ProtectedRoute.jsx
│
├── pages/
│ ├── Login.jsx
│ ├── Register.jsx
│ ├── Dashboard.jsx
│
├── App.jsx
└── main.jsx


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/firebase-auth-app.git
cd firebase-auth-app
2️⃣ Install dependencies
npm install
3️⃣ Install required packages
npm install firebase react-router-dom @mui/material @emotion/react @emotion/styled
4️⃣ Setup Firebase

Go to Firebase Console

Create a project

Enable Authentication (Email/Password)

Copy your Firebase config and paste in:

src/firebase/config.js
5️⃣ Run the project
npm run dev
🔐 Authentication Flow

User registers using email & password

User logs in

Firebase verifies credentials

Auth state is stored globally using Context API

Protected routes allow access only if authenticated

📸 Screens Included

Login Page

Register Page

Dashboard Page

🎯 Project Highlights

⚡ Fast development using Vite

🔥 Firebase real-time authentication

🎨 Clean UI with Material UI

🔐 Secure route protection

📦 Modular code structure

🚀 Future Enhancements

🔥 Google Login (OAuth)

📧 Forgot Password Feature

👤 User Profile Update

🌙 Dark Mode (MUI Theme)

🗄 Firestore Database Integration

📄 License

This project is open-source and free to use.

🙌 Author

Dev Limbachiya
