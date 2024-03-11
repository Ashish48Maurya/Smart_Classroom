import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import { useAuth } from './store/auth';

export default function TAttendance() {
    const [students, setStudents] = useState([]);
    const [attended, setAttended] = useState(false);
    const [type, setType] = useState('present'); // Default to 'present'
    const userData = JSON.parse(localStorage.getItem("USER"));
    const { loggedUser, backend_api, token } = useAuth();
    const presentBtn = useRef();

    const userAuthentication = async () => {
        try {
            const response = await fetch(`${backend_api}/get_students`, {
                method: "GET",
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.msg);

                if (data.msg) {
                    setStudents(data.msg);
                    setAttended(true);
                } else {
                    console.error("Unexpected API response format:", data);
                }
            } else {
                console.error("Server returned an error:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Error during user authentication:", error);
        }
    };

    const updateAttendance = async (studentId, attendanceType) => {
        try {
            const response = await fetch(`${backend_api}/markAttendance/${studentId}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    subjectName: loggedUser.subject,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
            } else {
                console.error("Server returned an error:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Error during updating attendance:", error);
        }
    };

    useEffect(() => {
        userAuthentication();
    }, []);

    return (
        <>
            <Navbar />
            <div className='container'>
                <h4 className='text-center m-3'>Attendance</h4>
                <h4 className='text-center m-2'>{userData.subject}</h4>
                <div className="table-responsive mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center">Name</th>
                                <th scope="col" className="text-center">SAP ID</th>
                                <th scope="col" className="text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(students) && students.map((student) => (
                                <tr key={student._id}>
                                    <td className="text-center">{student.fullname}</td>
                                    <td className="text-center">{student.sapID}</td>

                                        <td className='text-center'>
                                            <button
                                                className="btn btn-success me-2"
                                                type="button"
                                                onClick={() => updateAttendance(student._id, 'present')}
                                                 // Assign a ref to each button
                                                disabled={false}
                                            >
                                                Present
                                            </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <style>{`
                    body {
                        margin-top: 100px;
                    }
                `}</style>
            </div>
        </>
    );
}
