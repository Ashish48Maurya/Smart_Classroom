import React from 'react';
import { useLocation } from 'react-router-dom';

const AssignmentDetail = () => {
    const location = useLocation();
    const assignment = location.state.assignment; // Access the inner assignment object

    console.log(assignment);

    return (
        <div>
            <h1>Assignment Detail</h1>
            <p>Title: {assignment.title}</p>
            <p>Description: {assignment.description}</p>
            <p>Due Date: {assignment.dueDate}</p>
            <p>Subject: {assignment.subject}</p>
            <p>Year of Study: {assignment.yos}</p>
            <p>Department: {assignment.department}</p>
        </div>
    );
}

export default AssignmentDetail;
