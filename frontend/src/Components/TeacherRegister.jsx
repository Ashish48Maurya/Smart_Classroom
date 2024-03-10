import React, { useState, useRef } from 'react'
import { useAuth } from './store/auth'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function TeacherRegister() {
    const navigate = useNavigate();
    const { token, storeTokenInLS, backend_api } = useAuth();

    const inputref = useRef(null)
    const iconref = useRef(null);
    const [iconState, setIcon] = useState(false)
    const handleClick = () => {
        const inputattr = inputref.current.getAttribute('type');
        inputattr === 'password'
            ? inputref.current.setAttribute('type', 'text')
            : inputref.current.setAttribute('type', 'password');
        setIcon(!iconState);
    };

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passRege = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mail, setMail] = useState('');
    const [teacher_id, setTeacherId] = useState('');
    const [subject, setSubject] = useState('');
    const [phone, setPhone] = useState('');
    const [department, setDepartment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password || !mail) {
            return alert("All Fields Are Required!!!");
        }

        if (!emailRegex.test(mail)) {
            alert("Invalid Email");
            return;
        }
        else if (!passRege.test(password)) {
            alert("Password must contain atleast 8 characters, including atleast 1 number and 1 includes both lower and uppercase letters and special characters for example #,?!");
            return;
        }

        try {
            const response = await fetch(`${backend_api}/registerFaculty`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer  ${token}`
                },
                body: JSON.stringify({
                    fullname: username,
                    department,
                    subject,
                    password,
                    email: mail,
                    phoneNo: phone,
                    teacherID: teacher_id
                }),
            });

            console.log(token);
            if (response.status === 200) {
                const res_data = await response.json();
                console.log("response from server ", res_data);
                storeTokenInLS(res_data.token);
                navigate('/teachers');
                alert("Registration Successfull !!!");
            } else {
                return console.log(response);
            }
        }
        catch (error) {
            alert(error);
        }
    };


    return (
        <>
            <Navbar />
            <div className="main-block">
                <h1>Teacher Registration</h1>
                <form id="registerForm" onSubmit={handleSubmit}>
                    <label id="icon" htmlFor="name"><i className="fas fa-user"></i></label>
                    <input type="text" name="name" id="name" placeholder="Full Name" value={username}
                        onChange={(e) => setUsername(e.target.value)} required />
                    <label id="icon" htmlFor="name"><i className="fas fa-envelope"></i></label>
                    <input type="text" name="name" id="email" placeholder="Email" value={mail}
                        onChange={(e) => setMail(e.target.value)} required />
                    <label id="icon" htmlFor="name"><i className="fas fa-phone"></i></label>
                    <input type="phone" name="name" id="phone" placeholder="Phone No." value={phone}
                        onChange={(e) => setPhone(e.target.value)} required />
                    <label id="icon" htmlFor="name"><i className="fa fa-laptop"></i></label>
                    <input type="text" name="name" id="dept" placeholder="Department" value={department}
                        onChange={(e) => setDepartment(e.target.value)} required />
                    <label id="icon" htmlFor="name"><i className="fas fa-id-card"></i></label>
                    <input type="text" name="name" id="idc" placeholder="Teacher Id" value={teacher_id}
                        onChange={(e) => setTeacherId(e.target.value)} required />
                    <label id="icon" htmlFor="name"><i className="fa fa-laptop-code"></i></label>
                    <input type="text" name="name" id="subject" placeholder="Subject" value={subject}
                        onChange={(e) => setSubject(e.target.value)} required />
                    <label id="icon" htmlFor="name"><i className="fas fa-unlock-alt"></i></label>
                    <input
                        type="password"
                        name="name"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        ref={inputref}
                    />
                    <span className='see' onClick={handleClick}>
                        <i className={`fa ${iconState ? 'fa-eye-slash' : 'fa-eye'}`} ref={iconref}></i>
                    </span>
                    <hr />
                    <div className="button-block">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>


            <style>{`
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
      .see{
        position:relative;
        right:30px;
        cursor:pointer;
      }
      p {
      font-size: 12px;
      }
      hr {
      color: #a9a9a9;
      opacity: 0.3;
      }
      .main-block {
      max-width: 80%; 
      min-width:60%;
      min-height: auto; 
      padding: 10px 0;
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
      .fa-id-card,.fa-graduation-cap,.fa-phone,.fa-laptop,.fa-laptop-code{
        text-align:center;
        width:15px;
      } `}
            </style>


        </>
    )
}