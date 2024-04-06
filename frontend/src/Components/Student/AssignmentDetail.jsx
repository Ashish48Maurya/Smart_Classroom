import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../Navbar";

const AssignmentDetail = () => {
    const location = useLocation();
    const assignment = location.state.assignment;

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    const SubmissionViewer = ({ src }) => (
        <div className="submission-viewer">
            <iframe
                title="PDF Viewer"
                src={src}
                width="100%"
                height="500px"
                style={{ border: '1px solid #ccc' }}
            />
        </div>
    );

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
                        <strong>Department:</strong> {assignment.department}<br />
                        <strong>Teacher Attachment</strong>
                        <SubmissionViewer src={`http://localhost:8000/${assignment.file}`} />
                        {assignment.students_output.length > 0 ? (
                            <div>
                                <h6><strong>Student Submissions</strong></h6>
                                <ul className="list-group">
                                    {assignment.students_output.map((submission, index) => (
                                        <li key={index} className="list-group-item">
                                            <h6><strong>Student ID:</strong> {submission.fullname}</h6>
                                            <p><strong>SAP ID:</strong> {submission.sapID}</p>
                                            {submission.assignmentPath && (
                                                <div className="mb-3">
                                                    <h6><strong>Student Submission</strong></h6>
                                                    <SubmissionViewer src={`http://localhost:8000/${submission.assignmentPath}`} />
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <h6><strong>Submission:</strong> Pending</h6>
                        )}
                    </p>
                </div>
            </div>
            <style>
                {`
               body {
  margin-top: 100px;
  font-family: Arial, sans-serif;
}

.card {
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #3e79ff;
  color: #fff;
}

.card-body {
  padding: 20px;
}

.card-text {
  margin-bottom: 0;
}

.list-group-item {
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.submission-viewer {
  margin-top: 20px;
}
                `}
            </style>
        </div>
    );
};

export default AssignmentDetail;