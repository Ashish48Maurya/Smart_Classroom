import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../Navbar";
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const AssignmentDetail = () => {
    const location = useLocation();
    const assignment = location.state.assignment;
    console.log(assignment);
    // const filePath = assignment.file.replace("uploads\\", "");
    const data = localStorage.getItem("USER");
    const currentUser = JSON.parse(data);
    const { backend_api, token } = useAuth();

    // State to manage file upload
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (id) => {
        const formData = new FormData();
        formData.append("file", file);
        try {
            const res = await fetch(`${backend_api}/submit_assignment/${id}`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer  ${token}`
                },
                body: formData,
            });
            if (res.ok) {
                const data = await res.json();
                toast.success(data.msg)
                console.log(data.msg);
            } else {
                console.error('Assignment Submission Failed');
                toast.error('Assignment Submission Failed');
            }
        } catch (error) {
            console.error('Server Error', error);
            toast.error('Server Error');
        }
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const isAssignmentSubmitted = assignment.students_output.some(student => student._id === currentUser._id);

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

            <div className="card mt-3">
                <h5 className="card-header">Students' Submissions</h5>
                <div className="card-body">
                    <ul className="list-group">
                        {assignment.students_output.length > 0 ? (
                            assignment.students_output.map((submission, index) => (
                                <li key={index} className="list-group-item">
                                    <h6><strong>Student ID:</strong> {submission.fullname}</h6>
                                    <p><strong>SAP ID:</strong> {submission.sapID}</p>
                                    {submission.assignmentPath && (
                                        <div className="mb-3">
                                            <h6><strong>Teacher Attachment</strong></h6>
                                            <iframe
                                                title="PDF Viewer"
                                                src={`http://localhost:8000/${assignment.students_output.find(submission => submission.sapID === currentUser.sapID).assignmentPath}`}
                                                width="100%"
                                                height="500px"
                                                style={{ border: '1px solid #ccc' }}
                                            />
                                        </div>
                                    )}
                                </li>
                            ))
                        ) : (
                            <div>
                                <h6><strong>Submission:</strong> {isAssignmentSubmitted ? 'Submitted' : 'Not submitted'}</h6>
                                {!isAssignmentSubmitted && (
                                    <form encType="multipart/form-data">
                                        <input
                                            type="file"
                                            accept="file/*"
                                            name="file"
                                            onChange={handleFileChange}
                                        />
                                        <button className='submit-btn' onClick={(event) => { event.preventDefault(); handleSubmit(assignment._id) }}>Submit</button>
                                    </form>
                                )}
                            </div>
                        )}
                    </ul>
                </div>
            </div>
            <style>
                {`
                body{
                    margin-top:100px;
                }
                `}
            </style>
        </div>
    );
};

export default AssignmentDetail;
