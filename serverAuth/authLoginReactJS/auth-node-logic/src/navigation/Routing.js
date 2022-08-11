import * as React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Logout from "../pages/logout/Logout";
import PlaceOrder from "../pages/placeOrder/PlaceOrder";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<PublicRoute isAllowed={false} />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/logout" element={<Logout />} />
                </Route>
                <Route element={<PrivateRoute isAllowed={false} />}>
                    <Route path="/placeorder" element={<PlaceOrder />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}


