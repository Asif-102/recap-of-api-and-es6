const persons = ['Ahnaf', 'Arif', 'Amit', 'Kalam','Rabbi'];

// const person1 = persons[1]
// const person2 = persons[2]

const [,person1,,,person2] = persons;

console.log(person1)
console.log(person2)

// object desturcturing

const players = {

    player1:{
        name:'Sakib',
        age:32,
        cars:['toyota', 'bmw']
    },

    player2:'Mashrafi'
}


const {age} = players.player1;

console.log(age)
console.log(players.player1.cars)

const [,sakibFabCar] = players.player1.cars;
console.log(sakibFabCar)
// const myFavPlayer = players.player2;
const {player2} = players;

// console.log(players.player1)

console.log(player2);






