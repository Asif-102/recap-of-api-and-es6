const allFoods = document.getElementById('all-foods');

const details = document.getElementById('food-details');

const loadFoods = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(res => res.json())
        .then(data => displayAllFoods(data.meals.slice(0,6)))
}

const displayAllFoods = (foodsArray) => {

    const row = document.createElement('div');
    row.setAttribute('class', 'row gy-5')
    // console.log(foodsArray)
    for (const food of foodsArray) {
        // console.log(food)
        const column = document.createElement('div');
        column.setAttribute('class', 'col-md-4 col-sm-12');
        column.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src=${food.strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
                 <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text" style="height:120px; overflow:hidden">${food.strInstructions}</p>
                <button type="button" class="btn btn-primary" onclick="showDetails(${food.idMeal})">Food Details</button>
            </div>
        </div>
        `
        row.appendChild(column);
    }

    allFoods.appendChild(row)
}

const showDetails = (meadId)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meadId}`)
    .then(res=>res.json())
    .then(data => deailFood(data.meals[0]))
}

const deailFood = (food)=>{
    console.log(food.strMealThumb)
    details.innerText = ''
    const img = document.createElement('img');
    img.setAttribute('src',food.strMealThumb);
    img.setAttribute('class', 'img-fluid')
    details.appendChild(img)
}

loadFoods();