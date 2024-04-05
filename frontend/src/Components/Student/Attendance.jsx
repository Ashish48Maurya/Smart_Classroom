import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import { useAuth } from '../store/auth';
import Navbar from '../Navbar';

export const options = {
    title: "Student Attendance Portal",
};

export default function Attendance() {
    const { token, backend_api, loggedUser } = useAuth();
    const [attendanceData, setAttendanceData] = useState([]);
    const [totalAttendancePercentage, setTotalAttendancePercentage] = useState("");
    const [selectedSubject, setSelectedSubject] = useState(null);

    const getAttendance = async () => {
        try {
            const response = await fetch(`${backend_api}/studentAttendance/${loggedUser._id}`, {
                method: 'GET'
            });
            if (response.status === 200) {
                const parsedData = await response.json();
                // console.log(parsedData);
                setAttendanceData(parsedData.attendanceData);
                setTotalAttendancePercentage(parsedData.totalAttendancePercentage);
            } else {
                console.error('Failed to fetch attendance history:', response.status);
            }
        } catch (error) {
            console.error('Error fetching attendance history:', error);
        }
    };

    const handleSubjectClick = (subject) => {
        setSelectedSubject(subject);
    };

    useEffect(() => {
        getAttendance();
    }, [loggedUser]);

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