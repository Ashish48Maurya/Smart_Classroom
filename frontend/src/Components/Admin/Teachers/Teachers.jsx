import React, { useEffect, useState } from 'react';
import { useAuth } from '../../store/auth';
import Navbar from '../../Navbar';
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
                <h3 className='text-center'>Teachers List</h3>
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
            <style>{`
                .teacher-cont {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    margin-top:0 !important;
                }
                body{
                    margin-top:100px;
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

                .teacher-details {
                    display:flex;
                    justify-content:space-between;
                    align-items:space-between;
                    background-color: #f9f9f9;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    width:100%;
                    margin:10px 50px;
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
                @media screen and (max-width:700px){
                    .teacher-details{
                        flex-direction:column-reverse;
                        margin:10px 30px;
                    }
                    .profile-img{
                        width:40vw;
                        height:40vw;
                        margin-bottom:30px
                    }
                }
                `}
            </style>
        </>
    );
};

export default Teachers;