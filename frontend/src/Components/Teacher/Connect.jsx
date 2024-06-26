import React, { useState } from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from "react-toastify";

export default function Connect() {
    const [branch, setBranch] = useState('');
    const [msg, setMsg] = useState('');
    const [selectedBranch, setSelectedBranch] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const { backend_api, token } = useAuth();
    const userData = JSON.parse(localStorage.getItem("USER"));
    
    const sendMsg = async (msg) => {
        try {
            const ans = await fetch(`${backend_api}/notify`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data: msg.data,
                    branch: setSelectedBranch,
                    yearOfStudy: selectedYear,
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

    const sendMail = async () => {


        const ans = await fetch(`${backend_api}/sendNotification`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                msg,
                branch: selectedBranch,
                yearOfStudy:selectedYear
            }),
        });

        if (ans.ok) {
            const notificationData = {
                data: {
                    title: msg,
                    body: `Message from ${userData.fullname}`
                }
            };
            sendMsg(notificationData);
            toast.success("Message Sent Successfully");
            setBranch('');
            setMsg('');
        } else {
            console.error('Error:', ans.statusText);
        }
    }

    return (
        <>
            <Navbar />
            <div className="container  mt-5">
                <div className="input-group mb-3 d-flex justify-content-between">
                    <div className="btn-group" id="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {selectedBranch ? selectedBranch : 'Select Branch'}
                        </button>
                        <div className="dropdown-menu custom-width" id="drop" style={{ width: '300px' }}>
                            <Link to="#" className="dropdown-item" onClick={() => setSelectedBranch('CSE')}>CSE</Link>
                            <Link to="#" className="dropdown-item" onClick={() => setSelectedBranch('ICB')}>ICB</Link>
                            <Link to="#" className="dropdown-item" onClick={() => setSelectedBranch('DS')}>DS</Link>
                            <Link to="#" className="dropdown-item" onClick={() => setSelectedBranch('IT')}>IT</Link>
                        </div>
                    </div>

                    <div className="btn-group" id="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {selectedYear ? selectedYear : 'Select Year'}
                        </button>
                        <div className="dropdown-menu custom-width" id="drop" style={{ width: '300px' }}>
                            <Link to="#" className="dropdown-item" onClick={() => setSelectedYear('1st')}>First</Link>
                            <Link to="#" className="dropdown-item" onClick={() => setSelectedYear('2nd')}>Second</Link>
                            <Link to="#" className="dropdown-item" onClick={() => setSelectedYear('3rd')}>Third</Link>
                            <Link to="#" className="dropdown-item" onClick={() => setSelectedYear('4th')}>Fourth</Link>
                        </div>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter Message" aria-label="Recipient's username" aria-describedby="basic-addon2" value={msg} onChange={(e) => { setMsg(e.target.value) }} />
                </div>
                <div className='text-center'>
                    <button className='btn btn-primary' onClick={sendMail}>Notify</button>
                </div>
            </div>
            <style>
                {`
                body {
                    margin-top: 100px;
                }

                .custom-width {
                    width: 300px;
                }
                `}
            </style>
        </>
    )
}