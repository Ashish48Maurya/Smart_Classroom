import React, { useEffect, useState } from 'react';
import { useAuth } from './store/auth';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Teachers = () => {
    const navigate = useNavigate();
    const { backend_api } = useAuth();
    const [teachers, setTeachers] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch(`${backend_api}/get_teachers`, {
                method: 'get',
            });

            if (response.status === 200) {
                const res_data = await response.json();
                setTeachers(res_data.msg);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const getTeacherDetails = (id) => {
        navigate(`/get_teacher/${id}`);
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Teachers List</h1>
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Department</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Joining Date</th>
                                <th>Teacher Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teachers.map((teacher) => (
                                <tr key={teacher._id} onClick={() => getTeacherDetails(teacher._id)} role="button">
                                    <td>{teacher.fullname}</td>
                                    <td>{teacher.department}</td>
                                    <td>{teacher.email}</td>
                                    <td>{teacher.phoneNo}</td>
                                    <td>{new Date(teacher.joiningDate).toLocaleDateString()}</td>
                                    <td>
                                        <button className='btn-teacher'>Get Teacher Details</button>
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
                    border:none;
                    border-radius:100px;
                    text-align: center;
                }

                th, td {
                    border: 1px solid #dddddd;
                    text-align: center;
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

                .btn-teacher{
                    border:1px solid blue;
                    color:blue;
                    background:none;
                    padding:10px;
                    font-size:15px;
                    font-weight:500;
                    border-radius:5px;
                }
                .btn-teacher:hover{
                    color:white;
                    background-color:blue;
                }
                `}
            </style>
        </>
    );
};

export default Teachers;
