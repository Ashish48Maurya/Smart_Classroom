import React from 'react';
import { useLocation } from 'react-router-dom';

const AssignmentDetail = () => {
    const location = useLocation();
    const assignment = location.state.assignment;
    const filePath = assignment.file.replace("uploads\\", "");

    return (
        <div className="assignment-detail-container">
            <h1>Assignment Detail</h1>
            <div className="assignment-info">
                <p><span>Title:</span> {assignment.title}</p>
                <p><span>Description:</span> {assignment.description}</p>
                <p><span>Due Date:</span> {assignment.dueDate}</p>
                <p><span>Subject:</span> {assignment.subject}</p>
                <p><span>Year of Study:</span> {assignment.yearOfStudy}</p>
                <p><span>Department:</span> {assignment.department}</p>
            </div>

            <h2>Students' Submissions</h2>
            <ul className="submission-list">
                {assignment.students_output.map((submission, index) => (
                    <li className="submission-item" key={index}>
                        <p><span>Student ID:</span> {submission.fullname}</p>
                        <p><span>SAP ID:</span> {submission.sapID}</p>
                        <p><span>Assignment Path:</span> {submission.assignmentPath}</p>
                    </li>
                ))}
            </ul>

            <h2>Attcahments: </h2>
            {filePath && (
                <iframe title="PDF Viewer" src={`http://localhost:8000/uploads/${filePath}`} width="100%" height="500px"></iframe>
            )}

            <style>
                {`
                .assignment-detail-container {
    margin: 20px;
}

h1, h2 {
    text-align: center;
}

.assignment-info, .submission-list {
    margin-bottom: 20px;
}

.assignment-info p, .submission-list .submission-item p {
    margin: 5px 0;
}

.assignment-info p span, .submission-list .submission-item p span {
    font-weight: bold;
    margin-right: 5px;
}

.submission-list .submission-item {
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}

iframe {
    border: none;
}

                `}
            </style>
        </div>
    );
};

export default AssignmentDetail;
