import React, { useState } from 'react';

class ClassData {
    constructor(subject, branch, students) {
        this.subject = subject;
        this.branch = branch;
        this.students = students;
    }
}

const Allocator = () => {
    const [classRoomNoAlongWithCapacity, setClassRoomNoAlongWithCapacity] = useState([]);
    const [mapData, setMapData] = useState(new Map());

    const handleClassData = () => {
        // Write your logic here to collect data from user input or fetch from an API
        // For simplicity, I'll use hardcoded data
        const classes = [
            new ClassData("Maths", "CSE", 60),
            new ClassData("DAA", "CSE", 60),
            new ClassData("WADL", "CSE", 60),
            new ClassData("WADL", "IOT", 60)
        ];

        // Your existing logic goes here

        // Set the state with the updated data
        setMapData(mapData);
    };

    const renderClassData = () => {
        // Render the class data
        return (
            <div>
                {Array.from(mapData).map(([key, value]) => (
                    <div key={key}>
                        <p>Classroom Number: {key}</p>
                        {value.map((data, index) => (
                            <p key={index}>Subject: {data.subject}, Branch: {data.branch}, Students: {data.students}</p>
                        ))}
                        <hr />
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            <h2>Exam Scheduler</h2>
            
            <button onClick={handleClassData}>Generate Schedule</button>
            {renderClassData()}
        </div>
    );
};

export default Allocator;