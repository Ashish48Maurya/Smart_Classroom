import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import { useAuth } from './store/auth'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Loader = () => <h1>Registering student please wait....</h1>;

export default function StudentRegister() {
    const { backend_api, token } = useAuth();

    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [posted, setPosted] = useState(false);

    const inputref = useRef(null)
    const iconref = useRef(null);
    const [iconState, setIcon] = useState(false);
    const handleClick = () => {
        const inputattr = inputref.current.getAttribute('type');
        inputattr === 'password'
            ? inputref.current.setAttribute('type', 'text')
            : inputref.current.setAttribute('type', 'password');
        setIcon(!iconState);
    };

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passRege = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mail, setMail] = useState('');
    const [student_id, setStudentId] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [phone, setPhone] = useState('');
    const [department, setDepartment] = useState('');

    useEffect(() => {
        if (url && posted) {
            console.log(url, posted);

            if (!username || !password || !mail) {
                return toast.error("All Fields Are Required!!!");
            }

            if (!emailRegex.test(mail)) {
                toast.error("Invalid Email");
                return;
            }
            else if (!passRege.test(password)) {
                toast.error("Password must contain atleast 8 characters, including atleast 1 number and 1 includes both lower and uppercase letters and special characters for example #,?!");
                return;
            }

            fetch(`${backend_api}/registerStudent`, {
                method: "post",
                headers: {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    fullname: username,
                    department,
                    password,
                    email: mail,
                    phoneNo: phone,
                    sapID: student_id,
                    subjects,
                    student_photo: url
                })
            })
                .then(res => res.json)
                .then(data => {
                    if (data.error) {
                        toast.error(data.error);
                    } else {
                        toast.success("Student Registered Successfully !!!");
                        navigate('/students');
                    }
                })
                .catch(err => console.log(err));
        } 
        else {
            console.log(url, posted);
        }
    }, [url, posted])


    // posting image to cloudinary
    const postDetails = async () => {
        setLoading(true);
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "insta-clone");
        data.append("cloud_name", "djy7my1mw");

        await fetch("https://api.cloudinary.com/v1_1/djy7my1mw/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.url);
                setUrl(data.url);
                setLoading(false);
                setPosted(true); // Set posted to true after image upload
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    };


    const loadfile = (event) => {
        var output = document.getElementById("output");
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src); // free memory
        };
        setImage(event.target.files[0]);
    };


    return (
        <>
            <Navbar />
            <div className="main-block col-12 col-lg-6 col-md-8 col-sm-10">
                <h1>Student Registration</h1>
                <form>
                    <label id="icon" htmlFor="name"><i className="fas fa-user"></i></label>
                    <input type="text" name="name" id="name" placeholder="Name" value={username}
                        onChange={(e) => setUsername(e.target.value)} required />
                    <label id="icon" htmlFor="name"><i className="fas fa-envelope"></i></label>
                    <input type="text" name="name" id="email" placeholder="Email" value={mail}
                        onChange={(e) => setMail(e.target.value)} required />
                    <label id="icon" htmlFor="name"><i className="fas fa-id-card"></i></label>
                    <input type="text" name="name" id="sapid" placeholder="SAP ID" value={student_id}
                        onChange={(e) => setStudentId(e.target.value)} required />
                    <label id="icon" htmlFor="name"><i className="fa fa-phone"></i></label>
                    <input type="text" name="name" id="phono" placeholder="Phone Number" value={phone}
                        onChange={(e) => setPhone(e.target.value)} required />
                    <label id="icon" htmlFor="name"><i className="fa fa-laptop"></i></label>
                    <input type="text" name="name" id="dept" placeholder="Department" value={department}
                        onChange={(e) => setDepartment(e.target.value)} required />
                    <label id="icon" htmlFor="name"><i className="fa fa-laptop-code"></i></label>
                    <input type="text" name="name" id="subject" placeholder="Subjects" value={subjects}
                        onChange={(e) => setSubjects(e.target.value.split(','))} required />
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
                    <label id="icon" htmlFor="name"><i className="fas fa-image"></i></label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => loadfile(event)}
                    />
                    <div className='text-center m-2'>
                        <img style={{
                            "height": "200px",
                            "width": "50px",
                            "marginLeft": "auto"
                        }}
                            id="output"
                            src=""
                        />
                    </div>

                    {loading && (
                        <div className="loader">
                            <Loader />
                        </div>
                    )}
                    <div className="button-block">
                        <button onClick={()=>{postDetails()}} type="submit" href="/">Register</button>
                    </div>
                </form>
            </div>
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
      input[type=text], input[type=password] , input[type="file"] {
      width: calc(100% - 57px);
      height: 42px;
      margin: 13px 0 0 -5px;
      padding-left: 10px; 
      border-radius: 0 5px 5px 0;
      border: solid 1px #cbc9c9; 
      box-shadow: 1px 2px 5px rgba(0,0,0,.09); 
      background: #fff; 
      }
      input[type="file"]{
        position:relative;
        bottom:5px;
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
      .fa-id-card,.fa-graduation-cap,.fa-laptop-code,.fa-laptop{
        width:15px;
      } 
      #output{
        min-width:10vw;
        max-width:60vw;
      }
       .loader{
                            display:${loading ? "flex" : "none"};
                            justify-content:center;
                            align-items:center;
                            position:absolute;
                            top:8%;
                            left:33%;
                            border:0px solid black;
                            border-radius:10px;
                            height:500px;
                            width:600px;
                            background-color:white;
                            box-shadow:1px 1px 10px black;
                        }
                `}
            </style>
        </>
    )
}