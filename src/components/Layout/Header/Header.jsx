import React from "react";
import "./Header.css";

import logo from "../../assets/home/logo.png";
import { NavLink } from "react-router-dom";

const menuItems = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
];

const Header = () => {
    return (
        <section className="main-header-section">
            <div className="header-section-all-elements">
                <div className="header-section-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="header-section-menu">
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    activeClassName="active"
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                        <button>Get Start</button>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Header;
