const numbersArray = [23,345,234,45]

// numbersArray.map((item, index)=> console.log(item))

const myNumbers =numbersArray.filter((item)=>item > 23)

console.log(myNumbers)

const getNumbers =numbersArray.find((item)=>item > 23)

console.log(getNumbers)