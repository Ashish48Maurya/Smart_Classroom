import React, { useEffect, useState } from 'react';
import { useAuth } from '../../store/auth';
import Navbar from '../../Navbar';
import { useParams } from 'react-router-dom';

const Teacher = () => {
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
                // console.log(res_data)
                res_data.teacher.joiningDate = new Date(res_data.teacher.joiningDate);
                setTeacherData(res_data.teacher);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

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
                            <h1 style={{ textAlign: "center" }}>Teacher Details</h1>
                            <h2>Teacher : <b style={{
                                textDecoration: "underline",
                                backgroundColor: "yellow"
                            }}>{teacherData.fullname}</b></h2>
                            <p><strong>Full Name:</strong> {teacherData.fullname}</p>
                            <p><strong>Email:</strong> {teacherData.email}</p>
                            <p><strong>TeacherID:</strong> {teacherData.teacherID}</p>
                            <p><strong>Department:</strong> {teacherData.department}</p>
                            <p><strong>Phone Number:</strong> {teacherData.phoneNo}</p>
                            <p><strong>Joining Date:</strong> {teacherData.joiningDate.toLocaleDateString('en-US', options)}</p>
                            <h2>Subject:</h2>
                            <p>{teacherData.subject}</p>
                        </div>
                        <img className='profile-img' src={`${backend_api}/${teacherData.file}` || "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"} alt="Teacher Profile" />
                    </div>
                )}
            </div>
            <style>{`
            body{
                margin-top: 100px;
            }
                .teacher-cont {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                }

                .profile-img{
                    width:25vw;
                    max-width:40vw;
                    min-width:10vw;
                    height:25vw;
                    border-radius:10px;
                    border:2px solid black;
                    padding:2px;
                    background-color:gray;
                }

                .teacher-details {
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    background-color: #f9f9f9;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    width:100%;
                    margin:10px 50px;
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
                @media screen and (max-width:700px){
                    .teacher-details{
                        flex-direction:column-reverse;
                        margin:10px 30px;
                    }
                    .profile-img{
                        width:40vw;
                        height:40vw;
                    }
                }
            `}</style>
        </>
    );
}

export default Teacher;
