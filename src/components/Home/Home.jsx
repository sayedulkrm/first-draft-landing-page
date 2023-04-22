import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import heroImg from "../assets/home/heroImg.png";
import svg1 from "../assets/home/svg1.png";
import svg2 from "../assets/home/svg2.png";
import svg3 from "../assets/home/svg3.png";
import svg4 from "../assets/home/svg4.png";
import svg5 from "../assets/home/svg5.png";
import svg6 from "../assets/home/svg6.png";
import svg21 from "../assets/home/svg21.png";
import svg22 from "../assets/home/svg22.png";
import svg23 from "../assets/home/svg23.png";

import img1 from "../assets/home/img1.png";
import icon1 from "../assets/home/icon1.png";
import icon2 from "../assets/home/icon2.png";
import icon3 from "../assets/home/icon3.png";

const Home = () => {
    return (
        <section className="main-home-section">
            <section className="main-home-hero-section">
                <div className="hero-section-image-text">
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}

                    <div className="hero-section-text-all-elements">
                        <div
                            style={{
                                border: " 1px solid #3989D3",
                                margin: "20px 0",

                                width: "20%",
                            }}
                        ></div>

                        <h1>
                            Work Smarter,{" "}
                            <span style={{ color: "#6AC5D2" }}>
                                {" "}
                                save time and energy.{" "}
                            </span>
                        </h1>

                        <p>
                            Draft actionable strategy documents within minutes.
                            Revise them within seconds.
                        </p>
                        <button>Get Started</button>

                        {/* ========= */}
                        {/* ========= */}
                        {/* ========= */}
                        {/* ========= */}
                    </div>
                    <div className="hero-section-image">
                        <img alt="icon" src={heroImg} />
                    </div>
                </div>
                <div className="hero-section-svg-top">
                    <img src={svg1} alt="firstdraft" />
                </div>
                <div className="hero-section-svg-bottom">
                    <img src={svg2} alt="firstdraft" />
                </div>
            </section>

            {/* ====================== */}
            {/* ====================== */}
            {/* ====================== */}
            <section className="main-home-section-two">
                <div className="section-two-top-headings">
                    <h1>What is Vizierr?</h1>
                    <p>
                        Vizierr creates strategy proposals and documents that
                        map how your organization can meet its goals. It’s like
                        hiring a strategy consultant with warp-speed delivery at
                        a (tiny!) fraction of the cost.
                    </p>
                </div>
                <div className="section-two-all-cards">
                    {/* ====================== */}
                    {/* ====================== */}
                    {/* ====================== */}

                    <div className="section-two-card">
                        <div className="section-two-card-icon">
                            <img src={icon1} alt="firstdraft" />
                        </div>
                        <div className="section-two-card-text">
                            <div className="section-two-card-text-heading">
                                <h1>Technology Workers</h1>
                            </div>
                            <div className="section-two-card-text-paragraph">
                                <p>
                                    Marketers, program managers, and sales
                                    professionals: we built this for you. Get
                                    the basics down with Vizierr so you can
                                    focus on your superpowers.
                                </p>
                            </div>
                            <Link>
                                Give it try<span>&rarr;</span>
                            </Link>
                        </div>
                    </div>

                    {/* ====================== */}
                    {/* ====================== */}
                    {/* ====================== */}

                    <div className="section-two-card">
                        <div className="section-two-card-icon">
                            <img src={icon2} alt="firstdraft" />
                        </div>
                        <div className="section-two-card-text">
                            <div className="section-two-card-text-heading">
                                <h1>Freelance Consultants</h1>
                            </div>
                            <div className="section-two-card-text-paragraph">
                                <p>
                                    Win clients faster, increase yourcapacity.
                                    Vizierr can create client pitches and
                                    first-draft deliverables in a snap.
                                </p>
                            </div>
                            <Link>
                                Give it try<span>&rarr;</span>
                            </Link>
                        </div>
                    </div>
                    {/* ====================== */}
                    {/* ====================== */}
                    {/* ====================== */}
                    <div className="section-two-card">
                        <div className="section-two-card-icon">
                            <img src={icon3} alt="firstdraft" />
                        </div>
                        <div className="section-two-card-text">
                            <div className="section-two-card-text-heading">
                                <h1>Small Companies</h1>
                            </div>
                            <div className="section-two-card-text-paragraph">
                                <p>
                                    Not ready to hire a marketer or agency?
                                    Vizierr gives you MBA-quality strategies and
                                    plans that can optimize where you spend your
                                    time.
                                </p>
                            </div>
                            <Link>
                                Give it try<span>&rarr;</span>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* ====================== */}
                <div className="section-two-svg-right">
                    <img src={svg3} alt="firstdraft" />
                </div>
                <div className="section-two-svg-left">
                    <img src={svg4} alt="firstdraft" />
                </div>
            </section>

            {/* ====================== */}
            {/* =========   SECTION THREE    ============= */}
            {/* ====================== */}
            <section className="main-home-section-three-idea">
                <div className="idea-section-top-text">
                    <div className="idea-section-top-text-heading">
                        <h1>
                            Tailored strategy creation within{" "}
                            <span style={{ color: "#6AC5D2" }}> minutes </span>
                        </h1>
                    </div>
                    <div className="idea-section-top-text-paragraph">
                        <p>
                            We deliver high-quality strategy documents and
                            proposals based on what you upload and share. We
                            check in early on the process, and give you powerful
                            Quick Revise tools to make sure we get it right.
                        </p>
                    </div>
                </div>
                <div className="idea-section-body-all-elements">
                    {/* =========== */}
                    {/* =========== */}
                    {/* =========== */}

                    <div className="idea-section-body-elements">
                        <div className="idea-section-body-button">
                            <p>1</p>
                        </div>
                        <div className="idea-section-body-text">
                            <h1>Kick-off</h1>
                            <p>
                                Answer a few basic questions about what you’re
                                trying to achieve, then you have the option to
                                upload relevant notes and documents for us to
                                reference.
                            </p>
                        </div>
                    </div>

                    {/* =========== */}
                    {/* =========== */}
                    {/* =========== */}
                    <div className="idea-section-body-elements">
                        <div className="idea-section-body-button">
                            <p>2</p>
                        </div>
                        <div className="idea-section-body-text">
                            <h1>Confirm</h1>
                            <p>
                                We propose a document structure for you to
                                confirm or edit. Then we draft the first few
                                sections for you to review and ensure we’re
                                getting things right.
                            </p>
                        </div>
                    </div>

                    {/* =========== */}
                    {/* =========== */}
                    {/* =========== */}

                    <div className="idea-section-body-elements">
                        <div className="idea-section-body-button">
                            <p>3</p>
                        </div>
                        <div className="idea-section-body-text">
                            <h1>Generate and Review</h1>
                            <p>
                                We generate the rest of the document, allowing
                                you to quickly regenerate and change sections
                                in-line using our powerful Quick Revise tools.
                                These tools allow you to summarize, expand,
                                bullet, or regenerate content.
                            </p>
                        </div>
                    </div>

                    {/* =========== */}
                    {/* =========== */}
                    {/* =========== */}

                    <div className="idea-section-body-elements">
                        <div className="idea-section-body-button">
                            <p>4</p>
                        </div>
                        <div className="idea-section-body-text">
                            <h1>You’re Off to the Races</h1>
                            <p>
                                Once you’re feeling good about the document
                                draft, you can copy and paste into your favorite
                                document editor and share within your
                                organization. Now the real work begins!
                            </p>
                        </div>
                    </div>
                    {/* =========== */}
                    {/* =========== */}
                    {/* =========== */}
                </div>

                {/* ====================== */}
                {/* ========   SVG & IMAGE     ============== */}
                {/* ====================== */}
                <div className="idea-section-image">
                    <img src={img1} alt="firstdraft" />
                </div>

                <div className="idea-section-svg-top">
                    <img src={svg5} alt="firstdraft" />
                </div>

                <div className="idea-section-svg-bottom">
                    <img src={svg6} alt="firstdraft" />
                </div>
            </section>

            {/* ====================== */}
            {/* ====================== */}
            {/* ====================== */}
            {/* ==========  Section Four    ============ */}
            <section className="main-home-section-four">
                <div className="section-four-all-elements">
                    <h1>
                        Want to scale this for your team <br /> (or just reach
                        out)?
                    </h1>
                    <p>We’d love to hear from you. E-mail us below.</p>

                    <button>hello@vizierr.com</button>
                </div>
                <div className="section-four-svg-left">
                    <img src={svg21} alt="firstdraft" />
                </div>
                <div className="section-four-svg-right">
                    <img src={svg22} alt="firstdraft" />
                </div>
                <div className="section-four-circle">
                    <img src={svg23} alt="firstdraft" />
                </div>
            </section>

            {/* ====================== */}
            {/* ====================== */}
            {/* ====================== */}
            {/* ====================== */}
        </section>
    );
};

export default Home;
