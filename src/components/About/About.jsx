import React from "react";
import "./About.css";
import top from "../assets/about/top.png";
import mid from "../assets/about/mid.png";
import bot from "../assets/about/bot.png";
import svg21 from "../assets/home/svg21.png";
import svg22 from "../assets/home/svg22.png";
import svg23 from "../assets/home/svg23.png";

const About = () => {
    return (
        <section className="main-about-section">
            <section className="main-about-section-four">
                <div className="about-section-four-all-elements">
                    <h1>About</h1>
                    <p>
                        We take your SaaS idea and make it into reality. We
                        start with going into why and what your are looking for.
                        Then after brainstorming on branding and strategy we are
                        going into the details of what what and why the you want
                        to create a website. In order to make the creation
                        process as smooth and effective as possible then we are
                        working in an agile/scrum way in order to make sure we
                        can deliver on time and within budget for our clients.
                    </p>
                </div>
                <div className="about-section-four-svg-left">
                    <img src={svg21} alt="firstdraft" />
                </div>
                <div className="about-section-four-svg-right">
                    <img src={svg22} alt="firstdraft" />
                </div>
                <div className="about-section-four-circle">
                    <img src={svg23} alt="firstdraft" />
                </div>
            </section>
            <section className="main-about-section-story-body">
                {/* ============== */}
                {/* ============== */}

                <div className="about-section-all-cards">
                    <div className="about-section-card-bg">
                        <div
                            className="about-section-main-card"
                            style={{
                                borderTop: "10px solid rgba(96, 225, 203, 1)",
                            }}
                        >
                            <h1>Our Story</h1>
                            <p>Text goes here</p>
                        </div>
                    </div>

                    {/* ============== */}
                    {/* ======  Card 2  ======== */}
                    {/* ============== */}

                    <div className="about-section-card-bg">
                        <div
                            className="about-section-main-card"
                            style={{
                                borderTop: "10px solid rgba(0, 190, 250, 1)",
                            }}
                        >
                            <h1>On Strategy</h1>
                            <p>
                                We got a mission from Lunar Strategy to rebrand
                                their website for their SaaS marketing agency.
                                Their vision was to make a clean website and
                                playing with their Lunar and Space theme, this
                                mean using icon and symbols on the website that
                                went with their branding and where they wanted
                                to position themselves.
                            </p>
                        </div>
                    </div>

                    {/* ======= Card 3  ======= */}

                    <div className="about-section-card-bg">
                        <div
                            className="about-section-main-card"
                            style={{
                                borderTop: "10px solid rgba(57, 137, 211, 1)",
                            }}
                        >
                            <h1>Contact</h1>
                            <p>
                                We got a mission from Lunar Strategy to rebrand
                                their website for their SaaS marketing agency.
                                Their vision was to make a clean website and
                                playing with their Lunar and Space theme, this
                                mean using icon and symbols on the website that
                                went with their branding and where they wanted
                                to position themselves.
                            </p>
                        </div>
                    </div>
                    {/* ============== */}
                </div>
                <div className="about-section-card-top-svg">
                    <img src={top} alt="firstdraft" />
                </div>
                <div className="about-section-card-mid-svg">
                    <img src={mid} alt="firstdraft" />
                </div>
                <div className="about-section-card-bot-svg">
                    <img src={bot} alt="firstdraft" />
                </div>
            </section>
        </section>
    );
};

export default About;
