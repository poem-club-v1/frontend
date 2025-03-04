import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ExplorePage from "./pages/explorePage/ExplorePage";
import HomePage from "./pages/homePage/HomePage";
import LibraryPage from "./pages/libraryPage/LibraryPage";
import LogInPage from "./pages/logInPage/LogInPage";
import UserInfoPage from "./pages/userInfoPage/UserInfoPage";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/account" element={<UserInfoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
