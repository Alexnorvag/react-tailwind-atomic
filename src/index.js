import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import { HomePage } from "./pages/home";
import { AdminPage } from "./pages/admin";
import { LoginPage } from "./pages/login";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/templates" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
