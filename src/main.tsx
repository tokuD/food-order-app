import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CartProvider } from "./context/cart-context.tsx";
import "./global.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAl_gGtEY_C7s6cd-IAivm9sA2kSXDBYj4",
  authDomain: "food-order-app-1d190.firebaseapp.com",
  projectId: "food-order-app-1d190",
  storageBucket: "food-order-app-1d190.appspot.com",
  messagingSenderId: "1090412584247",
  appId: "1:1090412584247:web:5b7c0083730a4fd723ceb2",
  measurementId: "G-3JB6KS9K68",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  // </React.StrictMode>
);
