import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from './store/auth';
import Navbar from './Navbar';

const Student = () => {
    const { backend_api, token } = useAuth();
    const { id } = useParams();
    const [studentData, setStudentData] = useState(null);

    const getStudent = async () => {
        try {
            const res = await fetch(`${backend_api}/Student/${id}`, {
                method: "get",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (res.status === 200) {
                const res_data = await res.json();
                console.log(res_data.student);
                res_data.student.AdmissionDate = new Date(res_data.student.AdmissionDate);
                setStudentData(res_data.student);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getStudent();
    }, []);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <>
            <Navbar />
            <div className="student-cont">
                {studentData && (
                    <div className="student-details">
                        <div className="class-1">
                            <h1>Student Details</h1>
                            <p><strong>Full Name:</strong> {studentData.fullname}</p>
                            <p><strong>Email:</strong> {studentData.email}</p>
                            <p><strong>Department:</strong> {studentData.department}</p>
                            <p><strong>Phone Number:</strong> {studentData.phoneNo}</p>
                            <p><strong>SAP ID:</strong> {studentData.sapID}</p>
                            <p><strong>Year of Study:</strong> {studentData.yearOfStudy}</p>
                            <p><strong>Admission Date:</strong> {studentData.AdmissionDate.toLocaleDateString('en-US', options)}</p>
                            <h2>Subjects:</h2>
                            <ol>
                                {studentData.subjects.map((subject, index) => (
                                    <li key={index}>{subject.name}</li>
                                ))}
                            </ol>
                        </div>
                        <img className='profile-img' src={
                            `${backend_api}/${studentData.file}` || "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                        } />
                    </div>
                )}
            </div>
            <style>{`
            body{
                margin-top:100px;
            }
                .student-cont {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    margin-top:0 !important;
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

                .student-details {
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

                .student-details h1 {
                    margin-bottom: 20px;
                    font-size: 24px;
                    color: #333;
                }

                .student-details h2 {
                    margin-top: 20px;
                    font-size: 20px;
                    color: #555;
                }

                .student-details p {
                    margin-bottom: 10px;
                    font-size: 16px;
                    color: #555;
                }
                @media screen and (max-width:700px){
                    .student-details{
                        flex-direction:column-reverse;
                        margin:10px 30px;
                    }
                    .profile-img{
                        width:40vw;
                        height:40vw;
                        margin-bottom:30px
                    }
                }
            `}</style>
        </>
    );
}

export default Student;
