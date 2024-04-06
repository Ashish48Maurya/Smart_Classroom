import React from 'react'
import Navbar from '../Navbar'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer';

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <>
        <div className="about-section">
          <h1>About Us</h1>
          <p>We are team Tech4Stack we have built a very robust application to reduce the efforts required to allocste classrooms to students for lectures and examinations and we have also made this application such that everything in a college can be done at one place from posting notes to assignments and scheduling and rescheduling lectures everything can be done at one place in one tab.</p>
          <p>
            Resize the browser window to see that this page is responsive by the way.
          </p>
        </div>
        <h2 style={{ textAlign: "center" }}>Our Team</h2>
        <ul className="cards">
          <li>
            <a href="" className="card">
              <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img className="card__thumb" src="https://media.licdn.com/dms/image/D4D03AQFuOJBwzRKS3g/profile-displayphoto-shrink_400_400/0/1675950175452?e=1717027200&v=beta&t=dLTmUKMtFdyDVPI9Qdq_mLYseVhhc9zuQRhs0faAfw0" alt="Divy Arun Mav" />
                  <div className="card__header-text">
                    <h3 className="card__title">Divy Arun Mav</h3>
                    <span className="card__status">MERN-Stack Developer</span>
                  </div>
                </div>
                <p className="card__description">Divy Arun Mav is student at Dwarkadas.J.Sanghvi College of Engineering Vile Parle , currently pursuing B.Tech in CSE(IOT and Cybersecurity with Blockchain Technology).</p>
              </div>
            </a>
          </li>
          <li>
            <a href="" className="card">
              <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img className="card__thumb" src="https://avatars.githubusercontent.com/u/118504361?v=4" alt="Ashish Vinod Maurya" />
                  <div className="card__header-text">
                    <h3 className="card__title">Ashish Vinod Maurya</h3>
                    <span className="card__status">MERN-Stack Developer</span>
                  </div>
                </div>
                <p className="card__description">Ashish Vinod Maurya is student at Dwarkadas.J.Sanghvi College of Engineering Vile Parle , currently pursuing B.Tech in CSE(IOT and Cybersecurity with Blockchain Technology).</p>
              </div>
            </a>
          </li>
          <li>
            <a href="" className="card">
              <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img className="card__thumb" src="https://media.licdn.com/dms/image/D4D03AQEJv1UBMfKy2g/profile-displayphoto-shrink_400_400/0/1674321046278?e=1717027200&v=beta&t=cGdtJMaGC8-penyTjEumzt0n-jsdq_lGKXd6Ur-HfpU" alt="Vipul Rajesh Mahtre" />
                  <div className="card__header-text">
                    <h3 className="card__title">Vipul Rajesh Mhatre</h3>
                    <span className="card__status">Team Lead</span>
                  </div>
                </div>
                <p className="card__description">Vipul Rajesh Mhatre is student at Dwarkadas.J.Sanghvi College of Engineering Vile Parle , currently pursuing B.Tech in CSE(IOT and Cybersecurity with Blockchain Technology).</p>
              </div>
            </a>
          </li>
          <li>
            <a href="" className="card">
              <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img className="card__thumb" src="../Images/Ayush.jpeg" alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">Ayush Kamlesh Mutha</h3>
                    <span className="card__status">App Developer</span>
                  </div>
                </div>
                <p className="card__description">Ayush Kamlesh Mutha is student at Dwarkadas.J.Sanghvi College of Engineering Vile Parle , currently pursuing B.Tech in CSE(IOT and Cybersecurity with Blockchain Technology).</p>
              </div>
            </a>
          </li>
        </ul>
      </>

      <style>
        {`
body {
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 100px;
  // overflow:hidden;
}

html {
  box-sizing: border-box;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #0d6efd;
  color: white;
}

:root {
  --surface-color: #fff;
  --curve: 40;
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans JP', sans-serif;
  background-color: #fef8f8;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
}

.card {
  position: relative;
  display: block;
  height: 100%;  
  border-radius: calc(var(--curve) * 1px);
  overflow: hidden;
  text-decoration: none;
}

.card__image {      
  width: 100%;
  height: auto;
}

.card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;      
  border-radius: calc(var(--curve) * 1px);    
  background-color: var(--surface-color);      
  transform: translateY(100%);
  transition: .2s ease-in-out;
}

.card:hover .card__overlay {
  transform: translateY(0);
}

.card__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: calc(var(--curve) * 1px) 0 0 0;    
  background-color: var(--surface-color);
  transform: translateY(-100%);
  transition: .2s ease-in-out;
}

.card__arc {
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 100%;
  right: 0;      
  z-index: 1;
}

.card__arc path {
  fill: var(--surface-color);
  d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
}       

.card:hover .card__header {
  transform: translateY(0);
}

.card__thumb {
  flex-shrink: 0;
  width: 50px;
  height: 50px;      
  border-radius: 50%;      
}

.card__title {
  font-size: 1em;
  margin: 0 0 .3em;
  color: #6A515E;
}

.card__tagline {
  display: block;
  margin: 1em 0;
  font-family: "MockFlowFont";  
  font-size: .8em; 
  color: #D7BDCA;  
}

.card__status {
  font-size: .8em;
  color: #D7BDCA;
}

.card__description {
  padding: 0 2em 2em;
  margin: 0;
  color: #D7BDCA;
  font-family: "MockFlowFont";   
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}    

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
                `}
      </style>
    </>
  )
}

export default AboutUs