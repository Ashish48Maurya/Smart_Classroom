import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

export default function TAttendance() {
    const [students, setStudents] = useState([]);
    const [attendance, setAttendance] = useState({});
    const [loading, setLoading] = useState(true);

    const { loggedUser, backend_api, token } = useAuth();

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch(`${backend_api}/get_students`, {
                    method: "GET",
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data.msg);

                    if (data.msg) {
                        const initialAttendance = {};
                        data.msg.forEach(student => {
                            initialAttendance[student._id] = false;
                        });
                        setStudents(data.msg);
                        setAttendance(initialAttendance);
                        setLoading(false);
                    } else {
                        console.error("Unexpected API response format:", data);
                    }
                } else {
                    console.error("Server returned an error:", response.status, response.statusText);
                }
            } catch (error) {
                console.error("Error during fetching students:", error);
            }
        };

        fetchStudents();
    }, [backend_api]);

    const handleCheckboxChange = (studentId) => {
        setAttendance(prevAttendance => ({
            ...prevAttendance,
            [studentId]: !prevAttendance[studentId]
        }));
    };

    const updateAttendance = async () => {
        const presentStudents = Object.keys(attendance).filter(studentId => attendance[studentId]);
        try {
            const response = await fetch(`${backend_api}/markAttendance`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    studentIds: presentStudents,
                    subjectName: loggedUser.subject
                }),
            });

            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
            } else {
                console.error("An unexpected error occurred", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Error during updating attendance:", error);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Navbar />
            <div className='container'>
                <h4 className='text-center m-3'>Attendance</h4>
                <h4 className='text-center m-2'>{loggedUser.subject}</h4>
                <div className="table-responsive mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center">Name</th>
                                <th scope="col" className="text-center">SAP ID</th>
                                <th scope="col" className="text-center">Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student._id}>
                                    <td className="text-center">{student.fullname}</td>
                                    <td className="text-center">{student.sapID}</td>
                                    <td className='text-center'>
                                        <input
                                            type="checkbox"
                                            checked={attendance[student._id]}
                                            onChange={() => handleCheckboxChange(student._id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary" onClick={updateAttendance}>Submit Attendance</button>
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
