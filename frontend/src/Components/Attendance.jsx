import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import { useAuth } from './store/auth';
import Navbar from './Navbar';

export const options = {
    title: "Student Attendance Portal",
};

export default function Attendance() {
    const { token, backend_api, loggedUser } = useAuth();
    const [attendanceData, setAttendanceData] = useState([]);
    const [totalAttendancePercentage, setTotalAttendancePercentage] = useState("");

    const getAttendance = async () => {
        try {
            const response = await fetch(`http://localhost:8000/studentAttendance/65ed685fc5babd6068bb40ab`, {
                method: 'GET'
            });

            if (response.status === 200) {
                const parsedData = await response.json();
                console.log(parsedData);
                setAttendanceData(parsedData.attendanceData);
                setTotalAttendancePercentage(parsedData.totalAttendancePercentage);
            } else {
                console.error('Failed to fetch attendance history:', response.status);
            }
        } catch (error) {
            console.error('Error fetching attendance history:', error);
        }
    };

    useEffect(() => {
        getAttendance();
    }, []);

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
                                        <tr key={item.name}>
                                            <td className="text-center">{item.name}</td>
                                            <td className="text-center">{item.attendance.length}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <h2>Subject-wise Attendance</h2>
                        <Chart
                            chartType="PieChart"
                            data={[
                                ['Subject', 'Attendance'],
                                ...attendanceData.map(item => [item.name, item.attendance.length]),
                            ]}
                            options={options}
                            width={"100%"}
                            height={"400px"}
                        />
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
                        <p>Data available, charts and table should be visible</p>
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
                    margin-top: 100px;
                }
                `}
            </style>
        </>
    );
}
