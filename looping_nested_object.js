const student = {
    student1: {
        name: 'Saad',
        age: '15',
        favFood: 'Burger'
    }
}

for(const info in student.student1){
    // console.log(info, student.student1[info])
    if(info == 'name'){
        console.log(student.student1[info])
    }
}