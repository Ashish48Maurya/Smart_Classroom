import React from 'react';
import Navbar from '../../Navbar';
import * as XLSX from 'xlsx';

class ClassData {
    constructor(subject, branch, students) {
        this.subject = subject;
        this.branch = branch;
        this.students = students;
    }
}

class Allocate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classRoomNoAlongWithCapacity: [],
            classes: [],
            mapData: new Map(),
            subject: '',
            branch: '',
            students: '',
            year: ''
        };
    }

    handleFileUpload = (e, type) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws, { header: 1 });

            if (type === 'classrooms') {
                this.setState({
                    classRoomNoAlongWithCapacity: data[0].slice(1).map(row => [row[0], [row[1], row[2]]])
                }, () => {
                    this.populateMapData();
                });
            } else if (type === 'students') {
                this.setState({
                    classes: data[0].slice(1).map(row => new ClassData(row[0], row[1], parseInt(row[2]), row[3]))
                }, () => {
                    this.populateMapData();
                });
            }
        };
        reader.readAsBinaryString(file);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { classes, subject, branch, students, year } = this.state;
        const newClass = new ClassData(subject, branch, parseInt(students), year);
        this.setState({ classes: [...classes, newClass], subject: '', branch: '', students: '', year: '' }, () => {
            this.populateMapData();
        });
    }

    populateMapData = () => {
        const { classRoomNoAlongWithCapacity, classes } = this.state;
        const mapData = new Map();

        // Group classes by the first character of the subject
        const groupedClasses = classes.reduce((acc, classData) => {
            const key = classData.subject[0];
            if (!acc[key]) acc[key] = [];
            acc[key].push(classData);
            return acc;
        }, {});

        // Assign classes to classrooms based on capacity and branch restrictions
        for (const [key, classList] of Object.entries(groupedClasses)) {
            for (const classData of classList) {
                for (let i = 0; i < classRoomNoAlongWithCapacity.length; i++) {
                    const [classroomNo, [capacity, branchRestriction]] = classRoomNoAlongWithCapacity[i];
                    if (capacity >= classData.students && (branchRestriction === 1 || branchRestriction === -1)) {
                        if (!mapData.has(classroomNo)) {
                            mapData.set(classroomNo, []);
                        }
                        mapData.get(classroomNo).push(classData);
                        classRoomNoAlongWithCapacity[i][1][0] -= classData.students;
                        classRoomNoAlongWithCapacity[i][1][1] = -1; // Mark as assigned
                        break;
                    }
                }
            }
        }

        this.setState({ mapData });
    }

    componentDidMount() {
        this.populateMapData();
    }

    render() {
        const { mapData, subject, branch, students, year } = this.state;

        return (
            <div className='body'>
                <Navbar/>
                <h2 className='text-center'>Classroom Allocation</h2>
                <form onSubmit={this.handleSubmit}>
                    {/* <div className="form-group">
                        <label>Subject:</label>
                        <input type="text" className="form-control" name="subject" value={subject} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Branch:</label>
                        <input type="text" className="form-control" name="branch" value={branch} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>No Of Students:</label>
                        <input type="number" className="form-control" name="students" value={students} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Year:</label>
                        <input type="text" className="form-control" name="year" value={year} onChange={this.handleChange} required />
                    </div> */}
                    <div className="form-group">
                        <label>Upload Excel File for Classrooms:</label>
                        <input type="file" onChange={(e) => this.handleFileUpload(e, 'classrooms')} required />
                    </div>
                    <div className="form-group">
                        <label>Upload Excel File for Students:</label>
                        <input type="file" onChange={(e) => this.handleFileUpload(e, 'students')} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Class</button>
                </form>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ClassRoom No.</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Branch</th>
                            <th scope="col">No Of Students</th>
                            <th scope="col">Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from(mapData).map(([classroomNo, data]) => (
                            data.map((classData, index) => (
                                <tr key={`${classroomNo}-${index}`}>
                                    {index === 0 && <td rowSpan={data.length}>{classroomNo}</td>}
                                    <td>{classData.subject}</td>
                                    <td>{classData.branch}</td>
                                    <td>{classData.students}</td>
                                    <td>{classData.year}</td>
                                </tr>
                            ))
                        ))}
                    </tbody>
                </table>
                <style>{`
                    th, td {
                        text-align: center;
                    }
                    .body {
                        margin-left: 100px;
                        margin-right: 100px;
                        margin-top:100px;
                    }
                    input[type=file]{
                        margin-left:30px;
                    }
                `}</style>
            </div >
        );
    }
}

export default Allocate;