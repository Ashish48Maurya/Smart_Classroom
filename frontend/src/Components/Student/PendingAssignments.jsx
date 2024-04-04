import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PendingAssignments = () => {
    const navigate = useNavigate();
    const [assignments, setAssignments] = useState([]);

    const getData = async () => {
        try {
            const res = await fetch(`http://localhost:8000/get_assignments`);

            if (res.status === 200) {
                const data = await res.json();
                const filteredAssignments = data.data.filter((assignment) => assignment.students_output.length <= 0);
                setAssignments(filteredAssignments);
            } else {
                console.log(res);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleAssignmentClick = (assignment) => {
        navigate(`/assignment-details`, { state: { assignment } });
    };



    return (
        <div>
            <div className="table-responsive">
                <div className="scrollable-table">
                    <table id="assignments">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Due Date</th>
                                <th>Subject</th>
                                <th>Year of Study</th>
                                <th>Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assignments.map((assignment) => (
                                <tr onClick={() => handleAssignmentClick(assignment)}>
                                    <td>{assignment.title}</td>
                                    <td>{assignment.description}</td>
                                    <td>{new Date(assignment.dueDate).toLocaleDateString()}</td>
                                    <td>{assignment.subject}</td>
                                    <td>{assignment.yearOfStudy}</td>
                                    <td>{assignment.department}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <style>
                {`
                .table-responsive {
                    overflow-x: auto;
                }

                .scrollable-table {
                    min-width: 100%;
                    overflow-x: auto;
                }

                #assignments {
                    border-collapse: collapse;
                    border-radius: 10px;
                    font-size: 0.9em;
                    font-family: sans-serif;
                    width: 100%;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
                    background-color: white;
                }

                #assignments thead tr {
                    background-color: #3e79ff;
                    color: #ffffff;
                    text-align: left;
                }

                th, td {
                    padding: 12px 15px;
                }

                #assignments tbody tr {
                    border-bottom: 1px solid #dddddd;
                    cursor: pointer;
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
                #assignments tbody tr:focus {
                    font-weight: bold;
                    background-color: #dddddd;
                }
                `}
            </style>
        </div>
    );
}

export default PendingAssignments;
