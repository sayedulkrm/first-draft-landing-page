import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import About from "./components/About/About";

const App = () => {
    return (
        <div
            style={{
                maxWidth: "1800px",
                margin: "auto",
            }}
        >
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
