import React, { useState } from 'react';

const NewPassword = () => {
    const [password, setpassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your logic for handling the entered password
        console.log('password submitted:', password);
        // You may want to send a request to the server to handle the password reset process
    };

    return (
        <>
            <div className="main-block">
                <h1>Forgot Password</h1>
                <p>Enter your New Password</p>

                <form id="registerForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="password" id='icon'><i className="fas fa-key"></i></label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            required
                        />
                        <label htmlFor="password" id='icon'><i className="fas fa-key"></i></label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="confirm password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            required
                        />
                        <div className="button-block">
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <style>
                {`
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
      input[type=password]{
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
                `}
            </style>
        </>
    );
};

export default NewPassword;
