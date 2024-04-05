import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../Navbar";
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const AssignmentDetail = () => {
    const location = useLocation();
    const assignment = location.state.assignment;

    return (
        <div className="container mt-5">
            <Navbar />
            <div className="card">
                <h5 className="card-header">Assignment Detail</h5>
                <div className="card-body">
                    <h5 className="card-title">{assignment.title}</h5>
                    <p className="card-text">
                        <strong>Description:</strong> {assignment.description}<br />
                        <strong>Due Date:</strong> {formatDate(assignment.dueDate)}<br />
                        <strong>Subject:</strong> {assignment.subject}<br />
                        <strong>Year of Study:</strong> {assignment.yearOfStudy}<br />
                        <strong>Department:</strong> {assignment.department}
                    </p>
                </div>
            </div>


            <h2>File</h2>
                <iframe title="PDF Viewer" src={`http://localhost:8000/${assignment.file}`} width="100%" height="500px"></iframe>
            
        </div>
    );
};

export default AssignmentDetail;
