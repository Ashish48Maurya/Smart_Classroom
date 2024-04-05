import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import AllAssignments from './AllAssignments';
import PendingAssignments from './PendingAssignments';
import CompletedAssignments from './CompletedAssignments';
import { useAuth } from '../store/auth';

const StudentAssignment = () => {
    const [type, setType] = useState('All');
    const { token } = useAuth();
    const [liveAssignments, setLiveAssignments] = useState([]);
    const [completedAssignments, setCompletedAssignments] = useState([]);
    const getData = async () => {
        try {
            const res = await fetch(`http://localhost:8000/live_assignments`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            if (res.status === 200) {
                const data = await res.json();
                setLiveAssignments(data.data);
            } else {
                console.log(res);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const getCompleted_assignments = async () => {
        try {
            const res = await fetch(`http://localhost:8000/submitted_assignments`, {
                headers: {
                    "Authorization":`Bearer ${token}`
                }
            });

            if (res.status === 200) {
                const data = await res.json();
                setCompletedAssignments(data.data);
            } else {
                console.log(res);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
        getCompleted_assignments();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="btn-grp">
                    <button style={type === "All" ? { backgroundColor: "#2e416e" } : {}} onClick={() => { setType("All") }}>All</button>
                    <button style={type === "Pending" ? { backgroundColor: "#2e416e" } : {}} onClick={() => { setType("Pending") }}>Pending</button>
                    <button style={(type !== "All" && type !== "Pending") ? { backgroundColor: "#2e416e" } : {}} onClick={() => { setType("Completed") }}>Completed</button>
                </div>
                <div className="ass-cont">
                    {
                        type === "All" ? <AllAssignments assignments={liveAssignments} /> :
                            type === "Pending" ? <PendingAssignments assignments={liveAssignments} /> :
                                <CompletedAssignments assignments={completedAssignments} />
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
