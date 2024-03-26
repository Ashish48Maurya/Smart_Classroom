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
        <nav style={{ maxWidth: "100%" }} className="navbar navbar-expand-lg my-auto ">
          <div className="container-fluid">
            <Link className="navbar-brand" to='/'>
              <img src={logo} className='logo' alt="" />
            </Link>
            <button className="navbar-toggler" style={{ "border": "2px solid black" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-lg-0 fs-5 fw-semibold">
                {/* <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                </li> */}
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
                      <button className="btn btn-outline-danger ms-2 fw-bold" type="button" style={{ maxHeight: "min-content", background: "none", color: "red", padding: "5px 10px" }} onClick={() => { LogoutUser(); navigate('/login') }}>Logout</button>
                    </div>
                  </>
                ) : (
                  <>
                      <button className="btn btn-outline-primary ms-2 fw-bold" type="button" style={{ maxHeight: "min-content", background: "none", color: "red", padding: "5px 10px" }} onClick={() => { navigate('/login') }}>Login</button>
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
                  margin: 0 !important;
                  padding: 0 !important;
                  box-sizing: border-box !important;
                }
                a:hover, a {
                  text-decoration: none !important;
                }
                body {
                  width: 100% !important;
                  overflow-x: hidden !important;
                  z-index: 10 !important;
                }
                .btn-txt-grp p{
                  margin: auto 0 !important;
                  cursor: auto !important;
                  font-size: 18px !important;
                  font-weight: 600 !important;
                  color: #1d46ff !important;
                }
                .logo{
                  width:5vw !important;
                  height:max-content !important;
                }
                .nav-link{
                  font-size:large !important;
                }
                .user-name{

                }
                nav {
                  // margin: 10px 10px 0 10px !important;
                  background: none !important;
                  width: 100% !important;
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                }
                .nav-cont {
                  width: max-content !important;
                  min-width: 95% !important;
                  background: rgba(255, 255, 255, 0.26) !important;
                  border-radius: 50px !important;
                  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
                  backdrop-filter: blur(9.6px) !important;
                  margin: 10px 20px 0 20px !important;
                  -webkit-backdrop-filter: blur(9.6px) !important;
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                  position: fixed !important;
                  top: 0 !important;
                  left: 0 !important;
                  z-index: 100 !important;
                }
                .gugi-regular {
                  font-family: "Gugi", sans-serif !important;
                  font-weight: 400 !important;
                  font-style: normal !important;
                }
                li {
                  margin-inline: 10px !important;
                }
                .nav-item select {
                  margin-top: 10px !important;
                }
                .navbar-toggler {
                  position: absolute !important;
                  top: 5px !important;
                  right: 2% !important;
                  max-width: 55px !important;
                }
                .btn-txt-grp {
                  display: flex !important;
                  justify-content: center !important;
                  align-items: baseline !important;
                }
                @media screen and (max-width: 992px) {
                  .btn-txt-grp {
                    flex-direction: column !important;
                  }
                  .logo{
                    width:10vw !important;
                  }
                }
                @media screen and (max-width: 650px) {
                  nav {
                    max-width: 80% !important;
                    flex-direction: column !important;
                  }
                  .nav-cont {
                    width: 10vw !important;
                  }
                  .logo{
                    width:15vw !important;
                  }
                }
              `}
      </style>
    </>
  );
}
