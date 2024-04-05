import React from 'react';
import { useLocation } from 'react-router-dom';

const AssignmentDetail = () => {
    const location = useLocation();
    const assignment = location.state.assignment;
    console.log(assignment.file.replace("uploads\\", ""));
    const filePath = assignment.file.replace("uploads\\", "");


    // ISS PAGE KA CSS BAADME KARTAU ABHI TERKO DEKHNA THA SO I'll PUSH


    return (
        <div>
            <h1>Assignment Detail</h1>
            <p>Title: {assignment.title}</p>
            <p>Description: {assignment.description}</p>
            <p>Due Date: {assignment.dueDate}</p>
            <p>Subject: {assignment.subject}</p>
            <p>Year of Study: {assignment.yearOfStudy}</p>
            <p>Department: {assignment.department}</p>

            <h2>Students' Submissions</h2>
            <ul>
                {assignment.students_output.map((submission, index) => (
                    <li key={index}>
                        <p>Student ID: {submission.fullname}</p>
                        <p>SAP ID: {submission.sapID}</p>
                        <p>Assignment Path: {submission.assignmentPath}</p>
                    </li>
                ))}
            </ul>

            <h2>PDF File</h2>
            {filePath && (
                <iframe title="PDF Viewer" src={`http://localhost:8000/uploads/${filePath}`} width="100%" height="500px"></iframe>
            )}
        </div>
    );
};

export default AssignmentDetail;