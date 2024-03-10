import React, { useEffect, useState } from 'react';
import { useAuth } from './store/auth';
import Navbar from './Navbar';

const Teacher = () => {
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

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Teacher List</h1>
                <ul>
                    {teachers.map((teacher) => (
                        <li key={teacher._id}>
                            <strong>{teacher.fullname}</strong> - {teacher.department} Department
                        </li>
                    ))}
                </ul>
            </div>
            <style>
                {`
                .container{
                    margin-top:100px;
                }
                `}
            </style>
        </>
    );
};

export default Teacher;