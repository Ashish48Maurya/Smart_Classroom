import React, { useState } from 'react';

const ClassroomScheduler = () => {
    const [noOfClasses, setNoOfClasses] = useState(0);
    const [classroomData, setClassroomData] = useState([]);
    const [classesData, setClassesData] = useState([
        { subject: 'Maths', branch: 'CSE', students: 60 },
        { subject: 'DAA', branch: 'CSE', students: 60 },
        { subject: 'WADL', branch: 'CSE', students: 60 },
        { subject: 'WADL', branch: 'IOT', students: 60 }
    ]);

    const handleNoOfClassesChange = (event) => {
        setNoOfClasses(parseInt(event.target.value));
    };

    const handleClassroomDataChange = (index, event) => {
        const newData = [...classroomData];
        newData[index] = event.target.value.split(' ').map(Number);
        setClassroomData(newData);
    };

    const scheduleClasses = () => {
        const mapData = new Map();

        for (let i = 0; i < classesData.length; i++) {
            let firstHalf = Math.floor(classesData[i].students / 3);
            let secondHalf = firstHalf;
            let thirdHalf = classesData[i].students - 2 * firstHalf;

            for (let j = 0; j < classroomData.length; j++) {
                const [classroomNo, capacity] = classroomData[j];

                // Logic for firstHalf
                if (capacity >= firstHalf && !mapData.get(classroomNo)?.some(data => data.subject === classesData[i].subject)) {
                    mapData.set(classroomNo, [...(mapData.get(classroomNo) || []), new ClassData(classesData[i].subject, classesData[i].branch, firstHalf)]);
                    const updatedCapacity = capacity - firstHalf;
                    const updatedClassroomData = [...classroomData];
                    updatedClassroomData[j] = [classroomNo, updatedCapacity];
                    setClassroomData(updatedClassroomData);
                    break;
                }

                // Logic for secondHalf
                if (capacity >= secondHalf && !mapData.get(classroomNo)?.some(data => data.subject === classesData[i].subject)) {
                    mapData.set(classroomNo, [...(mapData.get(classroomNo) || []), new ClassData(classesData[i].subject, classesData[i].branch, secondHalf)]);
                    const updatedCapacity = capacity - secondHalf;
                    const updatedClassroomData = [...classroomData];
                    updatedClassroomData[j] = [classroomNo, updatedCapacity];
                    setClassroomData(updatedClassroomData);
                    break;
                }

                // Logic for thirdHalf
                if (capacity >= thirdHalf && !mapData.get(classroomNo)?.some(data => data.subject === classesData[i].subject)) {
                    mapData.set(classroomNo, [...(mapData.get(classroomNo) || []), new ClassData(classesData[i].subject, classesData[i].branch, thirdHalf)]);
                    const updatedCapacity = capacity - thirdHalf;
                    const updatedClassroomData = [...classroomData];
                    updatedClassroomData[j] = [classroomNo, updatedCapacity];
                    setClassroomData(updatedClassroomData);
                    break;
                }
            }
        }

        console.log(mapData);
    };


    return (
        <div>
            <h2>Classroom Scheduler</h2>
            <label htmlFor="noOfClasses">Enter Number of Classes You Want for Conducting Exam:</label>
            <input type="number" id="noOfClasses" value={noOfClasses} onChange={handleNoOfClassesChange} />
            {[...Array(noOfClasses)].map((_, index) => (
                <div key={index}>
                    <label htmlFor={`classroom${index}`}>Enter Classroom Number and Number of Benches present in Class [{index + 1}]:</label>
                    <input type="text" id={`classroom${index}`} onChange={(event) => handleClassroomDataChange(index, event)} />
                </div>
            ))}
            <button onClick={scheduleClasses}>Schedule Classes</button>
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
