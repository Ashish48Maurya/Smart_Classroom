import React, { useEffect, useState } from 'react';
import Navbar from '../../Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import { toast } from 'react-toastify';

export default function Edit() {
    const navigate = useNavigate();
    const location = useLocation();
    const classData = location.state.classData;

    const [id, setId] = useState(classData._id || '');
    const [classroom_no, setClassroomNo] = useState('');
    const [faculty_name, setFacultyName] = useState('');
    const [facility, setFacility] = useState('');
    const [strength, setStrength] = useState('');
    const [displayedStrength, setDisplayedStrength] = useState('');
    const [isReserved, setIsReserved] = useState(false);
    const [isLab, setIsLab] = useState(false);
    const { backend_api, token } = useAuth();

    const handleSubmit = async () => {
        try {
            const ans = await fetch(`${backend_api}/update_class/${id}`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    classroom_no,
                    faculty_name,
                    strength,
                    facility,
                    isReserved,
                    isLab,
                }),
            });

            if (ans.ok) {
                navigate('/manage');
                toast.success("Classrooms Updated Successfully !!!");
                const dataa = await ans.json();
                console.log('Response:', dataa.msg);
                setClassroomNo(dataa.msg.classroom_no);
                setFacultyName(dataa.msg.faculty_name);
                setFacility(dataa.msg.facility);
                setStrength(dataa.msg.strength);
                setDisplayedStrength(dataa.msg.strength);
                setIsReserved(dataa.msg.isReserved);
                setIsLab(dataa.msg.isLab);
            } else {
                console.error('Error:', ans.statusText);
            }
        } catch (error) {
            console.error('Error during fetch:', error);
        }
    };

    useEffect(() => {
        setId(classData._id);
        setClassroomNo(classData.classroom_no || '');
        setFacultyName(classData.faculty_name || '');
        setFacility(classData.facility || '');
        setStrength(classData.strength || '');
        setDisplayedStrength(classData.strength || '');
        setIsReserved(classData.isReserved || false);
        setIsLab(classData.isLab || false);
    }, [classData]);

    const handleIncrease = () => {
        setStrength((prevStrength) => {
            const newStrength = prevStrength + 1;
            setDisplayedStrength(newStrength.toString());
            return newStrength;
        });
    };

    const handleDecrease = () => {
        setStrength((prevStrength) => {
            const newStrength = prevStrength - 1;
            setDisplayedStrength(newStrength.toString());
            return newStrength;
        });
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="col-lg-6 col-md-8 col-sm-10 mx-auto cont-form">
                    <h2 style={{ marginBottom: "50px" }}>Update Classroom</h2>
                    <div className="input-group mb-3">
                        <div className="col-md-4">
                            <label htmlFor="room">Enter Classroom No.</label>
                        </div>
                        <div className="col-md-8">
                            <input
                                type="text"
                                id="room"
                                className="form-control"
                                placeholder="Enter ClassRoom No."
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={classroom_no}
                                onChange={(e) => setClassroomNo(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div className="col-md-4">
                            <label htmlFor="faculty">Enter Faculty Name</label>
                        </div>
                        <div className="col-md-8">
                            <input
                                type="text"
                                id="faculty"
                                className="form-control"
                                placeholder="Enter Faculty Name"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={faculty_name}
                                onChange={(e) => setFacultyName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div className="col-md-4">
                            <label htmlFor="facility">Enter Facility Type</label>
                        </div>
                        <div className="col-md-8">
                            <input
                                type="text"
                                id="facility"
                                className="form-control"
                                placeholder="Enter Facility Type"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={facility}
                                onChange={(e) => setFacility(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div className="col-md-4 strngth-lbl">
                            <label htmlFor="strength">Enter Strength of Class</label>
                        </div>
                        <div className="col-md-8">
                            <input
                                type="text"
                                id="strength"
                                className="form-control"
                                placeholder="Enter Strength Of Class"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={displayedStrength}
                                onChange={(e) => {
                                    setDisplayedStrength(e.target.value);
                                    setStrength(parseInt(e.target.value)); // Ensure strength is an integer
                                }}
                            />
                            <div className="btns-update-grp">
                                <div className="btn1-grp">
                                    <button
                                        className='str-btns'
                                        style={{
                                            color: "white",
                                            backgroundColor: "green"
                                        }}
                                        onClick={handleIncrease}
                                    >
                                        +
                                    </button>
                                    <span>Increase Strength</span>
                                </div>
                                <div className="btn1-grp">
                                    <button
                                        className='str-btns'
                                        style={{
                                            color: "white",
                                            backgroundColor: "red"
                                        }}
                                        onClick={handleDecrease}
                                    >
                                        -
                                    </button>
                                    <span>Decrease Strength</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            style={{ marginTop: "20px" }}
                            className="btn btn-success"
                            onClick={handleSubmit} // Don't invoke handleSubmit, just pass a reference
                        >
                            Change
                        </button>
                    </div>
                </div>
            </div>
            <style>{`
                * {
                    padding: 0;
                    margin: 0;
                }
                body {
                    margin-top: 150px !important;
                }
                .cont-form {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    background: rgb(246,243,249);
                    background: linear-gradient(163deg, rgba(246,243,249,1) 14%, rgba(112,137,174,1) 100%);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                    border-radius: 50px;
                    backdrop-filter: blur(9.6px);
                    margin: 10px 20px 0 20px;
                    -webkit-backdrop-filter: blur(9.6px);
                    width: 80%;
                    height: auto;
                    padding:20px;
                    margin-bottom:50px;
                }
                .input-group {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    text-align: center;
                    margin-bottom: 20px;
                }
                .text-center button{
                    background: rgb(0,102,255);
                    background: linear-gradient(163deg, rgba(0,102,255,1) 0%, rgba(110,55,165,1) 82%);
                    border:none;
                    cursor:pointer;
                }
                .text-center button:hover{
                    background: rgb(0,102,255);
                    background: linear-gradient(163deg, rgb(255, 255, 255) 14%, rgbargb(154, 165, 183)%);
                }
                .str-btns {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    border-radius: 50% !important;
                    text-align: center;
                    font-size: 20px;
                    width: 30px;
                    height: 30px;
                    border: none;
                }
                .btn1-grp {
                    margin: 0 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .btns-update-grp {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: row;
                    margin-top: 20px;
                }
                .strngth-lbl {
                    margin-bottom: 70px;
                }
                @media screen and (max-width:768px) {
                    .strngth-lbl {
                        margin-bottom: 0px;
                    }
                }
            `}</style>
        </>
    );
}