import React from "react";
import "./Footer.css";
import logo from "../../assets/home/logo.png";
import svg21 from "../../assets/home/svg21.png";
import svg23 from "../../assets/home/svg23.png";

const Footer = () => {
    return (
        <section className="main-footer-section">
            <div className="all-footer-components">
                <div className="footer-components-left">
                    <img src={logo} alt="logo" />
                    <p>Headquartered in Novi, Michigan.</p>
                </div>

                <div className="footer-components-right">
                    <div className="footer-component-right">
                        <p>Product</p>
                        <div className="footer-component-right-list">
                            <ul>
                                <li>Get Start</li>
                                <li>Pricing</li>
                                <li>Testimonial</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-component-right">
                        <p>About</p>
                        <div className="footer-component-right-list">
                            <ul>
                                <li>Our Store</li>
                                <li>On Stragy</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr
                style={{ borderColor: "white", width: "80%", opacity: "0.3" }}
            />
            <div className="footer-bottom-components">
                <p>© DaCode. 2020</p>

                <div className="footer-icons">
                    <p>FB</p>
                    <p>IG</p>
                    <p>TW</p>
                </div>
            </div>

            <div className="footer-vector-left">
                <img src={svg21} alt="vector" />
            </div>

            <div className="footer-circle">
                <img src={svg23} alt="circle" />
            </div>
        </section>
    );
};

export default Footer;
