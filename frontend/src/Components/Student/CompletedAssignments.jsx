// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../store/auth';

// const CompletedAssignments = () => {
//     const navigate = useNavigate();
//     const [assignments, setAssignments] = useState([]);
//     const {backend_api,token} = useAuth()

//     const getData = async () => {
//         try {
//             const res = await fetch(`${backend_api}/Students_assignments`, {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer  ${token}`
//                 },
//             });

//             if (res.status === 200) {
//                 const data = await res.json();
//                 const filteredAssignments = data.data.filter((assignment) => assignment.students_output.length > 0);
//                 setAssignments(filteredAssignments);
//             } else {
//                 console.log(res);
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         getData();
//     }, []);

//     const handleAssignmentClick = (assignment) => {
//         navigate(`/assignment-details`, { state: { assignment } });
//     };

//     return (
//         <div className="assignment-container">
//             <h2>Completed Assignments</h2>
//             {assignments.map((assignment) => (
//                 <div className="ass-card" onClick={() => handleAssignmentClick(assignment)} key={assignment._id}>
//                     <div className="ass-title">{assignment.title}</div>
//                     <div className="ass-desc">{assignment.description}</div>
//                     <div className="ass-date">{new Date(assignment.dueDate).toLocaleDateString()}</div>
//                     <div className="ass-details">
//                     <span className="ass-dept mx-5">{assignment.department}</span>
//                         <span className="ass-yos mx-5">{assignment.yearOfStudy}</span>
//                     </div>
//                         <span className="ass-subject">{assignment.subject}</span>
//                 </div>
//             ))}
            
//             <style>
//                 {`
//                 .assignment-container {
//                     display: flex;
//                     flex-direction:column;
//                     justify-content: center;
//                     gap: 20px;
//                     width:100%;
//                 }

//                 .assignment-container h2{
//                     text-align:center;
//                 }

//                 .ass-card {
//                     display:flex;
//                     justify-content: space-between;
//                     align-items: center;
//                     text-align:center;
//                     background-color: #fff;
//                     border-radius: 10px;
//                     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//                     background: rgb(246,243,249);
//                     background: linear-gradient(163deg, rgba(246,243,249,1) 14%, rgba(112,137,174,1) 100%);
//                     padding: 20px;
//                     width: 100%;
//                     cursor:pointer;
//                     transition: all 0.3s ease;
//                 }

//                 .ass-card:hover {
//                     transform: translateY(-5px);
//                     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
//                 }

//                 .ass-title {
//                     font-size: 1.2rem;
//                     font-weight: bold;
//                     margin-bottom: 10px;
//                 }

//                 .ass-desc {
//                     margin-bottom: 10px;
//                 }

//                 .ass-date {
//                     font-style: italic;
//                     margin-bottom: 10px;
//                 }

//                 .ass-details {
//                     display: flex;
//                     justify-content: space-between;
//                     align-items: center;
//                 }

//                 .ass-details span{
//                     margin: 0 5px 0 5px;
//                 }

//                 .ass-subject{
//                     font-weight:bold;
//                     color:white;
//                     background: rgb(0,102,255);
//                     background: linear-gradient(163deg, rgb(255, 255, 255) 14%, rgbargb(154, 165, 183)%);
//                     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//                     padding:20px;
//                     text-align:center;
//                     width:max-content;
//                     border-radius: 10%;
//                 }

//                 .ass-yos,
//                 .ass-dept {
//                     font-size: 0.9rem;
//                     font-weight: bold;
//                     text-transform: uppercase;
//                 }

//                 @media screen and (max-width:770px){
//                     .ass-card{
//                         flex-direction:column;
//                     }
//                 }
//                 `}
//             </style>
//         </div>
//     );
// }

// export default CompletedAssignments;




import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import Navbar from '../Navbar';

const CompletedAssignments = () => {
    const { backend_api, token } = useAuth();
    const [assignments, setAssignments] = useState([]);

    const data = localStorage.getItem("USER");
  const userData = JSON.parse(data);

    const submittedAssignments = async () => {
        try {
            const res = await fetch(`${backend_api}/submitted_assignments`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer  ${token}`
                },
            });
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                setAssignments(data.data); // Access the 'data' property of the response
            } else {
                console.error('Failed to fetch assignments:', res.statusText);
            }
        } catch (error) {
            console.error('Error fetching assignments:', error);
        }
    }

    useEffect(() => {
        submittedAssignments();
    }, []);

    return (
        <>
            <Navbar/>
            <div>
                <h1>Assignments</h1>
                <div className="table-responsive">
                    <table id='assignments'>
                        <thead>
                            <tr className='text-center'>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Due Date</th>
                                <th>Subject</th>
                                <th>Year of Study</th>
                                <th>Department</th>
                                <th>Document</th>
                                <th>Submitted Doc</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assignments.map(assignment => (
                                <tr key={assignment._id}>
                                    <td>{assignment.title}</td>
                                    <td>{assignment.description}</td>
                                    <td>{new Date(assignment.dueDate).toLocaleDateString()}</td>
                                    <td>{assignment.subject}</td>
                                    <td>{assignment.yearOfStudy}</td>
                                    <td>{assignment.department}</td>
                                    <td>{assignment.file && <a href={`http://localhost:8000/${assignment.file}`}>View File</a>}</td>
                                    <td>
                                    {<a href={`http://localhost:8000/${assignment.students_output.find(submission => submission.sapID === userData.sapID).assignmentPath}`} target="_blank" rel="noopener noreferrer">View Submitted</a>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <style>
                {`
                body{
                    margin-top:100px;
                }

                .createbtn{
                    float:right;
                    margin-right:100px;
                    text-align:center;
                    width:max-content;
                    font-size:18px;
                }

                .createbtn a{
                    display:flex;
                    justfify-content:center;
                    align-items:center;
                }

                .circle {
                    width:35px;
                    height:35px;
                    border:2px solid #007bff;
                    border-radius: 50%;
                    text-align:center;
                    color: #fff;
                    font-size: 18px;
                    margin-left:10px;
                }

                .plus {
                    line-height: 0;
                    color: #007bff;
                }

                .table-responsive{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }

                #assignments {
                    border-collapse: collapse;
                    margin: 25px 0;
                    border-radius: 10px;
                    font-size: 0.9em;
                    font-family: sans-serif;
                    min-width: 400px;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
                    width: 90%;
                    border-collapse: collapse;   
                    background-color:white;
                    margin:20px;
                }
                #assignments thead tr{
                    background-color: #3e79ff;
                    color: #ffffff;
                    text-align: left;
                }

                th, td {
                    padding: 12px 15px;
                    text-align:center;
                }
                #assignments tbody tr {
                    border-bottom: 1px solid #dddddd;
                    cursor:pointer
                }

                #assignments tbody tr:nth-of-type(even) {
                    background-color: #f3f3f3;
                }

                #assignments tbody tr:last-of-type {
                    border-bottom: 2px solid #3e79ff;
                }

                #assignments tbody tr.active-row {
                    font-weight: bold;
                    color: #3e79ff;
                }

                #assignments tbody tr:hover,
                #assignments tbody tr:focus{
                    font-weight: bold;
                    background-color: #dddddd;
                }

                th,td{
                    text-align:center;
                }
                `}
            </style>
        </>
    );
}

export default CompletedAssignments;