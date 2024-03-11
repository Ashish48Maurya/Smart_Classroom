import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from './Components/store/auth';
import Navbar from './Components/Navbar'
import { Link } from 'react-router-dom';

export default function ForgetPasswordPass() {
    const {USER,token,id} = useParams();
    const {backend_api} = useAuth();
    const navigate = useNavigate();
    const [password,setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!password) {
            return alert("Password is Required!!!");
        }

        try {
            const response = await fetch(`${backend_api}/resetPassword/${USER}/${token}/${id}`, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    password: password,
                }),
            });

            if (response.status === 200) {
                const res_data = await response.json();
                console.log(res_data);
                window.alert("Password Reset Successfully");
                navigate('/')
            } else {
                return alert("Server Error");
            }
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <>
    <Navbar />
            <div className="main-block">
                <h1>Enter Password</h1>
                <form id="registerForm" onSubmit={handleSubmit}>
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
                   
                    <hr />
                    <div className="button-block">
                        <button type="submit">Reset</button>
                    </div>
                </form>
            </div>

            <style jsx>{`
        html, body {
      display: flex;
      justify-content: center;
      height: 100%;
      }
      .flex{
        justify-content: space-between;
        align-items:center;
        display:flex;
      }
      body, div, h1, form, input, p { 
      padding: 0;
      margin: 0;
      outline: none;
      font-family: Roboto, Arial, sans-serif;
      font-size: 16px;
      color: #666;
      }
      a:hover , a{
        color:white;
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
  )
}
