import React, { useEffect, useState } from 'react';
import { useAuth } from './store/auth';
import Navbar from './Navbar';

const StudentAssignments = () => {
    const { backend_api } = useAuth();
    const [assignments, setAssignments] = useState([]);

    const getAssignments = async () => {
        try {
            const res = await fetch(`http://localhost:8000/get_assignments`, {
                method: "GET"
            });
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                setAssignments(data.data); // Access the 'data' property of the response
            } else {
                console.error('Failed to fetch assignments:', res.statusText);
            }
        } catch (error) {
            console.error('Error fetching assignments:', error);
        }
    }

    useEffect(() => {
        getAssignments();
    }, []);

    return (
        <>
            <Navbar />
            <div>
                <h1>Assignments</h1>
                <div className="table-responsive">
                    <table id='assignments'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Due Date</th>
                                <th>Subject</th>
                                <th>Year of Study</th>
                                <th>Department</th>
                                <th>Document</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assignments.map(assignment => (
                                <tr key={assignment._id}>
                                    <td>{assignment.title}</td>
                                    <td>{assignment.description}</td>
                                    <td>{new Date(assignment.dueDate).toLocaleDateString()}</td>
                                    <td>{assignment.subject}</td>
                                    <td>{assignment.yearOfStudy}</td>
                                    <td>{assignment.department}</td>
                                    <td>{assignment.file && <a href={`http://localhost:8000/${assignment.file}`}>View File</a>}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <style>
                {`
                body{
                    margin-top:100px;
                }

                .createbtn{
                    float:right;
                    margin-right:100px;
                    text-align:center;
                    width:max-content;
                    font-size:18px;
                }

                .createbtn a{
                    display:flex;
                    justfify-content:center;
                    align-items:center;
                }

                .circle {
                    width:35px;
                    height:35px;
                    border:2px solid #007bff;
                    border-radius: 50%;
                    text-align:center;
                    color: #fff;
                    font-size: 18px;
                    margin-left:10px;
                }

                .plus {
                    line-height: 0;
                    color: #007bff;
                }

                .table-responsive{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }

                #assignments {
                    border-collapse: collapse;
                    margin: 25px 0;
                    border-radius: 10px;
                    font-size: 0.9em;
                    font-family: sans-serif;
                    min-width: 400px;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
                    width: 90%;
                    border-collapse: collapse;   
                    background-color:white;
                    margin:20px;
                }
                #assignments thead tr{
                    background-color: #3e79ff;
                    color: #ffffff;
                    text-align: left;
                }

                th, td {
                    padding: 12px 15px;
                }
                #assignments tbody tr {
                    border-bottom: 1px solid #dddddd;
                    cursor:pointer
                }

                #assignments tbody tr:nth-of-type(even) {
                    background-color: #f3f3f3;
                }

                #assignments tbody tr:last-of-type {
                    border-bottom: 2px solid #3e79ff;
                }

                #assignments tbody tr.active-row {
                    font-weight: bold;
                    color: #3e79ff;
                }

                #assignments tbody tr:hover,
                #assignments tbody tr:focus{
                    font-weight: bold;
                    background-color: #dddddd;
                }
                `}
            </style>
        </>
    );
}

export default StudentAssignments;
