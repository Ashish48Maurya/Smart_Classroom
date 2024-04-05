import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const AllAssignments = () => {
    const navigate = useNavigate()
    const [assignments,setAssignments] = useState([]);
    const {backend_api,token} = useAuth();

    const Assignments = async () => {
        try {
            const res = await fetch(`${backend_api}/Students_assignments`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer  ${token}`
                },
            });
            if (res.ok) {
                const data = await res.json();
                setAssignments(data.data);
                console.log(data.data);
            } else {
                console.error('Failed to fetch assignments:', res.statusText);
            }
        } catch (error) {
            console.error('Error fetching assignments:', error);
        }
    }

    useEffect(()=>{
        Assignments();
    },[])

    const handleAssignmentClick = (assignment) => {
        navigate(`/assignment-details`, { state: { assignment } });
    };

    return (
        <div className="assignment-container">
            <h2>All Assignments</h2>
            {assignments.map((assignment) => (
                <div className="ass-card" onClick={() => handleAssignmentClick(assignment)} key={assignment._id}>
                    <div className="ass-title">{assignment.title}</div>
                    <div className="ass-desc">{assignment.description}</div>
                    <div className="ass-date">{new Date(assignment.dueDate).toLocaleDateString()}</div>
                    <div className="ass-details">
                        <span className="ass-yos mx-5">{assignment.yearOfStudy}</span>
                    <span className="ass-dept mx-5">{assignment.department}</span>
                    </div>
                        <span className="ass-subject">{assignment.subject}</span>
                </div>
            ))}
            
            <style>
                {`
                .assignment-container {
                    display: flex;
                    flex-direction:column;
                    justify-content: center;
                    gap: 20px;
                    width:100%;
                }

                .assignment-container h2{
                    text-align:center;
                }

                .ass-card {
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    text-align:center;
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    background: rgb(246,243,249);
                    background: linear-gradient(163deg, rgba(246,243,249,1) 14%, rgba(112,137,174,1) 100%);
                    padding: 20px;
                    width: 100%;
                    cursor:pointer;
                    transition: all 0.3s ease;
                }

                .ass-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
                }

                .ass-title {
                    font-size: 1.2rem;
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                .ass-desc {
                    margin-bottom: 10px;
                }

                .ass-date {
                    font-style: italic;
                    margin-bottom: 10px;
                }

                .ass-details {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .ass-details span{
                    margin: 0 5px 0 5px;
                }

                .ass-subject{
                    font-weight:bold;
                    color:white;
                    background: rgb(0,102,255);
                    background: linear-gradient(163deg, rgb(255, 255, 255) 14%, rgbargb(154, 165, 183)%);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                    padding:20px;
                    text-align:center;
                    width:max-content;
                    border-radius: 10%;
                }

                .ass-yos,
                .ass-dept {
                    font-size: 0.9rem;
                    font-weight: bold;
                    text-transform: uppercase;
                }

                @media screen and (max-width:770px){
                    .ass-card{
                        flex-direction:column;
                    }
                }
                `}
            </style>
        </div>
    );
}

export default AllAssignments;