import React, { useCallback, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from './store/auth';

export default function Edit() {
    const [classroom_no, setClassroomNo] = useState('');
    const [faculty_name, setFacultyName] = useState('');
    const [facility, setFacility] = useState('');
    const [strength, setStrength] = useState('');
    const [displayedStrength, setDisplayedStrength] = useState('');
    const [isReserved, setIsReserved] = useState(false);
    const [isLab, setIsLab] = useState(false);
    const navigate = useNavigate();
    const { backend_api, token } = useAuth();

    const { id } = useParams();

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
                const dataa = await ans.json();
                console.log('Response:', dataa.msg);
                // Update the state with the response data
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


    const getClassrooms = useCallback(async () => {
        try {
            const ans = await fetch(`${backend_api}/class/${id}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (ans.ok) {
                const dataa = await ans.json();
                console.log(dataa);

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
    }, [backend_api, token, id]);

    useEffect(() => {
        getClassrooms();
    })

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="col-lg-6 col-md-8 col-sm-10 mx-auto cont-form">
                    <h2>Update Classroom</h2>
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
                            <label htmlFor="faculty">Ente~r Faculty Name</label>
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
                                onChange={(e) => setDisplayedStrength(e.target.value)}
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
                    <div className="input-group mb-3">
                        <div className="col-md-4">
                            <label>Is Reserved?</label>
                        </div>
                        <div className="col-md-8">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isReserved"
                                    id="reservedYes"
                                    checked={isReserved}
                                    onChange={() => setIsReserved(true)}
                                />
                                <label className="form-check-label" htmlFor="reservedYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isReserved"
                                    id="reservedNo"
                                    checked={!isReserved}
                                    onChange={() => setIsReserved(false)}
                                />
                                <label className="form-check-label" htmlFor="reservedNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div className="col-md-4">
                            <label>Is Lab?</label>
                        </div>
                        <div className="col-md-8">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isLab"
                                    id="labYes"
                                    checked={isLab}
                                    onChange={() => setIsLab(true)}
                                />
                                <label className="form-check-label" htmlFor="labYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isLab"
                                    id="labNo"
                                    checked={!isLab}
                                    onChange={() => setIsLab(false)}
                                />
                                <label className="form-check-label" htmlFor="labNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            className="btn btn-success"
                            onClick={() => handleSubmit()}
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
                    background: rgba(255, 255, 255, 0.26);
                    border-radius: 50px;
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
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
                    margin-bottom: 30px;
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
