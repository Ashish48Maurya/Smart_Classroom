import React, { useRef, useState } from 'react'
import Navbar from '../Navbar'
import { useAuth } from '../store/auth'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Update = () => {

    const { person, storeTokenInLS, backend_api } = useAuth();

    const [token, setToken] = useState("");

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
                toast.success("Registration Successfull !!!");
                navigate("/login");
            } else {
                return toast.error("Username Already Exist!!!");
            }
        }
        catch (error) {
            console.log(error);
        }
    };

  return (
      <>
          <Navbar />
          <div className="main-block">
              <h1>Update Details</h1>
              <form onSubmit={()=>{handleSubmit()}}>
                  <label id="icon" htmlFor="name"><i className="fas fa-user"></i></label>
                  <input type="text" name="name" id="name" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} required />
                  <label id="icon" htmlFor="name"><i className="fas fa-envelope"></i></label>
                  <input type="text" name="name" id="name" placeholder="Email" value={mail}
                      onChange={(e) => setMail(e.target.value)} required />
                  <label id="icon" htmlFor="name"><i className="fas fa-id-card"></i></label>
                  <input type="text" name="name" id="name" placeholder="SAP ID" value={student_id}
                      onChange={(e) => setStudentId(e.target.value)} required />
                  <label id="icon" htmlFor="name"><i className="fa fa-graduation-cap"></i></label>
                  <input type="text" name="name" id="name" placeholder="Branch" />
                  <label id="icon" htmlFor="name"><i className="fa fa-calendar"></i></label>
                  <input type="text" name="name" id="name" placeholder="Year Of Education" value={branch}
                      onChange={(e) => setBranch(e.target.value)} required />
                  <label id="icon" htmlFor="name"><i className="fas fa-unlock-alt"></i></label>
                  <input
                      type="password"
                      name="name"
                      id="name"
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
                      <button type="submit" href="/">Register</button>
                  </div>
              </form>
          </div>
    </>
  )
}

export default Update