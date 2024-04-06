import React, { useState } from 'react';
import { Link } from '@mui/material';
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Navbar from '../Navbar';
import { useAuth } from '../store/auth';

export default function ClassRoom() {
    const [data, setData] = useState('');
    const [strength, setStrength] = useState('');
    const userData = JSON.parse(localStorage.getItem("USER"));
    const [time, setTime] = useState('');
    const [year, setYear] = useState("1st");
    const [branch, setBranch] = useState("ICB");
    const { token, backend_api } = useAuth();

    const sendMsg = async (msg) => {
        try {
            const ans = await fetch(`${backend_api}/notify`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data: msg.data,
                    branch,
                    yearOfStudy: year,
                })
            });
            console.log(ans);

            if (ans.ok) {
                toast.success("Message Sent Successfully");
            } else {
                console.error('Error:', ans.statusText);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async () => {
        const ans = await fetch(`${backend_api}/find_class/${strength}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (ans.ok) {
            const dataa = await ans.json();
            console.log("Response:", dataa);
            const sortedData = dataa.classrooms.sort((a, b) => b.strength - a.strength);
            setData(sortedData);
        } else {
            console.error('Error:', ans.statusText);
        }
    }


    const allocate = async (id) => {
        const ans = await fetch(`${backend_api}/reserve_class/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                minute: time,
                facultyName: userData.fullname
            })
        });
        if (ans.ok) {
            const updatedData = data.find((ele) => ele._id !== id);
            setData(updatedData);
            console.log(updatedData);
            console.log(updatedData.classroom_no);
            const notificationData = {
                data: {
                    title: `Classroom Allocated to ${userData.department} Lecture For ${userData.fullname}`,
                    body: `ClassRoom No: ${updatedData.classroom_no}`
                }
            };

            toast.success("Class Allocated Successfully");
            sendMsg(notificationData);
            setStrength("");
        } else {
            console.error('Error:', ans.statusText);
        }
    }

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Class Strength" aria-label="Recipient's username" aria-describedby="button-addon2" value={strength} onChange={(e) => { setStrength(e.target.value) }} />
                    <button className="btn btn-success" type="button" id="button-addon2" onClick={handleSubmit}>Search Class</button>
                </div>

                <div className="table-responsive mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center">Strength</th>
                                <th scope="col" className="text-center">FacultyName</th>
                                <th scope="col" className="text-center">CR No.</th>
                                <th scope="col" className="text-center">Time</th>
                                <th scope="col" className="text-center">Buttons</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(data) && data.map((ele) => (
                                <tr key={ele._id}>
                                    <td className="text-center">{ele.strength}</td>
                                    <td className="text-center">{ele.faculty_name}</td>
                                    <td className="text-center">{ele.classroom_no}</td>
                                    <td className="text-center">
                                        {
                                            ele.reservedUntil === null ? <>
                                                <div className="btn-group" id="btn-group">
                                                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Select Time
                                                    </button>
                                                    <div className="dropdown-menu custom-width" id="drop" style={{ width: '300px' }}>
                                                        <Link to="#" className="dropdown-item" onClick={() => setTime(1)}>1 minute</Link>
                                                        <Link to="#" className="dropdown-item" onClick={() => setTime(120)}>2 Hour</Link>
                                                    </div>
                                                </div></> : new Date(ele.reservedUntil).toLocaleTimeString()
                                        }
                                    </td>
                                    <td className="text-center">
                                        {
                                            ele.reservedUntil === null ? <button class="btn btn-primary" type="button" id="button-addon2" onClick={() => allocate(ele._id)} >Allocate</button> : <button class="btn btn-primary" type="button" id="button-addon2" disabled>Allocate</button>
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <style>{`
                .input-group input {
                    border: 2px solid black;
                    color: black;
                    font-weight: bolder;
                }
                body {
                    margin-top: 100px;
                }
            `}</style>
        </>
    )
}
