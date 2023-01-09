import {Navigate, redirect, Route, Routes} from "react-router-dom";
import AccessDenied from "./pages/accessDenied/AccessDenied";
import Login from "./pages/login/Login";
import React from "react";

export default function RequireAuth(props) {
    let role  = sessionStorage.getItem('role')

    if (props.authRoles.includes(role)) {
        return <Routes>
            {props.children}
        </Routes>
    } else {
       return <Routes>

       </Routes>
    }
}
