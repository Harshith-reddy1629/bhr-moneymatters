// import { Component } from "react";

import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";

// import Sidebar from "./components/Sidebar";

// import Navbar from "./components/Navbar";

import Accounts from "./components/Accounts";

import Profile from "./components/Profile";

import TransactionRoute from "./components/TranscationRoute";

import NotFound from "./components/NotFount";

// import UserContext from "./context/UserContext";

import "./App.css";

const App = () => (
  <Routes>
    <Route exact path="/bhr-moneymatters/login" element={<Login />} />
    <Route exact path="/bhr-moneymatters/" element={<Accounts />} />
    <Route
      exact
      path="/bhr-moneymatters/transactions"
      element={<TransactionRoute />}
    />
    <Route exact path="/bhr-moneymatters/profile" element={<Profile />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
