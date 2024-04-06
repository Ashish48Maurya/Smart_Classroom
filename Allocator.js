const fs = require('fs');

class ClassData {
    constructor(subject, branch, students) {
        this.subject = subject;
        this.branch = branch;
        this.students = students;
    }
}

function main() {
    let noOfClasses;
    console.log("Enter Number of Classes You Want for Conducting Exam: ");
    noOfClasses = parseInt(readlineSync.question());

    let classRoomNoAlongWithCapacity = [];
    for (let i = 1; i <= noOfClasses; i++) {
        let classroomNo, capacity;
        console.log(`Enter ClassRoom Number and Number of Benches present in Class [${i}] :`);
        [classroomNo, capacity] = readlineSync.question().split(' ').map(Number);
        classRoomNoAlongWithCapacity.push([classroomNo, 2 * capacity]);
        console.log();
    }

    const classes = [
        new ClassData("Maths", "CSE", 60),
        new ClassData("DAA", "CSE", 60),
        new ClassData("WADL", "CSE", 60),
        new ClassData("WADL", "IOT", 60)
    ];

    let mapData = new Map();

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

    for (let [key, value] of mapData) {
        console.log(`Classroom Number: ${key}`);
        for (let data of value) {
            console.log(`Subject: ${data.subject}, Branch: ${data.branch}, Students: ${data.students}`);
        }
        console.log("-------------------");
    }
}

const readlineSync = require('readline-sync');
main();