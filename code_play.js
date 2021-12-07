const persons = [
    {id:1, name:'Arif'},
    {id:2, name:'Alif'},
    {id:3, name:'Saad'},
    {id:4, name:'Mahin'},
    {id:5, name:'Rabbi'},
    {id:6, name:'Sakib'}
]

//button click and get id

const personInfo = persons.find(info => info.id == 5)

console.log(personInfo)