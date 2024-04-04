import React from 'react';
import Logo from '../../assets/Logo.png';

const Footer = () => {
  return (
    <>
      <footer className="footer" style={{ "background-image": "url('/Images/footer-bg.png')" }}>

        <div className="footer-top section">
          <div className="container1 grid-list">

            <div className="footer-brand">

              <a href="#" className="logo">
                <img src={Logo} width="162" height="50" alt="EduWeb logo" />
              </a>

              <p className="footer-brand-text">
                Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.
              </p>

              <div className="wrapper">
                <span className="span">Add:</span>

                <address className="address">70-80 Upper St Norwich NR2</address>
              </div>

              <div className="wrapper">
                <span className="span">Call:</span>

                <a href="tel:+011234567890" className="footer-link">+01 123 4567 890</a>
              </div>

              <div className="wrapper">
                <span className="span">Email:</span>

                <a href="mailto:info@eduweb.com" className="footer-link">info@eduweb.com</a>
              </div>

            </div>

            <ul className="footer-list">

              <li>
                <p className="footer-list-title">Online Platform</p>
              </li>

              <li>
                <a href="#" className="footer-link">About</a>
              </li>

              <li>
                <a href="#" className="footer-link">Courses</a>
              </li>

              <li>
                <a href="#" className="footer-link">Instructor</a>
              </li>

              <li>
                <a href="#" className="footer-link">Events</a>
              </li>

              <li>
                <a href="#" className="footer-link">Instructor Profile</a>
              </li>

              <li>
                <a href="#" className="footer-link">Purchase Guide</a>
              </li>

            </ul>

            <ul className="footer-list">

              <li>
                <p className="footer-list-title">Links</p>
              </li>

              <li>
                <a href="#" className="footer-link">Contact Us</a>
              </li>

              <li>
                <a href="#" className="footer-link">Gallery</a>
              </li>

              <li>
                <a href="#" className="footer-link">News & Articles</a>
              </li>

              <li>
                <a href="#" className="footer-link">FAQ's</a>
              </li>

              <li>
                <a href="#" className="footer-link">Sign In/Registration</a>
              </li>

              <li>
                <a href="#" className="footer-link">Coming Soon</a>
              </li>

            </ul>

            <div className="footer-list">

              <p className="footer-list-title">Contacts</p>

              <p className="footer-list-text">
                Enter your email address to register to our newsletter subscription
              </p>

              <form action="" className="newsletter-form">
                <input type="email" name="email_address" placeholder="Your email" required className="input-field" />

                <button type="submit" className="btn has-before">
                  <span className="span">Subscribe</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </button>
              </form>

              <ul className="social-list">

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </li>

              </ul>

            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <div className="container1">

            <p className="copyright">
              Copyright 2022 All Rights Reserved by <a href="#" className="copyright-link">codewithsadee</a>
            </p>

          </div>
        </div>

      </footer>
      <style>
        {`
        /*-----------------------------------*\
    #FOOTER
  \*-----------------------------------*/
  
  .footer {
    background-repeat: no-repeat;
    background-color: var(--eerie-black-2);
    color: var(--gray-x-11);
    font-size: var(--fs-5);
  }
  
  .footer-top {
    display: grid;
    gap: 30px;
  }
  
  .footer-brand-text { margin-block: 20px; }
  
  .footer-brand .wrapper {
    display: flex;
    gap: 5px;
  }
  
  .footer-brand .wrapper .span { font-weight: var(--fw-500); }
  
  .footer-link { transition: var(--transition-1); }
  
  .footer-link:is(:hover, :focus) { color: var(--kappel); }
  
  .footer-list-title {
    color: var(--white);
    font-family: var(--ff-league_spartan);
    font-size: var(--fs-3);
    font-weight: var(--fw-600);
    margin-block-end: 10px;
  }
  
  .footer-list .footer-link { padding-block: 5px; }
  
  .newsletter-form { margin-block: 20px 35px; }
  
  .newsletter-form .input-field {
    background-color: var(--white);
    padding: 12px;
    border-radius: var(--radius-5);
    margin-block-end: 20px;
  }
  
  .newsletter-form .btn {
    min-width: 100%;
    justify-content: center;
  }
  
  .social-list {
    display: flex;
    gap: 25px;
  }
  
  .social-link { font-size: 20px; }
  
  .footer-bottom {
    border-block-start: 1px solid var(--eerie-black-1);
    padding-block: 30px;
  }
  
  .copyright { text-align: center; }
  
  .copyright-link {
    color: var(--kappel);
    display: inline-block;
  }
  
  
  
  
  
  /*-----------------------------------*\
    #BACK TO TOP
  \*-----------------------------------*/
  
  .back-top-btn {
    position: fixed;
    bottom: 40px;
    right: 30px;
    background-color: var(--kappel);
    color: var(--white);
    font-size: 20px;
    padding: 15px;
    border-radius: var(--radius-circle);
    z-index: 3;
    opacity: 0;
    pointer-events: none;
    transition: var(--transition-1);
  }
  
  .back-top-btn.active {
    transform: translateY(10px);
    opacity: 1;
    pointer-events: all;
  }

  /**
     * FOOTER
     */
  
    .footer-brand,
    .footer-list:last-child { grid-column: 1 / 3; }
  
    .newsletter-form {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  
    .newsletter-form .input-field { margin-block-end: 0; }
  
    .newsletter-form .btn { min-width: max-content; }
  
  }

  /**
     * FOOTER
     */
  
    .footer-brand,
    .footer-list:last-child { grid-column: auto; }
  
    .newsletter-form .btn { padding-block: 10px; }
  
  }

      /**
     * FOOTER
     */
  
    .footer .grid-list { grid-template-columns: 1fr 0.6fr 0.6fr 1.2fr; }
        }
        `}
      </style>
    </>
  )
}

export default Footer