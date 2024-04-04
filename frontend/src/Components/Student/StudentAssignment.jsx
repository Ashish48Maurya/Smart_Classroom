import React, { useState } from 'react';
import Navbar from '../Navbar';
import AllAssignments from './AllAssignments';
import PendingAssignments from './PendingAssignments';
import CompletedAssignments from './CompletedAssignments';

const StudentAssignment = () => {
    const [type, setType] = useState('All');
    return (
        <div>
            <Navbar />
            <div className="container">
                <h2 style={{ textAlign: "center" }}>Student Assignments</h2>
                <div className="btn-grp">
                    <button onClick={() => { setType("All") }}>All</button>
                    <button onClick={() => { setType("Pending") }}>Pending</button>
                    <button onClick={() => { setType("Completed") }}>Completed</button>
                </div>
                <div className="ass-cont">
                    {
                        type === "All" ? <AllAssignments /> :
                            type === "Pending" ? <PendingAssignments /> :
                                <CompletedAssignments />
                        // type === "Completed" ? <CompletedAssignments />
                    }
                </div>
            </div>
            <style>
                {`
                .container {
                    margin-top: 100px;
                }
                .btn-grp{
                    display:flex;
                    justify-content:flex-start;
                    align-items:center;
                    width:100%;
                }
                .btn-grp button{
                    margin-right:15px;
                    border:none;
                    border-radius:40px;
                    background-color:#3e79ff;
                    color:white;
                }
                .ass-cont{
                    margin-top:20px;
                }
                `}
            </style>
        </div>
    );
};

export default StudentAssignment;
