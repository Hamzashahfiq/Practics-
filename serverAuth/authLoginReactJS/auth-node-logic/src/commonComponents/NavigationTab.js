import React from 'react'
import { Link } from "react-router-dom";

export default function NavigationTab() {
    return (
        <div>
            <ul style={{ textDecoretion: 'none' }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            </ul>
        </div>
    )
}
