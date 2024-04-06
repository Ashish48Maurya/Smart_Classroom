import React, { useState } from 'react';
import Navbar from '../../Navbar';

const ClassroomScheduler = () => {
    const [noOfClasses, setNoOfClasses] = useState(0);
    const [mapData, setMapData] = useState(new Map());
    const [classroomData, setClassroomData] = useState([]);
    const [classesData] = useState([
        { subject: 'Maths', branch: 'CSE', students: 60 },
        { subject: 'DAA', branch: 'CSE', students: 60 },
        { subject: 'WADL', branch: 'CSE', students: 60 },
        { subject: 'WADL', branch: 'IOT', students: 60 }
    ]);

    const handleNoOfClassesChange = (event) => {
        const newValue = parseInt(event.target.value);
        setNoOfClasses(isNaN(newValue) ? 0 : Math.max(newValue, 0));
    };

    const handleClassroomDataChange = (index, event) => {
        const newData = [...classroomData];
        newData[index] = event.target.value.split(' ').map(Number);
        setClassroomData(newData);
    };

    const scheduleClasses = () => {
        let remainingStudents = 0;
        for (let i = 0; i < classesData.length; i++) {
            let firstHalf = Math.floor(classesData[i].students / 3);
            let secondHalf = firstHalf;
            let thirdHalf = classesData[i].students - 2 * firstHalf;

            for (let j = 0; j < classroomData.length; j++) {
                const [classroomNo, capacity] = classroomData[j];

                if (capacity >= firstHalf && !mapData.get(classroomNo)?.some(data => data.subject === classesData[i].subject)) {
                    mapData.set(classroomNo, [...(mapData.get(classroomNo) || []), new ClassData(classesData[i].subject, classesData[i].branch, firstHalf)]);
                    const updatedCapacity = capacity - firstHalf;
                    const updatedClassroomData = [...classroomData];
                    updatedClassroomData[j] = [classroomNo, updatedCapacity];
                    setClassroomData(updatedClassroomData);
                    break;
                }

                if (capacity >= secondHalf && !mapData.get(classroomNo)?.some(data => data.subject === classesData[i].subject)) {
                    mapData.set(classroomNo, [...(mapData.get(classroomNo) || []), new ClassData(classesData[i].subject, classesData[i].branch, secondHalf)]);
                    const updatedCapacity = capacity - secondHalf;
                    const updatedClassroomData = [...classroomData];
                    updatedClassroomData[j] = [classroomNo, updatedCapacity];
                    setClassroomData(updatedClassroomData);
                    break;
                }

                if (capacity >= thirdHalf && !mapData.get(classroomNo)?.some(data => data.subject === classesData[i].subject)) {
                    mapData.set(classroomNo, [...(mapData.get(classroomNo) || []), new ClassData(classesData[i].subject, classesData[i].branch, thirdHalf)]);
                    const updatedCapacity = capacity - thirdHalf;
                    const updatedClassroomData = [...classroomData];
                    updatedClassroomData[j] = [classroomNo, updatedCapacity];
                    setClassroomData(updatedClassroomData);
                    break;
                }

                if (capacity < thirdHalf) {
                    remainingStudents += thirdHalf - capacity;
                }
            }
        }

        if (remainingStudents > 0) {
            // Try to distribute the remaining students to other classrooms
            for (let i = 0; i < classesData.length; i++) {
                let firstHalf = Math.floor(classesData[i].students / 3);
                let secondHalf = firstHalf;
                let thirdHalf = classesData[i].students - 2 * firstHalf;

                for (let j = 0; j < classroomData.length; j++) {
                    const [classroomNo, capacity] = classroomData[j];

                    if (capacity >= remainingStudents && !mapData.get(classroomNo)?.some(data => data.subject === classesData[i].subject)) {
                        mapData.set(classroomNo, [...(mapData.get(classroomNo) || []), new ClassData(classesData[i].subject, classesData[i].branch, remainingStudents)]);
                        const updatedCapacity = capacity - remainingStudents;
                        const updatedClassroomData = [...classroomData];
                        updatedClassroomData[j] = [classroomNo, updatedCapacity];
                        setClassroomData(updatedClassroomData);
                        remainingStudents = 0;
                        break;
                    }
                }

                if (remainingStudents === 0) {
                    break;
                }
            }
        }

        console.log(mapData);
    };

    const renderMapData = () => {
        return (
            <div>
                {Array.from(mapData.entries()).map(([classroomNo, classes]) => (
                    <div key={classroomNo}>
                        <h3>Classroom {classroomNo}</h3>
                        <ul>
                            {classes.map((classItem, index) => (
                                <li key={index}>
                                    Subject: {classItem.subject}, Branch: {classItem.branch}, Students: {classItem.students}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Navbar />
            <div className="allocator-form">
                <h2>Classroom Scheduler</h2>
                <label htmlFor="noOfClasses">Enter Number of Classes You Want for Conducting Exam:</label>
                <input type="number" id="noOfClasses" value={noOfClasses} onChange={handleNoOfClassesChange} />
                {Array.from({ length: noOfClasses }).map((_, index) => (
                    <div key={index}>
                        <label htmlFor={`classroom${index}`}>Enter Classroom Number and Number of Benches present in Class [{index + 1}]:</label>
                        <input type="text" id={`classroom${index}`} onChange={(event) => handleClassroomDataChange(index, event)} />
                    </div>
                ))}
                <button className='scheduler-btn' onClick={scheduleClasses}>Schedule Classes</button>
                <div className="map-data">
                    <h2>Map Data</h2>
                    {renderMapData()}
                </div>
            </div>
            <style>
                {`
                body {
                    margin-top: 100px;
                    font-family: Arial, sans-serif;
                }
                h2 {
                    text-align: center;
                }
                .allocator-form {
                    background: linear-gradient(163deg, rgba(246, 243, 249, 1) 14%, rgba(112, 137, 174, 1) 100%);
                    border-radius: 50px;
                    width: max-content;
                    max-width: 95%;
                    height: auto;
                    padding: 50px;
                }
                .allocator-form input {
                    outline: none;
                    border: none;
                    margin-left: 10px;
                    border-radius: 5px;
                }
                .scheduler-btn {
                    width: max-content;
                    padding: 10px;
                    margin-top: 10px; /* Adjusted margin-top for consistency */
                    margin-left: 10px;
                    border-radius: 5px;
                    border: none;
                    background: linear-gradient(163deg, rgba(0, 102, 255, 1) 0%, rgba(110, 55, 165, 1) 82%);
                    font-size: 14px;
                    font-weight: 600;
                    color: #fff;
                    transition: background-color ease 1s;
                }
                .scheduler-btn:hover {
                    background: linear-gradient(163deg, rgb(255, 255, 255) 14%, rgb(154, 165, 183));
                }
                `}
            </style>
        </div>
    );
};

class ClassData {
    constructor(subject, branch, students) {
        this.subject = subject;
        this.branch = branch;
        this.students = students;
    }
}

export default ClassroomScheduler;
