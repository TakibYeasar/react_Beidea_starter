import React from 'react';
import "./Testimonial.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import testi2 from "../../assets/images/testi2.jpg";

const Testimonial = () => {
  return (
    <section className="testimonial-sec position-relative py-5">
      <div className="container py-md-5 py-4">
        <div className="title-main text-center mx-auto mb-sm-5 mb-4" >
          <p className="text-uppercase">Testimonials</p>
          <h3 className="title-style">Our Customer <span>Reviews</span></h3>
        </div>
        <div className="owl-carousel owl-theme">
          <div className="item">
            <div className="testimonial-content">
              <div className="testimonial mt-5 pt-5">
                <blockquote className="pt-5">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam.</p>
                </blockquote>
                <div className="testi-des">
                  <div className="test-img"><img src={testi2} className="img-fluid" alt="/" />
                  </div>
                  <div className="peopl">
                    <h3>Jenna John</h3>
                    <p className="indentity">Designer, Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial