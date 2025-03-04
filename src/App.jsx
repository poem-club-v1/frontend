import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ExplorePage from "./pages/explorePage/ExplorePage";
import HomePage from "./pages/homePage/HomePage";
import LibraryPage from "./pages/libraryPage/LibraryPage";
import LogInPage from "./pages/logInPage/LogInPage";
import UserInfoPage from "./pages/userInfoPage/UserInfoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/account" element={<UserInfoPage />} />
      </Routes>
    </>
  );
}

export default App;
