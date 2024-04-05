import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import { useAuth } from '../store/auth';
import Navbar from '../Navbar';

export const options = {
    title: "Student Attendance Portal",
};

export default function Attendance() {
    const { token, backend_api } = useAuth();
    const data = localStorage.getItem("USER");
    const userData = JSON.parse(data);
    const [attendanceData, setAttendanceData] = useState([]);
    const [totalAttendancePercentage, setTotalAttendancePercentage] = useState("");
    const [selectedSubject, setSelectedSubject] = useState(null);

    const getAttendance = () => {
        // Fetch attendance data from localStorage
        const attendanceData = userData.subjects.map(subject => ({
            name: subject.name,
            attendance: subject.attendance || [], // If attendance is not available, default to an empty array
        }));
        setAttendanceData(attendanceData);

        // Calculate total attendance percentage
        const totalAttendanceCount = attendanceData.reduce((total, subject) => total + subject.attendance.length, 0);
        const totalAttendancePercentage = (totalAttendanceCount / attendanceData.length) * 100;
        setTotalAttendancePercentage(totalAttendancePercentage.toFixed(2));
    };

    const handleSubjectClick = (subject) => {
        setSelectedSubject(subject);
    };

    useEffect(() => {
        getAttendance();
    }, [userData]);

    return (
        <>
            <Navbar />
            <div className='container'>
                <h1>Student Attendance Portal</h1>
                {attendanceData.length > 0 ? (
                    <div>
                        <h2>Individual Subject Attendance</h2>
                        <div className="table-responsive mt-5">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-center">Subject</th>
                                        <th scope="col" className="text-center">Attendance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {attendanceData.map(item => (
                                        <tr key={item.name} onClick={() => handleSubjectClick(item)}>
                                            <td className="text-center">{item.name}</td>
                                            <td className="text-center">{item.attendance.length}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {selectedSubject && (
                            <>
                                <h2>Attendance for {selectedSubject.name}</h2>
                                <Chart
                                    chartType="PieChart"
                                    data={[
                                        ['Date', 'Count'],
                                        ...selectedSubject.attendance.map(record => [new Date(record.date).toLocaleDateString(), record.count]),
                                    ]}
                                    options={options}
                                    width={"100%"}
                                    height={"400px"}
                                />
                            </>
                        )}
                        <h2>Total Attendance Percentage</h2>
                        <Chart
                            chartType="PieChart"
                            data={[
                                ['Attendance', 'Percentage'],
                                ['Present', parseFloat(totalAttendancePercentage)],
                                ['Absent', 100 - parseFloat(totalAttendancePercentage)],
                            ]}
                            options={options}
                            width={"100%"}
                            height={"400px"}
                        />
                    </div>
                ) : (
                    <p>No attendance data available</p>
                )}
            </div>
            <style>
                {`
                body {
                    text-align: center;
                }
                .container {
                    margin-top: 150px;
                }
                table {
                    cursor: pointer;
                }
                `}
            </style>
        </>
    );
}
