import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/home/Home";
import Account from "./pages/account/Account";
import CreateAccountForm from "./pages/account/CreateAccountForm";
import LoanApplicationForm from "./pages/loan/LoanApplicationForm";
import Transaction from "./pages/account/Transaction";
import TransactionReport from "./pages/managerPages/reports/TransactionReport"
import Loan from "./pages/loan/Loan";
import Login from "./pages/login/Login";
import MEmployee from "./pages/managerPages/mEmployee/MEmployee";

import {
    BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

import RequireAuth from "./RequireAuth";
import AccessDenied from "./pages/accessDenied/AccessDenied";
import LoanReport from "./pages/managerPages/reports/LoanReport";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode>
    <Router>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<App><Home/></App>}/>
            <Route
                path="/dashboard"
                element={<App>
                    <Home/>
                </App>}
            />
        </Routes>
        <RequireAuth authRoles={['customer', 'admin']}>
            <Route
                path="/account"
                element={<App>
                    <Account/>
                </App>}
            />
            <Route
                path="/transaction"
                element={<App>
                    <Transaction/>
                </App>}
            />
            <Route
                path="/account/createAccountForm"
                element={<App>
                    <CreateAccountForm/>
                </App>}
            />
            <Route
                path="/loan"
                element={<App>
                    <Loan/>
                </App>}
            />
            <Route
                path="/loan/loanApplicationForm"
                element={<App>
                    <LoanApplicationForm/>
                </App>}
            />
            <Route
                path="/mEmployee"
                element={<App>
                    <MEmployee/>
                </App>}
            />
            <Route
                path="/loanReport"
                element={<App>
                    <LoanReport/>
                </App>}
            />
            <Route
                path="/managerPages/reports/TransactionReport"
                element={<App>
                    <TransactionReport/>
                </App>}
            />

        </RequireAuth>
    </Router>
</React.StrictMode>);
