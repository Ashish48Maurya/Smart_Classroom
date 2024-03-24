import React from 'react'
import Navbar from './Components/Navbar'
import { Link } from 'react-router-dom'

const Assignments = () => {
    return (
        <>
            <Navbar />
            <div className="ass-cont">
                <h1 style={{
                    textAlign: "center"
                }}>Your Assignments</h1>
                <div className="createbtn">
                    <Link to="/give-assignment">Create a new assignment <div className="circle"><i className="plus">+</i></div></Link>
                </div>
                <div className="table-responsive">
                    <table id='assignments'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Assigned Date</th>
                                <th>Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Assignment 1</td>
                                <td>This is the description of Assignment 1</td>
                                <td>01/01/2022</td>
                                <td>01/15/2022</td>
                            </tr>
                            <tr>
                                <td>Assignment 2</td>
                                <td>This is the description of Assignment 2</td>
                                <td>01/05/2022</td>
                                <td>01/20/2022</td>
                            </tr>
                            <tr>
                                <td>Assignment 3</td>
                                <td>This is the description of Assignment 2</td>
                                <td>01/05/2022</td>
                                <td>01/20/2022</td>
                            </tr>
                            <tr>
                                <td>Assignment 4</td>
                                <td>This is the description of Assignment 2</td>
                                <td>01/05/2022</td>
                                <td>01/20/2022</td>
                            </tr>
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
                `}
            </style>
        </>
    )
}

export default Assignments
