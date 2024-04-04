import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from './store/auth';
import Navbar from './Navbar';
import {toast} from 'react-toastify'

const EditTeacher = () => {
    const { backend_api, token } = useAuth();
    const { id } = useParams();
    const data = localStorage.getItem("USER");
    const userData = JSON.parse(data);
    const [teacherData, setTeacherData] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhone] = useState('');

    const updateTeacher = async () => {
        try {
            const res = await fetch(`${backend_api}/update_info/${id}/${userData.user}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullname: name,
                    email: email,
                    phoneNo: phoneNo,
                }),
            });
            if (res.status === 200) {
                const res_data = await res.json();
                console.log(res_data);
                toast.success("Edited Successfully");
            }
        } catch (error) {
            console.log(error);
        }
    }


    const getTeacher = async () => {
        try {
            const res = await fetch(`${backend_api}/teach/${id}`, {
                method: "get",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (res.status === 200) {
                const res_data = await res.json();
                setTeacherData(res_data.teacher);
                setName(res_data.teacher.fullname);
                setEmail(res_data.teacher.email);
                setPhone(res_data.teacher.phoneNo);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTeacher();
    }, [])


    return (
        <>
            <Navbar />
            <h1 className='text-center'>User Information</h1>
            {
                teacherData && (
                    <div className="container">
                        <div className="left">
                            <div className="info-item">
                                <strong>Full Name:</strong>
                                <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" />
                            </div>
                            <div className="info-item">
                                <strong>Email:</strong>
                                <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" />
                            </div>
                            <div className="info-item">
                                <strong>Phone Number:</strong>
                                <input value={phoneNo} onChange={(e) => { setPhone(e.target.value) }} type="text" />
                            </div>
                            <button className='btn btn-outline-success fw-bolder' onClick={updateTeacher}>Edit</button>
                        </div>
                        <div className='right'>
                            <img src={`${backend_api}/${teacherData.file}`} alt="" height={"200px"} width={"200px"} />
                        </div>
                    </div>
                )
            }

            <style>{`
                body{
                    margin-top: 150px;
                }
                input{
                    margin-left:10px;
                    border:none;
                }
                input::focus{
                    outline:red;
                }
                .left{
                    margin-top:auto;
                    margin-bottom:auto;
                }
                .container {
                    display:flex;
                    justify-content:space-between;
                    max-width: 800px;
                    margin: 20px auto;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                }
        
                h1 {
                    font-size: 24px;
                    color: #333;
                    margin-bottom: 20px;
                }
        
                .info-item {
                    margin-bottom: 10px;
                    font-size: 16px;
                    color: #555;
                }
        
                .info-item strong {
                    font-weight: bold;
                    color: #333;
                }
                @media screen and (max-width:700px){
                    .teacher-details{
                        flex-direction:column-reverse;
                        margin:10px 30px;
                    }
                    .profile-img{
                        width:40vw;
                        height:40vw;
                    }
                }
            `}</style>
        </>
    );
}

export default EditTeacher;
