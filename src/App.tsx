import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Controller from "./components/Controller/Controller";
import AccessFormPage from "./pages/AccesFormPage";
import { DecodeToken } from "./redux/thunks/types/thunkTypes";
import jwtDecode from "jwt-decode";
import { useAppDispatch } from "./redux/hooks";
import { loginActionCreator } from "./redux/features/userSlice";

function App() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const { username, image }: DecodeToken = jwtDecode(token);
      dispatch(loginActionCreator({ username, image }));
      navigate("/users/collections");
    }
  }, [dispatch, navigate]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/user/login" />} />
        <Route path="/user/login" element={<AccessFormPage />} />
        <Route path="/user/:register" element={<AccessFormPage />} />
        <Route
          path="/users/collections"
          element={
            <Controller>
              <p>Hola</p>
            </Controller>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
