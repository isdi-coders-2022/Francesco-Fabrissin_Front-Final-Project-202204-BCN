import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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

  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (token as string) {
      const { username, image, imageBackup }: DecodeToken = jwtDecode(
        token as string
      );

      const userInfo = {
        username,
        image,
        imageBackup,
      };
      dispatch(loginActionCreator(userInfo));
    }
  }, [dispatch, logged, token, url]);

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
          path="/myCollection/edit/:recordId"
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
