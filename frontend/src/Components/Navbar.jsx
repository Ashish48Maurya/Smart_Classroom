import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './store/auth';
import logo from '../assets/Logo.png';

export default function Navbar({ user }) {
  const { isLoggedIn, LogoutUser } = useAuth();
  const navigate = useNavigate();

  const data = localStorage.getItem("USER");
  const userData = JSON.parse(data);

  return (
    <>
      <div className="nav-cont">
        <nav style={{ maxWidth: "100%" }} className="navbar navbar-expand-lg my-auto py-1">
          <div className="container-fluid" style={{ padding: "10px" }}>
            {!isLoggedIn && (<Link className="navbar-brand d-flex" to='/'>
              <img src={logo} className='logo' alt="" />
            </Link>)}
            {userData && (
              <>{
                userData.user === "Student" && (
                  <Link className="navbar-brand d-flex" to='/'>
                    <h1 className='dname'>Student Dashboard</h1>
                  </Link>
                )}
                {
                  userData.user === "Admin" && (
                    <Link className="navbar-brand d-flex" to='/'>
                      <h1 className='dname'>Admin Dashboard</h1>
                    </Link>
                  )}
                {
                  userData.user === "Teacher" && (
                    <Link className="navbar-brand d-flex" to='/'>
                      <h1 className='dname'>Teacher Dashboard</h1>
                    </Link>
                  )}
              </>
            )}
            <button className="navbar-toggler" style={{ "border": "2px solid black", marginRight: "15px" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-lg-0 fs-5 fw-semibold">
                {userData && (
                  <>
                    {userData.user === "Student" && (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to='/attendance'>Attendance</Link>
                        </li>
                      </>
                    )}
                    {userData.user === "Admin" && (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to='/manage'>Classrooms</Link>
                        </li>
                        <li className="nav-item">
                          <Link className='nav-link active' style={{ maxHeight: "min-content" }} to='/students'>Students</Link>
                        </li>
                        <li className="nav-item">
                          <Link className='nav-link active' style={{ maxHeight: "min-content" }} to='/teachers'>Teachers</Link>
                        </li>
                        <li className="nav-item">
                          <Link className='nav-link active' style={{ maxHeight: "min-content" }} to='/studentregister'>Register Student</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link active" type="button" style={{ maxHeight: "min-content" }} to='/teacherregister'>Register Teacher</Link>
                        </li>
                      </>
                    )}
                    {userData.user === "Teacher" && (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to='/classroom'>FindClass</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to='/connect'>Connect</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to='/tattendance'>Attendance</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to='/assignments'>Assignments</Link>
                        </li>
                      </>
                    )}
                  </>
                )}
              </ul>
              <form className="d-flex fs-6 fw-medium ms-auto navbar-nav">
                {isLoggedIn ? (
                  <>
                    <div className="btn-txt-grp">
                      <p className='user-name'>{userData.fullname}</p>
                      <button className="btn btn-outline-danger ms-2 fw-bold" type="button" style={{ maxHeight: "min-content", background: "none", color: "red", padding: "5px 10px", marginRight: "20px", fontSize: "15px" }} onClick={() => { LogoutUser(); navigate('/login') }}>Logout</button>
                    </div>
                  </>
                ) : (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/aboutUs'>About Us</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/our-services'>Our Services</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/client-reviews'>Client Reviews</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/contact-us'>Contact Us</Link>
                      </li>
                      <button className="btn btn-outline-primary ms-2 fw-bold" type="button" style={{ maxHeight: "min-content", color: "#0d6efd", background: "none", padding: "4px 8px", fontSize: "15px" }} onClick={() => { navigate('/login') }}>Login</button>
                  </>
                )}
              </form>
            </div>
          </div>
        </nav>
      </div>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap')
                * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                }
                a:hover, a {
                  text-decoration: none;
                }
                body {
                  width: 100%;
                  overflow-x: hidden;
                  z-index: 10;
                }
                .dname{
                  color:black !important;
                  font-size:25px !important;
                }
                .btn-txt-grp p{
                  margin: auto 0 !important;
                  cursor: auto !important;
                  font-size: 18px !important;
                  font-weight: 600 !important;
                  color: #1d46ff !important;
                }
                .logo{
                  width:5vw;
                }
                nav {
                  margin: 10px 10px 0 10px;
                  background: none;
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                .nav-cont {
                  width: 97%;
                  min-width: 90%;
                  background: rgba(255, 255, 255, 0.26);
                  border-radius: 50px;
                  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                  backdrop-filter: blur(9.6px);
                  margin: 10px 20px 0 20px;
                  -webkit-backdrop-filter: blur(9.6px);
                  position: fixed;
                  top: 0;
                  left: 0;
                  z-index: 100;
                }
                .gugi-regular {
                  font-family: "Gugi", sans-serif;
                  font-weight: 400;
                  font-style: normal;
                }
                .navbar-nav{
                  margin-right:20px;
                }
                li {
                  margin-inline: 10px;
                }
                .nav-item{
                  font-size: 16px !important;
                }
                .nav-item select {
                  margin-top: 10px;
                }
                .btn-txt-grp {
                  display: flex;
                  justify-content: center;
                  align-items: baseline;
                }
                @media screen and (max-width: 992px) {
                  .btn-txt-grp {
                    flex-direction: column;
                  }
                  .logo{
                    width:10vw;
                  }
                }
                @media screen and (max-width: 650px) {
                  nav {
                    max-width: 80%;
                    flex-direction: column;
                  }
                  .nav-cont {
                    width: 10vw;
                  }
                  .logo{
                    width:15vw;
                  }
                }
              `}
      </style>
    </>
  );
}