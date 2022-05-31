import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
      <Routes>
        <Route path="/" element={<Navigate to="/user/login" />} />
        <Route path="/user/login" element={<LoginForm />} />
        <Route path="/user/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
