import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from './store/auth';
import Navbar from './Navbar';

const Teachers = () => {
    const { backend_api, token } = useAuth();
    const { id } = useParams();
    const [teacherData, setTeacherData] = useState(null);

    const getTeacher = async () => {
        try {
            const res = await fetch(`${backend_api}/Teacher/${id}`, {
                method: "get",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (res.status === 200) {
                const res_data = await res.json();
                setTeacherData(res_data.teacher);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTeacher();
    }, []);

    return (
        <>
            <Navbar />
            <div className="teacher-cont">
                {teacherData && (
                    <div className="teacher-details">
                        <div className="class-1">
                            <h1>Teacher Details</h1>
                            <p><strong>Full Name:</strong> {teacherData.fullname}</p>
                            <p><strong>Email:</strong> {teacherData.email}</p>
                            <p><strong>Department:</strong> {teacherData.department}</p>
                            <p><strong>Phone Number:</strong> {teacherData.phoneNo}</p>
                            <h2>Subject:</h2>
                            <p>{teacherData.subject}</p>
                        </div>
                        <img className='profile-img' src={teacherData.image || "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"} alt="Teacher Profile" />
                    </div>
                )}
            </div>
            <style>{`
                .teacher-cont {
                    margin-top: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                }

                .profile-img{
                    max-width:30vw;
                    height:30vw;
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
                }

                .teacher-details h1 {
                    margin-bottom: 20px;
                    font-size: 24px;
                    color: #333;
                }

                .teacher-details h2 {
                    margin-top: 20px;
                    font-size: 20px;
                    color: #555;
                }

                .teacher-details p {
                    margin-bottom: 10px;
                    font-size: 16px;
                    color: #555;
                }
            `}</style>
        </>
    );
}

export default Teachers;
