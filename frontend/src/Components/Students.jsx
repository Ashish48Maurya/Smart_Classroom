import React, { useEffect, useState } from 'react';
import { useAuth } from './store/auth';
import Navbar from './Navbar';
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
                    <table>
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
                .container {
                    margin-top: 100px;
                }

                .table-responsive {
                    overflow-x: auto;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;   
                    background-color:white;
                    border:none;
                    border-radius:10px;
                }

                tbody{
                    text-align: center;
                    border:none;
                    border-radius:100px;
                }

                th, td {
                    border: 1px solid #dddddd;
                    // text-align: left;
                    padding: 8px;
                }
                td{
                    cursor:pointer;
                }
                tr:hover,td:hover{
                    background-color:#d4d4d4;
                }

                th {
                    background-color: #f2f2f2;
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