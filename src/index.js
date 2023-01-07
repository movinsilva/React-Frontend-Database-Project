import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home";
import Account from "./pages/account/Account";
import CreateAccountForm from "./pages/account/CreateAccountForm";
import Loan from "./pages/loan/Loan";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <App>
              <Home />
            </App>
          }
        />
        <Route
          path="/dashboard"
          element={
            <App>
              <Home />
            </App>
          }
        />
        <Route
          path="/account"
          element={
            <App>
              <Account />
            </App>
          }
        />
        <Route
          path="/account/createAccountForm"
          element={
            <App>
              <CreateAccountForm />
            </App>
          }
        />
        <Route
          path="/loan"
          element={
            <App>
              <Loan />
            </App>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
