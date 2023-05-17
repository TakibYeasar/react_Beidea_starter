import React from 'react';
import "./Contact.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaAngleRight, FaBuilding, FaEnvelopeOpenText, FaHeadphonesAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <div className="inner-banner">
        <div className="breadcrumb">
          <div className="container">
            <h4 className="inner-text-title font-weight-bold">Contact Us</h4>
            <ul className="breadcrumbs-custom-path">
              <li><a href="index.html">Home</a></li>
              <li className="active mx-2"><FaAngleRight className="icon" />Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="contact-sec py-5" id="contact">
        <div className="container py-md-5 py-4">
          <div className="title-main text-center mx-auto mb-5" >
            <p className="text-uppercase">Get In Touch</p>
            <h3 className="title-style">Contact with <span>Us</span></h3>
          </div>
          <div className="mx-auto">
            <div className="row contact-block">
              <div className="col-md-7 contact-right">
                <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="signin-form">
                  <div className="input-grids">
                    <input type="text" name="w3lName" id="w3lName" placeholder="Your Name*"
                      className="contact-input" required="" />
                    <input type="email" name="w3lSender" id="w3lSender" placeholder="Your Email*"
                      className="contact-input" required="" />
                    <input type="text" name="w3lSubect" id="w3lSubect" placeholder="Subject*"
                      className="contact-input" required="" />
                    <input type="text" name="w3lWebsite" id="w3lWebsite" placeholder="Website URL*"
                      className="contact-input" required="" />
                  </div>
                  <div className="form-input">
                    <textarea name="w3lMessage" id="w3lMessage" placeholder="Type your message here*"
                      required=""></textarea>
                  </div>
                  <div className="text-right">
                    <button className="btn-style">Send Message</button>
                  </div>
                </form>
              </div>
              <div className="col-md-5 contact-left pl-lg-5 mt-md-0 mt-5">
                <h3 className="font-weight-bold mb-md-5 mb-4">Contact Details</h3>
                <div className="cont-details">
                  <div className="d-flex contact-grid">
                    <div className="cont-left text-center mr-3">
                      <FaBuilding className="icon" />
                    </div>
                    <div className="cont-right">
                      <h6>Company Address</h6>
                      <p>10001, 5th Avenue, 12202 street, London.</p>
                    </div>
                  </div>
                  <div className="d-flex contact-grid mt-4 pt-lg-2">
                    <div className="cont-left text-center mr-3">
                      <FaPhoneAlt className="icon" />
                    </div>
                    <div className="cont-right">
                      <h6>Call Us</h6>
                      <p><a href="tel:+1(21) 234 4567">+1(21) 112 7368</a></p>
                    </div>
                  </div>
                  <div className="d-flex contact-grid mt-4 pt-lg-2">
                    <div className="cont-left text-center mr-3">
                      <FaEnvelopeOpenText className="icon" />
                    </div>
                    <div className="cont-right">
                      <h6>Email Us</h6>
                      <p><a href="mailto:example@mail.com" className="mail">example@mail.com</a></p>
                    </div>
                  </div>
                  <div className="d-flex contact-grid mt-4 pt-lg-2">
                    <div className="cont-left text-center mr-3">
                      <FaHeadphonesAlt className="icon" />
                    </div>
                    <div className="cont-right">
                      <h6>Customer Support</h6>
                      <p><a href="mailto:info@support.com" className="mail">info@support.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Contact