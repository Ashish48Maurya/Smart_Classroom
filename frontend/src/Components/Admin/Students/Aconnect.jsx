import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import Navbar from '../../Navbar';
import { useAuth } from '../../store/auth';

export default function Aconnect() {
    const [branch, setBranch] = useState('');
    const [msg, setMsg] = useState('');
    const [selectedBranch, setSelectedBranch] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [file, setFile] = useState('');
    const { backend_api, token } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Hello")
        const formData = new FormData();
        formData.append("msg", msg);
        formData.append("yearOfStudy", selectedYear);
        formData.append("branch", selectedBranch);
        formData.append("file", file);

        try {
            const response = await fetch(`${backend_api}/adminSendNotice`, {
                method: "post",
                headers: {
                    "Authorization": `Bearer  ${token}`
                },
                body: formData,
            });

            if (response.status === 200) {
                const res_data = await response.json();
                console.log("response from server ", res_data);
                toast.success("Message Sent successfully !!!");
            } else {
                return console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
        <Navbar/>
            <div className="container  mt-5">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                    <div className="input-group mb-3">
                        <input type="file" name="file" id="file" accept="file/*" onChange={(e)=>{setFile(e.target.files[0])}}/>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-primary'>Send Mail</button>
                    </div>
                </form>
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