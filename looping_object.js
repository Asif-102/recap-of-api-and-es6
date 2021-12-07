const students = {
    student1:'Arif',
    student2:'Saad',
    student3:'Amit'
}

// console.log(students.student2);
console.log(students['student2']);

for(const student in students){
    console.log(student, students[student])
}