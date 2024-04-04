import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Navbar from '../Navbar';
import { useAuth } from '../store/auth';

export default function ClassRoom() {
    const [data, setData] = useState('');
    const [strength, setStrength] = useState('');
    const userData = JSON.parse(localStorage.getItem("USER"));
    const [time, setTime] = useState('');
    const { token, backend_api } = useAuth();


    // const sendMail = async (msg, selectedBranch) => {
    //     console.log('Selected Branch:', selectedBranch);

    //     const ans = await fetch(`${backend_api}/contact`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             msg,
    //             branch: selectedBranch,
    //         })
    //     });
    //     console.log(ans);

    //     if (ans.ok) {
    //         toast.success("Message Sent Successfully");
    //     } else {
    //         console.error('Error:', ans.statusText);
    //     }
    // }

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
            setData(dataa.classrooms);
        } else {
            console.error('Error:', ans.statusText);
        }
    }

    const [hours, minutes] = time.split(":").map(Number);
    const now = new Date();
    const specifiedTime = new Date(now);
    specifiedTime.setHours(hours, minutes, 0, 0); // Set hours and minutes of the current day

    const timeDifference = specifiedTime - now; // Difference in milliseconds

    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60)); // Convert milliseconds to hours
    const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // Convert milliseconds to remaining minutes
    const allocate = async (id) => {
        const ans = await fetch(`${backend_api}/reserve_class/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                hour: hoursDifference,
                minute: minutesDifference,
                facultyName: userData.fullname
            })
        });
        if (ans.ok) {
            const updatedData = data.filter((ele) => ele._id !== id);
            setData(updatedData);

            toast.success("Class Allocated Successfully");
            // sendMail("There have been some changes in your branch", userData.branch);
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
                                            ele.reservedUntil===null ? <><td className="text-center"><input type="time" name="" id="" value={time} onChange={(e) => setTime(e.target.value)} /></td></> : <><td className="text-center">{ele.reservedUntil}</td></>
                                        }
                                        
                                    </td>
                                    <td className="text-center">
                                        {
                                            ele.reservedUntil===null ? <><button class="btn btn-primary" type="button" id="button-addon2" onClick={() => allocate(ele._id)} >Allocate</button></> : <><button class="btn btn-primary" type="button" id="button-addon2" disabled onClick={() => allocate(ele._id)}>Allocate</button></>
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
