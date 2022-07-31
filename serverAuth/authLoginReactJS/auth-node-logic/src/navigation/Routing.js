import * as React from "react";
import { BrowserRouter,Routes, Route, } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Logout from "../pages/logout/Logout";
import SignUp from "../pages/signUp/SignUp";


export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </BrowserRouter>
    )
}


