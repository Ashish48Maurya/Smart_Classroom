import React, { useState } from 'react'
import Navbar from './Navbar';
import { useAuth } from './store/auth';
import { toast } from 'react-toastify';


export default function ForgetPasswordEmail() {
    const {person,backend_api} = useAuth();
    const [mail, setMail] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!mail) {
            return toast.error("Mail ID is Required!!!");
        }

        try {
            const response = await fetch(`${backend_api}/forgetPass/${mail}/${person}`, {
                method: "get",
            });

            if (response.status === 200) {
                const res_data = await response.json();
                toast.success("Password Reset Link Sent On Your Mail");
            } else {
                return toast.error("Invalid Credentials!!!");
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <Navbar />
            <div className="main-block">
                <h1>Enter Email</h1>
                <form id="registerForm" onSubmit={handleSubmit}>
                    <label htmlFor="email" id="icon"><i className="fas fa-envelope"></i></label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        required
                    />
                    <hr />
                    <div className="button-block">
                        <button type="submit">Verify</button>
                    </div>
                </form>
            </div>
            <style jsx>{`
        h1,p {
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
      input[type=email]{
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
