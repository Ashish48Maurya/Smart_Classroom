import React, { useEffect, useState } from 'react';
import { useAuth } from '../../store/auth';
import Navbar from '../../Navbar';
import { useNavigate } from 'react-router-dom';

const Teacher = () => {
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
                    <table id='teachers'>
                        <thead style={{ backgroundColor: "black !important" }}>
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

                #teachers {
                    border-collapse: collapse;
                    border-radius: 10px;
                    font-size: 0.9em;
                    font-family: sans-serif;
                    width: 100%;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
                    background-color: white;
                }

                #teachers thead tr {
                    background-color: #3e79ff;
                    color: #ffffff;
                    text-align: left;
                }

                th, td {
                    padding: 12px 15px;
                }

                #teachers tbody tr {
                    border-bottom: 1px solid #dddddd;
                    cursor: pointer;
                }

                #teachers tbody tr:nth-of-type(even) {
                    background-color: #f3f3f3;
                }

                #teachers tbody tr:last-of-type {
                    border-bottom: 2px solid #3e79ff;
                }

                #teachers tbody tr.active-row {
                    font-weight: bold;
                    color: #3e79ff;
                }

                #teachers tbody tr:hover,
                #teachers tbody tr:focus {
                    font-weight: bold;
                    background-color: #dddddd;
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

export default Teacher;
