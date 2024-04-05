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
      }
      p {
      font-size: 12px;
      }
      hr {
      color: #a9a9a9;
      opacity: 0.3;
      }
      .main-block {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 100px auto;
        background: rgb(246,243,249);
        background: linear-gradient(163deg, rgba(246,243,249,1) 14%, rgba(112,137,174,1) 100%);
        border-radius: 30px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(9.6px);
        -webkit-backdrop-filter: blur(9.6px);
        width: 80%;
        height: auto;
        padding:20px;
      }
      form {
      margin: 0 30px;
      }
      .account-type, .gender {
      margin: 15px 0;
      }
      label#icon {
      display: inline-block;
      padding: 9.3px 15px;
      background: rgb(0,102,255);
      background: linear-gradient(163deg, rgb(255, 255, 255) 14%, rgbargb(154, 165, 183)%);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      color: #fff;
      text-align: center;
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
      background: rgb(0,102,255);
      background: linear-gradient(163deg, rgba(0,102,255,1) 0%, rgba(110,55,165,1) 82%); 
      font-size: 14px;
      font-weight: 600;
      color: #fff;
      transition:background-color ease 1s;
      }
      button:hover {
      background: rgb(0,102,255);
      background: linear-gradient(163deg, rgb(255, 255, 255) 14%, rgbargb(154, 165, 183)%);
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