import React from 'react';
import "./Footer.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaFacebook, FaGithub, FaGooglePlus, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-sec py-5">
      <div className="container pt-md-4">
        <div className="row footer-p">
          <div className="col-lg-4 pr-lg-5">
            <a className="footer-logo" href="/">
              <span>Be</span>Idea</a>
            <p className="mt-3 logo-btm">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
              minus id quod maxime placeat facere.</p>
            <div className="columns-2 mt-4">
              <ul className="social">
                <li><a href="/facebook"><FaFacebook /></a>
                </li>
                <li><a href="/linkedin"><FaLinkedin /></a>
                </li>
                <li><a href="/twitter"><FaTwitter /></a>
                </li>
                <li><a href="/google"><FaGooglePlus /></a>
                </li>
                <li><a href="/github"><FaGithub /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 mt-lg-0 mt-5">
            <div className="row">
              <div className="col-xl-5 col-6 column">
                <h3 className="mt-lg-3">Quick Link</h3>
                <ul className="footer-gd-16">
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/clients">Our Clients</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/blog">Blog Posts</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-xl-5 col-6 column pl-lg-0">
                <h3 className="mt-lg-3">Contact Info</h3>
                <ul className="footer-contact-list">
                  <li className="">10001, 5th Avenue,
                    #32841 block, USA</li>
                  <li className="mt-2"><a href="tel:+12 23456790">+1223 456 790</a></li>
                  <li className="mt-2"><a href="mailto:info@example.com">info@example.com</a></li>
                  <li className="mt-2"><a href="mailto:info@example.com">www.example.com</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-7 col-sm-8 column mt-lg-0 mt-4 pl-xl-0">
            <h3 className="mt-lg-3">Newsletter </h3>
            <div className="end-column">
              <form action="#" className="subscribe" method="post">
                <input type="email" name="email" placeholder="Email Address" required="" />
                  <button><span className="fa fa-paper-plane" aria-hidden="true"></span></button>
              </form>
              <p>Subscribe to our mailing list and get updates to your email inbox.</p>
            </div>
          </div>
        </div>
        <div className="below-section text-center pt-lg-4 mt-5">
          <p className="copy-text">&copy; 2021 Beidea. All rights reserved. Design by <a href="https://w3layouts.com/"
            target="_blank"> W3Layouts</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer