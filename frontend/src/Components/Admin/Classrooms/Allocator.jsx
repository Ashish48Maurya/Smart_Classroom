import React, { Component } from 'react';
import Navbar from '../../Navbar';

class ClassData {
    constructor(subject, branch, students) {
        this.subject = subject;
        this.branch = branch;
        this.students = students;
    }
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noOfClasses: 0,
            classRoomNoAlongWithCapacity: [],
            classes: [
                new ClassData("Maths", "CSE", 60),
                new ClassData("DAA", "CSE", 60),
                new ClassData("WADL", "CSE", 60),
                new ClassData("WADL", "IOT", 60)
            ],
            mapData: new Map(),
            showInput: false
        }
    }

    componentDidMount() {
        this.fetchClassrooms();
    }

    fetchClassrooms = () => {
        fetch('http://localhost:8000/get_classrooms')
            .then(response => response.json())
            .then(data => {
                // Assuming the response is an array of objects with classroom number and capacity
                const classRoomNoAlongWithCapacity = data.map(item => [item.classroomNumber, 2 * item.capacity]);
                this.setState({ classRoomNoAlongWithCapacity, noOfClasses: data.length });
            })
            .catch(error => console.error('Error fetching classrooms:', error));
    }

    allocateClasses = () => {
        const { classes, classRoomNoAlongWithCapacity, mapData } = this.state;

        for (let i = 0; i < classes.length; i++) {
            let firstHalf = Math.floor(classes[i].students / 3);
            let secondHalf = firstHalf;
            let thirdHalf = classes[i].students - 2 * firstHalf;

            for (let [ele, capacity] of classRoomNoAlongWithCapacity) {
                if (capacity >= firstHalf) {
                    let subjectNotPresent = true;
                    for (let data of (mapData.get(ele) || [])) {
                        if (data.subject === classes[i].subject) {
                            subjectNotPresent = false;
                            break;
                        }
                    }
                    if (subjectNotPresent) {
                        let dataList = mapData.get(ele) || [];
                        dataList.push(new ClassData(classes[i].subject, classes[i].branch, firstHalf));
                        mapData.set(ele, dataList);
                        capacity -= firstHalf;
                        classRoomNoAlongWithCapacity[classRoomNoAlongWithCapacity.findIndex(([k]) => k === ele)][1] = capacity;
                        break;
                    }
                }
            }

            for (let [ele, capacity] of classRoomNoAlongWithCapacity) {
                if (capacity >= secondHalf) {
                    let subjectNotPresent = true;
                    for (let data of (mapData.get(ele) || [])) {
                        if (data.subject === classes[i].subject) {
                            subjectNotPresent = false;
                            break;
                        }
                    }
                    if (subjectNotPresent) {
                        let dataList = mapData.get(ele) || [];
                        dataList.push(new ClassData(classes[i].subject, classes[i].branch, secondHalf));
                        mapData.set(ele, dataList);
                        capacity -= secondHalf;
                        classRoomNoAlongWithCapacity[classRoomNoAlongWithCapacity.findIndex(([k]) => k === ele)][1] = capacity;
                        break;
                    }
                }
            }

            for (let [ele, capacity] of classRoomNoAlongWithCapacity) {
                if (capacity >= thirdHalf) {
                    let subjectNotPresent = true;
                    for (let data of (mapData.get(ele) || [])) {
                        if (data.subject === classes[i].subject) {
                            subjectNotPresent = false;
                            break;
                        }
                    }
                    if (subjectNotPresent) {
                        let dataList = mapData.get(ele) || [];
                        dataList.push(new ClassData(classes[i].subject, classes[i].branch, thirdHalf));
                        mapData.set(ele, dataList);
                        capacity -= thirdHalf;
                        classRoomNoAlongWithCapacity[classRoomNoAlongWithCapacity.findIndex(([k]) => k === ele)][1] = capacity;
                        break;
                    }
                }
            }
        }

        this.setState({ mapData });
    }

    render() {
        const { mapData } = this.state;

        return (
            <div>
                <Navbar />
                <button onClick={this.allocateClasses}>Allocate Classes</button>
                {
                    Array.from(mapData.entries()).map(([key, value]) => (
                        <div key={key}>
                            <h3>Classroom Number: {key}</h3>
                            {
                                value.map((data, index) => (
                                    <div key={index}>
                                        <p>Subject: {data.subject}, Branch: {data.branch}, Students: {data.students}</p>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
                <style>
                    {`
                    body{
                        margin-top:100px;
                    }
                    `}
                </style>
            </div>
        );
    }
}

export default Main;
