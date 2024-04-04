import React, { useEffect, useState } from 'react';
import { useAuth } from '../../store/auth';
import Navbar from '../../Navbar';
import { useNavigate } from 'react-router-dom';

const Students = () => {
    const navigate = useNavigate();
    const { backend_api } = useAuth();
    const [students, setStudents] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch(`${backend_api}/get_students`, {
                method: 'get',
            });

            if (response.status === 200) {
                const res_data = await response.json();
                setStudents(res_data.msg);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const getStudent = (id) => {
        navigate(`/get_student/${id}`);
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Students List</h1>
                <div className="table-responsive">
                    <table id='students'>
                        <thead>
                            <tr className='text-center'>
                                <th>Full Name</th>
                                <th>Department</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>SAP ID</th>
                                <th>Year of Study</th>
                                <th>Student Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student._id} onClick={() => { getStudent(student._id) }}>
                                    <td>{student.fullname}</td>
                                    <td>{student.department}</td>
                                    <td>{student.email}</td>
                                    <td>{student.phoneNo}</td>
                                    <td>{student.sapID}</td>
                                    <td>{student.yearOfStudy}</td>
                                    <td>
                                        <button className='btn-stdnt'>Get Student Details</button>
                                    </td>
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
                .table-responsive {
                    overflow-x: auto;
                }

                .scrollable-table {
                    min-width: 100%;
                    overflow-x: auto;
                }

                #students {
                    border-collapse: collapse;
                    border-radius: 10px;
                    font-size: 0.9em;
                    font-family: sans-serif;
                    width: 100%;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
                    background-color: white;
                }

                #students thead tr {
                    background-color: #3e79ff;
                    color: #ffffff;
                    text-align: left;
                }

                th, td {
                    padding: 12px 15px;
                }

                #students tbody tr {
                    border-bottom: 1px solid #dddddd;
                    cursor: pointer;
                }

                #students tbody tr:nth-of-type(even) {
                    background-color: #f3f3f3;
                }

                #students tbody tr:last-of-type {
                    border-bottom: 2px solid #3e79ff;
                }

                #students tbody tr.active-row {
                    font-weight: bold;
                    color: #3e79ff;
                }

                #students tbody tr:hover,
                #students tbody tr:focus {
                    font-weight: bold;
                    background-color: #dddddd;
                }
                .btn-stdnt{
                    border:1px solid blue;
                    color:blue;
                    background:none;
                    padding:10px;
                    font-size:15px;
                    font-weight:500;
                    border-radius:5px;
                }
                .btn-stdnt:hover{
                    color:white;
                    background-color:blue;
                }
                `}
            </style>
        </>
    );
};

export default Students;