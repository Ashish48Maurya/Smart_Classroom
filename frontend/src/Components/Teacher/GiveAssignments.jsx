import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Navbar'
import { useAuth } from '../store/auth'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Assignments() {
    const { backend_api, token } = useAuth();
    const navigate = useNavigate();
    const [file, setFile] = useState("");
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [yos, setYos] = useState('');
    const [subject, setSubject] = useState('')
    const [department, setDepartment] = useState('');
    const [src, setSrc] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description || !dueDate) {
            return toast.error("All Fields Are Required!!!");
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("dueDate", dueDate);
        formData.append("subject", subject);
        formData.append("file", file);
        formData.append("yearOfStudy", yos);
        formData.append("department", department)

        // console.log(title, description, dueDate, yos, subject, file, department);

        try {
            const response = await fetch(`${backend_api}/give_assignment`, {
                method: "post",
                headers: {
                    // "Content-type": "multipart/form-data",
                    "Authorization": `Bearer  ${token}`
                },
                body: formData,
            });

            if (response.status === 200) {
                const res_data = await response.json();
                console.log("response from server ", res_data);
                // storeTokenInLS(res_data.token);
                navigate('/assignments');
                toast.success("Assignment assigned successfully !!!");
            } else {
                return console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    };



    const loadfile = (event) => {
        var output = document.getElementById("output");
        output.src = URL.createObjectURL(event.target.files[0]);
        setSrc(output.src);
        output.onload = function () {
            URL.revokeObjectURL(output.src);
        };
        setFile(event.target.files[0]);
        output.style.height = "max-content";
    };

    return (
        <>
            <Navbar />
            <div className="main-block col-12 col-lg-6 col-md-8 col-sm-10">
                <h1>Create Assignment</h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <label id="icon" htmlFor="title"><i className="fas fa-file"></i></label>
                    <input type="text" name="title" id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    <label id="icon" htmlFor="description"><i className="fas fa-envelope"></i></label>
                    <input type="text" name="description" id="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    <label id="icon" htmlFor="dueDate"><i className="fas fa-calendar-alt"></i></label>
                    <input type="date" name="dueDate" id="dueDate" placeholder="Due Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
                    <label id="icon" htmlFor="yearOfStudy"><i className="fas fa-graduation-cap"></i></label>
                    <input type="text" name="yearOfStudy" id="yearOfStudy" placeholder="Year of Study" value={yos} onChange={(e) => setYos(e.target.value)} required />
                    <label id="icon" htmlFor="department"><i className="fas fa-laptop-code"></i></label>
                    <input type="text" name="department" id="department" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                    <label id="icon" htmlFor="department"><i className="fas fa-laptop-code"></i></label>
                    <input type="text" name="department" id="department" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} required />
                    <label id="icon" htmlFor="name"><i className="fas fa-file"></i></label>
                    <input
                        type="file"
                        accept="file/*"
                        name="file"
                        onChange={(event) => loadfile(event)}
                    />
                    <span style={{
                        color: "white"
                    }}>Preview</span>

                    <iframe src={src} frameBorder="0" id="output" className='preview' />
                    <div className="button-block">
                        <button type="submit" href="/">Post</button>
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
      height: auto; 
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
      input[type=text], input[type="date"] , input[type="file"] {
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
        width:100%;
        height:0;
      }
                `}
            </style>
        </>
    )
}