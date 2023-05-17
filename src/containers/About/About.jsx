import React from 'react';
import "./About.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaAngleRight, FaChartLine, FaCheckSquare, FaHandHoldingUsd, FaLightbulb, FaPiggyBank } from "react-icons/fa";
import ab2 from "../../assets/images/ab2.png";
import abs1 from "../../assets/images/abs1.jpg";
import abs2 from "../../assets/images/abs2.jpg";
import abs3 from "../../assets/images/abs3.jpg";

const About = () => {
    return (
        <section className="about">
            <div className="inner-banner">
                <div className="breadcrumb">
                    <div className="container">
                        <h4 className="inner-text-title font-weight-bold">About Us</h4>
                        <ul className="breadcrumbs-custom-path">
                            <li><a href="/">Home</a></li>
                            <li className="active mx-2"><FaAngleRight className="icon" /> About Us</li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="about-sec py-5">
                <div className="container py-md-5 py-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6 about-sec-left">
                            <div className="style-title position-relative">
                                <p className="text-uppercase">About Us</p>
                                <h3 className="title-style mb-sm-3 mb-2"><span>We Work</span> for your best Success
                                </h3>
                            </div>
                            <p>Consectetur adipiscing elit. Aliquam sit amet
                                efficitur tortor.Uspendisse efficitur orci urna. In et augue ornare, tempor massa in, luctus
                                sapien.</p>
                            <ul className="list-about-sec mt-sm-4 mt-3">
                                <li className="py-1"><FaCheckSquare className="icon" /> Ut enim ad minim
                                    veniam</li>
                                <li className="py-2"><FaCheckSquare className="icon" />Quis nostrud
                                    exercitation
                                    ullamco
                                    laboris</li>
                                <li className="py-1"><FaCheckSquare className="icon" />Nisi ut aliquip ex
                                    ea commodo
                                    consequat</li>
                            </ul>
                            <a className="btn-style mt-5" href="/services">View Our Services</a>
                        </div>
                        <div className="col-lg-6 about-sec-right mt-lg-4 mt-5">
                            <img src={ab2} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-features">
                <div className="features-main py-5">
                    <div className="container py-md-5 py-4">
                        <div className="row text-center">
                            <div className="col-lg-3 col-sm-6 feature-body">
                                <div className="feature-icon">
                                    <FaHandHoldingUsd className="icon" />
                                </div>
                                <div className="feature-info">
                                    <h3 className="feature-title mb-3"><a href="/services">Financial Planning</a></h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit accus antium dolor emque lauda ntium.
                                    </p>
                                    <a href="/services" className="feature-link">Read More<FaAngleRight className="icon" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 feature-body mt-sm-0 mt-5">
                                <div className="feature-icon">
                                    <FaChartLine className="icon" />
                                </div>
                                <div className="feature-info">
                                    <h3 className="feature-title mb-3"><a href="/services">Business Growth</a></h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit accus antium dolor emque lauda ntium.
                                    </p>
                                    <a href="/services" className="feature-link">Read More<FaAngleRight className="icon" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 feature-body mt-lg-0 mt-5">
                                <div className="feature-icon">
                                    <FaPiggyBank className="icon" />
                                </div>
                                <div className="feature-info">
                                    <h3 className="feature-title mb-3"><a href="/services">Saving Strategy</a></h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit accus antium dolor emque lauda ntium.
                                    </p>
                                    <a href="/services" className="feature-link">Read More<FaAngleRight className="icon" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 feature-body mt-lg-0 mt-5">
                                <div className="feature-icon">
                                    <FaLightbulb className="icon" />
                                </div>
                                <div className="feature-info">
                                    <h3 className="feature-title mb-3"><a href="/services">Total SEO Solutions</a></h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit accus antium dolor emque lauda ntium.
                                    </p>
                                    <a href="/services" className="feature-link">Read More<FaAngleRight className="icon" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 
            <section className="about-grids">
                <div className="hny-three-grids py-5">
                    <div className="container py-md-5 py-4">
                        <div className="title-main text-center mx-auto mb-5">
                            <p className="text-uppercase">Our Work</p>
                            <h3 className="title-style">How Does it <span>Work?</span></h3>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4 col-sm-6 mt-0 grids5-info">
                                <a href="#url"><img src={abs1} className="img-fluid" alt="" /></a>
                                <h4><a href="#url">Generate Ideas</a></h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam esse? dolores impedit
                                    doloremque.</p>
                            </div>
                            <div className="col-md-4 col-sm-6 mt-sm-0 mt-5 grids5-info">
                                <a href="#url"><img src={abs2} className="img-fluid" alt="" /></a>
                                <h4><a href="#url">Create Design</a></h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam esse? dolores impedit
                                    doloremque.</p>
                            </div>
                            <div className="col-md-4 col-sm-6 mt-md-0 mt-5 grids5-info">
                                <a href="#url"><img src={abs3} className="img-fluid" alt="" /></a>
                                <h4><a href="#url">Launch Project</a></h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam esse? dolores impedit
                                    doloremque.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default About