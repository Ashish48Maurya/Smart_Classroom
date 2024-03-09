import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import { useAuth } from './store/auth'
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function StudentRegister() {
    const { person, storeTokenInLS, backend_api } = useAuth();

    const [token, setToken] = useState("");

    const inputref = useRef(null)
    const iconref = useRef(null);
    const [iconState, setIcon] = useState(false)
    const handleClick = () => {
        const inputattr = inputref.current.getAttribute('type')
        inputattr === "password" ? inputref.current.setAttribute('type', 'text') : inputref.current.setAttribute('type', 'password')
        inputattr === "text" ? iconref.current.className("fa fa-eye-slash") : iconref.current.className("fa fa-eye")
        iconState ? setIcon(false) : setIcon(true)
    }



    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passRege = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mail, setMail] = useState('');
    const [student_id, setStudentId] = useState('');
    const [branch, setBranch] = useState('');
    const [yos, setYos] = useState('');

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
            const response = await fetch(`${backend_api}/registerStudent`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    username,
                    password,
                    mail,
                    student_id,
                    branch,
                    yos,
                    type: person
                }),
            });

            if (response.status === 200) {
                const res_data = await response.json();
                console.log("response from server ", res_data);
                storeTokenInLS(res_data.token);
                alert("Registration Successfull !!!");
                navigate("/login");
            } else {
                return alert("Username Already Exist!!!");
            }
        }
        catch (error) {
            console.log(error);
        }
    };


    const [pass, setPass] = useState('');
    return (
        <>
            <Navbar />
            {/* <div className="container ">

                <div className="form-body">
                    <form id="registerForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="username">Username:</label>
                            <input type="text" id="username" name="username"  />
                        </div>
                        <div className="form-group">
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password"  />
                        </div>
                        <div className="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email"  />
                        </div>
                        <div className="form-group">
                            <label for="student-id">Student ID:</label>
                            <input type="student-id" id="student-id" name="student-id"  />
                        </div>
                        <div className="form-group">
                            <label for="branch">Branch:</label>
                            <input type="branch" id="branch" name="branch"  />
                        </div>
                        <div className="form-group">
                            <label for="yos">Year Of Study:</label>
                            <input type="yos" id="yos" name="yos" value={yos}
                                onChange={(e) => setYos(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <button type="submit">SignUp</button>
                        </div>
                    </form>
                </div>
            </div > */}





            <div class="main-block">
                <h1>Student Registration</h1>
                <form action="/">
                    <label id="icon" for="name"><i class="fas fa-user"></i></label>
                    <input type="text" name="name" id="name" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <label id="icon" for="name"><i class="fas fa-envelope"></i></label>
                    <input type="text" name="name" id="name" placeholder="Email" value={mail}
                        onChange={(e) => setMail(e.target.value)} required />
                    <label id="icon" for="name"><i class="fas fa-id-card"></i></label>
                    <input type="text" name="name" id="name" placeholder="SAP ID" value={student_id}
                        onChange={(e) => setStudentId(e.target.value)} required />
                    <label id="icon" for="name"><i class="fa fa-graduation-cap"></i></label>
                    <input type="text" name="name" id="name" placeholder="Branch"  />
                    <label id="icon" for="name"><i class="fa fa-calendar"></i></label>
                    <input type="text" name="name" id="name" placeholder="Year Of Education" value={branch}
                        onChange={(e) => setBranch(e.target.value)} required />
                    <label id="icon" for="name"><i class="fas fa-unlock-alt"></i></label>
                    <input type="password" name="name" id="name" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} required ref={inputref} /><span className='see' onClick={() => { handleClick() }}><i class="fa fa-eye-slash" ref={iconref}></i></span>
                    <hr />
                    <div class="btn-block">
                        <button type="submit" href="/">Register</button>
                    </div>
                </form>
            </div>



            {/* <style>{`


.container {
    margin-top:8%;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 100%;
    max-width: 400px;
}

.checkbox-area{
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    width:max-content;
}


.form-header {
    background-color: #4CAF50;
    color: #fff;
    padding: 20px;
    text-align: center;
}

.form-body {
    padding: 20px;
}

.form-group {
    width:100%;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 5px;
}

button {
    background-color: #0d6efd;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin:20px 0;
}

button:hover {
    background-color: #45a049;
}
`}</style> */}

            <style>
                {`
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
      .see{
        position:relative;
        right:30px;
        cursor:pointer;
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
      .account-type, .gender {
      margin: 15px 0;
      }
      label#icon {
      margin: 0;
      border-radius: 5px 0 0 5px;
      }
      input[type=text], input[type=password] {
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
      .btn-block {
      margin-top: 10px;
      text-align: center;
      }
      button {
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
      .fa-id-card,.fa-graduation-cap{
        width:15px;
      } 
                `}
            </style>
        </>
    )
}