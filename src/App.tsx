import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Controller from "./components/Controller/Controller";
import jwtDecode from "jwt-decode";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { loginActionCreator, State } from "./redux/features/userSlice";
import AccessFormPage from "./pages/AccessFormPage/AccessFormPage";
import { Toaster } from "react-hot-toast";
import { DecodeToken } from "./types/types";
import UsersCollectionsPage from "./pages/UsersCollectionsPage/UsersCollectionsPage";
import AntiController from "./components/AntiController/AntiCOntroller";
import AddEditFormPage from "./pages/AddEditFormPage/AddEditFormPage";
import Footer from "./components/Footer/Footer";
import UserCollectionPage from "./pages/UserCollectionPage/UserCollectionPage";

function App() {
  const dispatch = useAppDispatch();
  const { logged } = useAppSelector((state: { user: State }) => state.user);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token as string) {
      const { username, image }: DecodeToken = jwtDecode(token as string);
      dispatch(loginActionCreator({ username, image }));
    }
  }, [dispatch, logged, navigate, token]);

  return (
    <div className="d-flex flex-column align-items-center h-100">
      {logged && <Navigation />}
      <Routes>
        <Route path="/" element={<Navigate to="/user/login" />} />
        <Route
          path="/user/login"
          element={
            <AntiController>
              <AccessFormPage />
            </AntiController>
          }
        />
        <Route
          path="/user/:register"
          element={
            <AntiController>
              <AccessFormPage />
            </AntiController>
          }
        />
        <Route
          path="/users/collections"
          element={
            <Controller>
              <UsersCollectionsPage />
            </Controller>
          }
        />
        <Route
          path="/:myCollection"
          element={
            <Controller>
              <UsersCollectionsPage />
            </Controller>
          }
        />
        <Route
          path="/myCollection/addRecord"
          element={
            <Controller>
              <AddEditFormPage />
            </Controller>
          }
        />
        <Route
          path="/users/:userId"
          element={
            <Controller>
              <UserCollectionPage />
            </Controller>
          }
        />
      </Routes>
      {logged ?? <Footer />}
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default App;
