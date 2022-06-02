import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Controller from "./components/Controller/Controller";
import jwtDecode from "jwt-decode";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { loginActionCreator, State } from "./redux/features/userSlice";
import AccessFormPage from "./pages/AccessFormPage";
//import User from "./components/User/User";
import { Toaster } from "react-hot-toast";
import UserCollection from "./components/UserCollection/UserCollection";
import { DecodeToken } from "./types/types";

function App() {
  const dispatch = useAppDispatch();
  const { logged } = useAppSelector((state: { user: State }) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token as string) {
      const { username, image }: DecodeToken = jwtDecode(token as string);
      dispatch(loginActionCreator({ username, image }));
      navigate("/users/collections");
    }
  }, [dispatch, logged, navigate]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
      {logged && <Navigation />}
      <Routes>
        <Route path="/" element={<Navigate to="/user/login" />} />
        <Route path="/user/login" element={<AccessFormPage />} />
        <Route path="/user/:register" element={<AccessFormPage />} />
        <Route
          path="/users/collections"
          element={
            <Controller>
              <UserCollection
                username="Fra432"
                image=""
                location="Barcelona"
                genre="Electronic"
              />
            </Controller>
          }
        />
      </Routes>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default App;
