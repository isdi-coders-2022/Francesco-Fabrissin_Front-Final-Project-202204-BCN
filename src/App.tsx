import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AccessFormPage from "./pages/AccesFormPage";

function App() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
      <Routes>
        <Route path="/" element={<Navigate to="/user/login" />} />
        <Route path="/user/login" element={<AccessFormPage />} />
        <Route path="/user/:register" element={<AccessFormPage />} />
      </Routes>
    </div>
  );
}

export default App;
