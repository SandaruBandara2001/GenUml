import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/nav/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Navbar isLogin={true} />
            <div className="home-body">
                <section id="hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
                                <div>
                                    <h1>Welcome to GenUML</h1>
                                    <h2>Generate your Use Case diagram in only in 3 steps..</h2>
                                    <Link to="/sign-in" className="btn-get-started scrollto">
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Use_case_restaurant_model.svg/1200px-Use_case_restaurant_model.svg.png"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="icon-boxes d-flex justify-content-around px-5">
                    <div className="" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box">
                            <div className="icon">
                                <i className="fa-repeat-1">1</i>
                            </div>
                            <h4 className="title">Enter</h4>
                            <p className="description">Enter your user story or import as a file.</p>
                        </div>
                    </div>

                    <div className="" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box">
                            <div className="icon">
                                <i className="ri-stack-line">2</i>
                            </div>
                            <h4 className="title">Edit</h4>
                            <p className="description">Edit if you need some change.</p>
                        </div>
                    </div>

                    <div className="" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box">
                            <div className="icon">
                                <i className="ri-stack-line">3</i>
                            </div>
                            <h4 className="title">Download</h4>
                            <p className="description">Download diagram as a PNG file.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
