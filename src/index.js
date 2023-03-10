import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/home/Home";
import Account from "./pages/account/Account";
import CreateAccountForm from "./pages/account/CreateAccountForm";
import LoanApplicationForm from "./pages/loan/LoanApplicationForm";
import Transaction from "./pages/account/Transaction";
import TransactionReport from "./pages/managerPages/reports/TransactionReport";
import Loan from "./pages/loan/Loan";
import Login from "./pages/login/Login";
import MEmployee from "./pages/managerPages/mEmployee/MEmployee";
import MDashboard from "./pages/managerPages/mDashboard/mDashboard";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import RequireAuth from "./RequireAuth";
import AccessDenied from "./pages/accessDenied/AccessDenied";
import ManagerApp from "./ManagerApp";
import LoanApproval from "./pages/managerPages/loans/LoanApproval";
import MFDForm from "./pages/managerPages/mAccount/mFDForm";
import BranchWiseLateLoans from "./pages/managerPages/lateLoans/BranchWiseLateLoans";
import LoanForecast from "./pages/loan/LoanForecast";
import MLoanApplication from "./pages/managerPages/loans/mLoanApplication";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
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
          path="/mDashboard"
          element={
            <ManagerApp>
              <MDashboard />
            </ManagerApp>
          }
        />
      </Routes>
      <RequireAuth authRoles={["manager"]}>
        <Route
          path="/loanApproval"
          element={
            <ManagerApp>
              <LoanApproval />
            </ManagerApp>
          }
        />
        <Route
          path="/loanApplication"
          element={
            <ManagerApp>
              <MLoanApplication />
            </ManagerApp>
          }
        />
        <Route
          path="/mFDForm"
          element={
            <ManagerApp>
              <MFDForm />
            </ManagerApp>
          }
        />
        <Route
          path="/managerPages/reports/TransactionReport"
          element={
            <ManagerApp>
              <TransactionReport />
            </ManagerApp>
          }
        />
        <Route
          path="/managerPages/reports/branchWiseLateLoans"
          element={
            <ManagerApp>
              <BranchWiseLateLoans />
            </ManagerApp>
          }
        />
        <Route
          path="/account/createAccountForm"
          element={
            <ManagerApp>
              <CreateAccountForm />
            </ManagerApp>
          }
        />
      </RequireAuth>
      <RequireAuth authRoles={["customer", "admin"]}>
        <Route
          path="/account"
          element={
            <App>
              <Account />
            </App>
          }
        />
        <Route
          path="/transaction"
          element={
            <App>
              <Transaction />
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
        <Route
          path="/loan/loanApplicationForm"
          element={
            <App>
              <LoanApplicationForm />
            </App>
          }
        />
        <Route
          path="/mEmployee"
          element={
            <App>
              <MEmployee />
            </App>
          }
        />
        <Route
          path="/loanForecast"
          element={
            <App>
              <LoanForecast />
            </App>
          }
        />
      </RequireAuth>
    </Router>
  </React.StrictMode>
);
