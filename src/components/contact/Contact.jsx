import React from "react"
import "./contact.css"
import Footer from "../footer/Footer"
import LOCATION_CYAN from "../../assets/logos/location-cyan.png"
import PHONE_CYAN from "../../assets/logos/phone-cyan.png"
import EMAIL_CYAN from "../../assets/logos/email-cyan.png"
import CLOCK_CYAN from "../../assets/logos/clock-cyan.png"
import CHEVRON from '../../assets/logos/chevron-up.png'
import classNames from 'classnames';
import TRAINER from '../../assets/photos/trainer.png'
const contactData = [
  {
    avatar: TRAINER,
    name: 'Vijay',
    role: 'manager',
    gender: 'male'
  },
  {
    avatar: TRAINER,
    name: 'Lokesh',
    role: 'fitness coach',
    gender: 'male'
  },
  {
    avatar: TRAINER,
    name: 'John',
    role: 'fitness coach',
    gender: 'male'
  },
]

const Contact = () => {
  return (
  <div className="container">
    <section id="contact">
      <h1 className="contact-title">Matrix <span>Fitness</span></h1>
      <div className="contact-container">
          <div className="contact-london">
            <h2>Address</h2>
            <ul>
              <li>
                <img src={LOCATION_CYAN} alt="" />
                Opposite to Jaycees School Bus Stop &
              </li>
              <li>
              <img src={LOCATION_CYAN} alt="" />
                Opposite to ITI
              </li>
              <li>
                <img src={PHONE_CYAN} alt="" />
                +91 9876543210
              </li>
              <li>
                <img src={EMAIL_CYAN} alt="" />
                matrix@gmail.com
              </li>
              <li>
                <img src={CLOCK_CYAN} alt="" />
                MON - SUN: 04:30 - 09:30 & 04.30 - 09.30
              </li>
            </ul>
          </div>

        <form action="https://formsubmit.co/ccd35ba7ab366172026a1d5e18de52b0" method="POST">
          <div className="contact-form-bg">
            <div className="contact-form">
              <div className="first-row">
                <div className="name">
                  <p className="input-text">Full name</p>
                  <input type="text" name="name" id="name" required />
                </div>

                <div className="name">
                  <p className="input-text">Phone</p>
                  <input type="text" name="phone" id="phone" required />
                </div>
                <div className="message">
                </div>
              </div>
              <br></br>

              <button className="send-btn" type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </section>

    <section id="team">
      <h1 className="team-title">Meet the team</h1>
      <div className="team-container">
            {
          contactData.map(({avatar, name, role, gender}, index) => {

            const className_name = classNames({
              'vijay': name === 'Vijay',
              'lokesh': name === 'Lokesh',
              'john': name === 'John',
            });

            return (
                <div key={index} className={`team-card ${gender === 'male' ? 'male' : 'female'} ${className_name}`}>
                  <div class="img-box">
                    <img className="avatar" src={avatar} alt='avatar' />
                  </div>
                  <h3 className="role">{role}</h3>
                  <div class="content-box">
                  <img src={CHEVRON} className="chevron" alt="chevron"></img>
                    <h2 className="name">{name}</h2>
                    <a href="/">Book a lesson</a>
                  </div>
                </div>
            )
          })
        }
      </div>
    </section>
    <Footer />
</div>
  );
};

export default Contact;
