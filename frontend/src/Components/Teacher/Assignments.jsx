import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

const Assignments = () => {
    return (
        <>
            <Navbar />
            <div className="ass-cont">
                <h2>Your Assignments</h2>
                <div className="createbtn">
                    <Link to="/give-assignment">Create a new assignment <div className="circle"><i className="plus">+</i></div></Link>
                </div>
                <div className="assignment-container">
                    {/* {assignments.map((assignment) => (
                <div className="ass-card" onClick={() => handleAssignmentClick(assignment)} key={assignment._id}>
                    <div className="ass-title">{assignment.title}</div>
                    <div className="ass-desc">{assignment.description}</div>
                    <div className="ass-date">{new Date(assignment.dueDate).toLocaleDateString()}</div>
                    <div className="ass-details">
                        <span className="ass-subject">{assignment.subject}</span>
                        <span className="ass-yos">{assignment.yearOfStudy}</span>
                    </div>
                    <span className="ass-dept">{assignment.department}</span>
                </div>
            ))} */}
                    <div className="ass-card">
                        <div className="ass-title">CN Assignment 1</div>
                        <div className="ass-desc">This is your CN Assignment 1</div>
                        <div className="ass-date">05-04-24</div>
                        <div className="ass-details">
                            <span className="ass-yos">1st</span>
                            <span className="ass-dept">ICB</span>
                        </div>
                        <span className="ass-subject">CN</span>
                    </div>
                    <div className="ass-card">
                        <div className="ass-title">DAA Assignment</div>
                        <div className="ass-desc">This is your DAA Assignment</div>
                        <div className="ass-date">06-04-24</div>
                        <div className="ass-details">
                            <span className="ass-yos">1st</span>
                            <span className="ass-dept">ICB</span>
                        </div>
                        <span className="ass-subject">DAA</span>
                    </div>
                    <div className="ass-card">
                        <div className="ass-title">CN Assignment 1</div>
                        <div className="ass-desc">This is your CN Assignment 1</div>
                        <div className="ass-date">05-04-24</div>
                        <div className="ass-details">
                            <span className="ass-yos">1st</span>
                            <span className="ass-dept">ICB</span>
                        </div>
                        <span className="ass-subject">CN</span>
                    </div>
                    <div className="ass-card">
                        <div className="ass-title">DAA Assignment</div>
                        <div className="ass-desc">This is your DAA Assignment</div>
                        <div className="ass-date">06-04-24</div>
                        <div className="ass-details">
                            <span className="ass-yos">1st</span>
                            <span className="ass-dept">ICB</span>
                        </div>
                        <span className="ass-subject">DAA</span>
                    </div>
                    <div className="ass-card">
                        <div className="ass-title">CN Assignment 1</div>
                        <div className="ass-desc">This is your CN Assignment 1</div>
                        <div className="ass-date">05-04-24</div>
                        <div className="ass-details">
                            <span className="ass-yos">1st</span>
                            <span className="ass-dept">ICB</span>
                        </div>
                        <span className="ass-subject">CN</span>
                    </div>
                    <div className="ass-card">
                        <div className="ass-title">DAA Assignment</div>
                        <div className="ass-desc">This is your DAA Assignment</div>
                        <div className="ass-date">06-04-24</div>
                        <div className="ass-details">
                            <span className="ass-yos">1st</span>
                            <span className="ass-dept">ICB</span>
                        </div>
                        <span className="ass-subject">DAA</span>
                    </div>
                    <div className="ass-card">
                        <div className="ass-title">CN Assignment 1</div>
                        <div className="ass-desc">This is your CN Assignment 1</div>
                        <div className="ass-date">05-04-24</div>
                        <div className="ass-details">
                            <span className="ass-yos">1st</span>
                            <span className="ass-dept">ICB</span>
                        </div>
                        <span className="ass-subject">CN</span>
                    </div>
                    <div className="ass-card">
                        <div className="ass-title">DAA Assignment</div>
                        <div className="ass-desc">This is your DAA Assignment</div>
                        <div className="ass-date">06-04-24</div>
                        <div className="ass-details">
                            <span className="ass-yos">1st</span>
                            <span className="ass-dept">ICB</span>
                        </div>
                        <span className="ass-subject">DAA</span>
                    </div>
                    <div className="ass-card">
                        <div className="ass-title">CN Assignment 1</div>
                        <div className="ass-desc">This is your CN Assignment 1</div>
                        <div className="ass-date">05-04-24</div>
                        <div className="ass-details">
                            <span className="ass-yos">1st</span>
                            <span className="ass-dept">ICB</span>
                        </div>
                        <span className="ass-subject">CN</span>
                    </div>
                    <div className="ass-card">
                        <div className="ass-title">DAA Assignment</div>
                        <div className="ass-desc">This is your DAA Assignment</div>
                        <div className="ass-date">06-04-24</div>
                        <div className="ass-details">
                            <span className="ass-yos">1st</span>
                            <span className="ass-dept">ICB</span>
                        </div>
                        <span className="ass-subject">DAA</span>
                    </div>
                    <style>
                        {`

                body{
                    margin-top:100px;
                }

                .ass-cont{
                    margin:0 100px 0 100px;
                }

                .createbtn{
                    float:right;
                    margin:0 0 30px 100px;
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

                .assignment-container {
                    display: flex;
                    flex-direction:column;
                    justify-content: center;
                    gap: 20px;
                    width:100%;
                }

                .assignment-container h2{
                    text-align:center;
                }

                .ass-card {
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    text-align:center;
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    background: rgb(246,243,249);
                    background: linear-gradient(163deg, rgba(246,243,249,1) 14%, rgba(112,137,174,1) 100%);
                    padding: 20px;
                    width: 100%;
                    cursor:pointer;
                    transition: all 0.3s ease;
                }

                .ass-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
                }

                .ass-title {
                    font-size: 1.2rem;
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                .ass-desc {
                    margin-bottom: 10px;
                }

                .ass-date {
                    font-style: italic;
                    margin-bottom: 10px;
                }

                .ass-details {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .ass-details span{
                    margin: 0 5px 0 5px;
                }

                .ass-subject{
                    font-weight:bold;
                    color:white;
                    background: rgb(0,102,255);
                    background: linear-gradient(163deg, rgb(255, 255, 255) 14%, rgbargb(154, 165, 183)%);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                    padding:20px;
                    text-align:center;
                    width:max-content;
                    border-radius: 10%;
                }

                .ass-yos,
                .ass-dept {
                    font-size: 0.9rem;
                    font-weight: bold;
                    text-transform: uppercase;
                }

                @media screen and (max-width:770px){
                    .ass-card{
                        flex-direction:column;
                    }
                }
                `}
                    </style>
                </div>
            </div>
        </>
    )
}

export default Assignments;