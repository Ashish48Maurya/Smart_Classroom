import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { useAuth } from './store/auth'
import { useNavigate } from 'react-router-dom';
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

export default function Login() {
    const { person, storeTokenInLS, backend_api, setPerson } = useAuth();
    const navigate = useNavigate();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [deviceToken, setDeviceToken] = useState('');

    async function requestPermission() {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            const dtoken = await getToken(messaging, {
                vapidKey:
                    "BGB_y7Y1bn2cNClO6RfDBOlI_Yh1gF3XEqu_3PVwyTwpiYmn1gvRIrKtiQTn08j62_RYzWCF4ik5x7taEKrz0y4",
            });
            setDeviceToken(dtoken);
            console.log(dtoken)
        } else if (permission === "denied") {
            alert("You denied for the notification");
        }
    }

    useEffect(() => {
        requestPermission();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!password || !mail) {
            return alert("All Fields are Required!!!");
        }

        try {
            const response = await fetch(`${backend_api}/login/${person}?deviceToken=${deviceToken}`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: mail,
                    password: password,
                }),
            });

            if (response.status === 200) {
                const res_data = await response.json();
                storeTokenInLS(res_data.token);
                localStorage.setItem("USER", JSON.stringify(res_data.user));
                window.alert("Login Successful");
                navigate('/');
            } else {
                return alert("Invalid Credentials!!!");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="main-block">
                <h1>Login</h1>
                <form id="registerForm" onSubmit={handleSubmit}>
                    <label htmlFor="email" id="icon"><i className="fas fa-envelope"></i></label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        required
                    />
                    <label htmlFor="password" id="icon"><i className="fas fa-unlock-alt"></i></label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <select value={person} onChange={(e) => { setPerson(e.target.value) }}>
                        <option value="Teacher">Teacher</option>
                        <option value="Student">Student</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <hr />
                    <div className="button-block">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>

            <style jsx>{`
        html, body {
      display: flex;
      justify-content: center;
      height: 100%;
      }
      body, div, h1, form, input, p { 
      padding: 0;
      margin: 0;
      outline: none;
      font-family: Roboto, Arial, sans-serif;
      font-size: 16px;
      color: #666;
      }
      h1 {
      padding: 10px 0;
      font-size: 32px;
      font-weight: 300;
      text-align: center;
      color: #fff !important;
      }
      p {
      font-size: 12px;
      }
      hr {
      color: #a9a9a9;
      opacity: 0.3;
      }
      .main-block {
      max-width: 60%; 
      min-height: auto; 
      min-width:80%;
      padding: 50px 25px;
      margin: 100px auto;
      border-radius: 20px; 
      border: solid 1px #ccc;
      box-shadow: 1px 2px 5px rgba(0,0,0,.31); 
      background: #134679; 
      }
      form {
      margin: 0 30px;
      }
      label#icon {
      margin: 0;
      border-radius: 5px 0 0 5px;
      }
      input[type=text], input[type=password] , input[type=phone] {
      width: calc(100% - 57px);
      height: 42px;
      margin: 13px 0 0 -5px;
      padding-left: 10px; 
      border-radius: 0 5px 5px 0;
      border: solid 1px #cbc9c9; 
      box-shadow: 1px 2px 5px rgba(0,0,0,.09); 
      background: #fff; 
      }
      input[type=password] {
      margin-bottom: 15px;
      }
      #icon {
      display: inline-block;
      padding: 9.3px 15px;
      box-shadow: 1px 2px 5px rgba(0,0,0,.09); 
      background: #1c87c9;
      color: #fff;
      text-align: center;
      }
      .button-block {
      margin-top: 10px;
      text-align: center;
      }
      .button-block button {
      width: 100%;
      padding: 10px 0;
      margin: 10px auto;
      border-radius: 5px; 
      border: none;
      background: #1c87c9; 
      font-size: 14px;
      font-weight: 600;
      color: #fff;
      }
      button:hover {
      background: #26a9e0;
      }
      .fa-id-card,.fa-graduation-cap,.fa-phone,.fa-laptop{
        width:15px;
      }
      `}</style>
        </>
    );
}
