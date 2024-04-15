import React from 'react'
import './footer.css'
import LOGO from '../../assets/logos/logo_transparent.png'
import INSTAGRAM from '../../assets/logos/instagram_white.svg'
import YOUTUBE from '../../assets/logos/youtube_white.png'
import WHATSAPP from '../../assets/logos/whatsapp_white.svg'

const Footer = () => {
  return (
    <section id='footer'>
      <div className="footer-container">

      <div className="row1">
        <div className="col1">
          <h3 className='footer-title'><span class="underline">Matrix Fitness Center</span></h3>
          <ul className='footer-text'>
            <li>1. Opp. to Jaycees School Bus Stop</li>
            <li>2. Kasipalayam Near ITI Opposite</li>
            <li>Mon - Sun: 05:00 - 9:30 & 04:00 - 9:30</li>
          </ul>
        </div>

        <div className="col2">
          <h3 className='footer-title'><span class="underline">Quick links</span></h3>
          <ul className='footer-text'>
            <li><a href="/">Home</a></li>
            <li><a href="/classes">Classes</a></li>
            <li><a href="/pricing">Membership</a></li>
            <li><a href="/bmi">BMI</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

        <div className="row2">
          <div className="col3">
            <img src={LOGO} alt="matrix" />
            <h3 className='footer-matrix-title'>Matrix fitness Center</h3>
          </div>
        </div>

      <div className="row3">
        <div className="col4">
          <h3 className='footer-title'><span class="underline">Get in touch</span></h3>
          <ul className='footer-text'>
            <li>matrix@gmail.com</li>
            <li>+91 9876543210</li>
          </ul>
        </div>

        <div className="col5">
          <h3 className='footer-title'><span class="underline">Matrix Socials</span></h3>
          <span></span>
          <ul className='footer-text'>
            <a href="https://www.instagram.com"><li><img src={INSTAGRAM} alt="Instagram" />Instagram</li></a>
            <a href="https://www.youtube.com"><li><img src={YOUTUBE} alt="Youtube" />Youtube</li></a>
            <a href="https://www.whatsapp.com"><li><img src={WHATSAPP} alt="Spotify" />Whatsapp</li></a>
          </ul>
        </div>
      </div>

      </div>
    </section>
  )
}

export default Footer