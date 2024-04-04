import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Navbar from '../Navbar';
import { useAuth } from '../store/auth';

export default function ClassRoom() {
    const [data, setData] = useState('');
    const [strength, setStrength] = useState('');
    const userData = JSON.parse(localStorage.getItem("USER"));
    const [time, setTime] = useState('');
    const [showModal, setShowModal] = useState(false);
    const { token, backend_api, loggedUser } = useAuth();

    const handleCloseModal = () => setShowModal(false);

    const sendMail = async (msg, selectedBranch) => {
        console.log('Selected Branch:', selectedBranch);

        const ans = await fetch(`${backend_api}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                msg,
                branch: selectedBranch,
            })
        });

        if (ans.ok) {
            toast.success("Message Sent Successfully");
        } else {
            console.error('Error:', ans.statusText);
        }
    }

    const handleSubmit = async () => {
        const ans = await fetch(`${backend_api}/find_class/${strength}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (ans.ok) {
            const dataa = await ans.json();
            console.log("Response:", dataa);
            setData(dataa.classrooms);
        } else {
            console.error('Error:', ans.statusText);
        }
    }

    const allocate = async (id) => {
        const ans = await fetch(`${backend_api}/reserve_class/${id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: {
                time_in_hour: time,
                facultyName: loggedUser.fullname,
            }
        });
        if (ans.ok) {
            const updatedData = data.filter((ele) => ele._id !== id);
            setData(updatedData);

            toast.success("Class Allocated Successfully");
            sendMail("There have been some changes in your branch", userData.branch);
            setStrength("");
            setShowModal(true); // Open modal after allocating classroom
        } else {
            console.error('Error:', ans.statusText);
        }
    }

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Class Strength" aria-label="Recipient's username" aria-describedby="button-addon2" value={strength} onChange={(e) => { setStrength(e.target.value) }} />
                    <button className="btn btn-success" type="button" id="button-addon2" onClick={handleSubmit}>Search Class</button>
                </div>

                <div className="table-responsive mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center">Strength</th>
                                <th scope="col" className="text-center">Facility</th>
                                <th scope="col" className="text-center">CR No.</th>
                                <th scope="col" className="text-center">Buttons</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(data) && data.map((ele) => (
                                <tr key={ele._id}>
                                    <td className="text-center">{ele.strength}</td>
                                    <td className="text-center">{ele.facility}</td>
                                    <td className="text-center">{ele.classroom_no}</td>
                                    <td className="text-center">
                                        <button className="btn btn-primary" type="button" id="button-addon2" onClick={() => allocate(ele._id)}>Allocate</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <style>{`
                .input-group input {
                    border: 2px solid black;
                    color: black;
                    font-weight: bolder;
                }
                body {
                    margin-top: 100px;
                }
            `}</style>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Classroom Allocated Successfully</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Class has been allocated successfully.
                    {/* Add any additional information you want to display */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
