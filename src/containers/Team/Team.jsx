import React from 'react';
import "./Team.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import team1 from "../../assets/images/team1.jpg";
import team2 from "../../assets/images/team2.jpg";
import team3 from "../../assets/images/team3.jpg";
import team4 from "../../assets/images/team4.jpg";
import { FaFacebook, FaGooglePlus, FaTwitter } from "react-icons/fa";

const teamData = [
  {
    photo: team1,
    name: 'Olive Yew',
    desc: 'CEO of Company',
  },
  {
    photo: team2,
    name: 'Aida Joe',
    desc: 'Team Leaedr',
  },
  {
    photo: team3,
    name: 'Teri Dac',
    desc: 'Manager of Company',
  },
  {
    photo: team4,
    name: 'Anton Bne',
    desc: 'Chef Advisor',
  },
]

const Team = () => {
  return (
    <section className="team-sec py-5">
      <div className="container py-md-5 py-4">
        <div className="title-main text-center mx-auto mb-5" >
          <p className="text-uppercase">Our Team</p>
          <h3 className="title-style">Meet The <span>Professionals!</span></h3>
        </div>
        <div className="row text-center">

          {teamData.map((item, index) => (
            <div className="col-lg-3 col-sm-6">
              <div className="team-block-single">
                <div className="team-grids">
                  <a href="#team-single">
                    <img src={item?.photo} className="img-fluid" alt="" />
                  </a>
                  <div className="team-info">
                    <div className="social-icons-section">
                      <a className="fac" href="#facebook">
                        <FaFacebook />
                      </a>
                      <a className="twitter mx-2" href="#twitter">
                        <FaTwitter />
                      </a>
                      <a className="google" href="#google-plus">
                        <FaGooglePlus />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-bottom-block p-4">
                  <h5 className="member mb-1"><a href="#team">{item?.name}</a></h5>
                  <small>{item?.desc}</small>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Team