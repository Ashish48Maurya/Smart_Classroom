import React from 'react'
import Navbar from './Navbar'
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
        <div className="row">
          <div className="column">
            <div className="card">
              <img src="https://media.licdn.com/dms/image/D4D03AQFuOJBwzRKS3g/profile-displayphoto-shrink_400_400/0/1675950175452?e=1717027200&v=beta&t=dLTmUKMtFdyDVPI9Qdq_mLYseVhhc9zuQRhs0faAfw0" alt="Divy" style={{ width: "100%" }} />
              <div className="container">
                <h2>Divy Arun Mav</h2>
                <p className="title">Tech &amp; Idea</p>
                <p>Divy Mav is one of the important members of our organization when it comes about tech and ideas.</p>
                <p>divy.mav@gmail.com</p>
                <p>
                  <Link className="button" to='https://www.linkedin.com/in/divy-mav-7b82b0249/?originalSubdomain=in'>Contact</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src="data:image/png;base64,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" alt="Ashish" style={{ width: "100%" }} />
              <div className="container">
                <h2>Ashish Vinod Maurya</h2>
                <p className="title">Tech</p>
                <p>Ashish Maurya is the member of our organization when it comes to convert our ideas into real-world applications.</p>
                <p>ashish.gmandu@gmail.com</p>
                <p>
                  <Link className="button" to='https://github.com/Ashish48Maurya'>Contact</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src="https://media.licdn.com/dms/image/D4D03AQEJv1UBMfKy2g/profile-displayphoto-shrink_400_400/0/1674321046278?e=1717027200&v=beta&t=cGdtJMaGC8-penyTjEumzt0n-jsdq_lGKXd6Ur-HfpU" alt="Vipul" style={{ width: "100%" }} />
              <div className="container">
                <h2>Vipul Rajesh Mahtre</h2>
                <p className="title">Designer & Idea</p>
                <p>A very important member of the organization for creating  designs ideas for problems around us.</p>
                <p>vipulmahtre@gmail.com</p>
                <p>
                  <Link className="button" to="https://www.linkedin.com/in/vipul-mhatre/?originalSubdomain=in" >Contact</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src="https://avatars.githubusercontent.com/u/112983519?v=4" alt="Kaushal" style={{ width: "100%" }} />
              <div className="container">
                <h2>Kaushal Shambhusharan Jha</h2>
                <p className="title">Tester & DevOps Engineer</p>
                <p>Kaushal play's a very crucial role of testing the app finding bugs and fixing them.</p>
                <p>kaushal.bael@gmail.com</p>
                <p>
                  <Link className="button" to="https://www.linkedin.com/in/kaushal-jha-kj1710/" >Contact</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
      <Footer />
      <style>
        {`
body {
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 100px;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.row{
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
}

.column {
  float: left;
  width: 32.5%;
  margin:0px 5px;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
  border-radius:20px;
}

.card img{border-top-right-radius:20px;border-top-left-radius:20px;}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #0d6efd;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #0d6efd;
  text-align: center;
  border-radius:15px;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
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