import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserFormPage from "./pages/UserFormPage";
import UserDetailsPage from "./pages/UserDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/users/add" element={<UserFormPage />} />
        <Route path="/users/:userId/edit" element={<UserFormPage />} />
        <Route path="/users/:userId" element={<UserDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
