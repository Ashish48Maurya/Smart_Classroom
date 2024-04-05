import React from 'react';
import { useLocation } from 'react-router-dom';

const AssignmentDetail = () => {
    const location = useLocation();
    const assignment = location.state.assignment;

    return (
        <div>
            <h1>Assignment Detail</h1>
            <p>Title: {assignment.title}</p>
            <p>Description: {assignment.description}</p>
            <p>Due Date: {assignment.dueDate}</p>
            <p>Subject: {assignment.subject}</p>
            <p>Year of Study: {assignment.yearOfStudy}</p>
            <p>Department: {assignment.department}</p>


            <h2>File</h2>
                <iframe title="PDF Viewer" src={`http://localhost:8000/${assignment.file}`} width="100%" height="500px"></iframe>

            
        </div>
    );
};

export default AssignmentDetail;