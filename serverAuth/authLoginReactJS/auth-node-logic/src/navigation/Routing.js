import * as React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Logout from "../pages/logout/Logout";
import PlaceOrder from "../pages/placeOrder/PlaceOrder";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { useSelector } from "react-redux";
import CommonHeader from "../commonComponents/commonHeader/CommonHeader";
import Product from "../pages/product/Product";
import CartPage from "../pages/cartPage/CartPage";


export default function Routing() {
    const isAllowed = useSelector((store) => store.AuthSlice.isAllowed)
    return (
        <BrowserRouter>
            <CommonHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />}/>
                <Route path="/cart" element={<CartPage />}/>
                <Route element={<PublicRoute isAllowed={isAllowed} />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/logout" element={<Logout />} />
                </Route>
                <Route element={<PrivateRoute isAllowed={isAllowed} />}>
                    <Route path="/placeorder" element={<PlaceOrder />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}


