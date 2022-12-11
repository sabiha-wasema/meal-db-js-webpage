const searchFood = () => {
  //   console.log("clicked");
  const searchText = document.getElementById("search-text");
  const searchValue = searchText.value;
  //   console.log(searchValue);
  searchText.value = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
  fetch(url).then(res => res.json()).then(data => displayFood(data.meals));
};

const displayFood = meals => {
  //   console.log(meals);
  const foodContainer = document.getElementById("food-container");
  foodContainer.innerHTML = "";
  meals.forEach(meal => {
    // console.log(meal);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card h-100">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
      </div>
      <div class="card-footer">
        <button onclick="foodDetails('${meal.idMeal}')" class=" text-center">Details</button>
      </div>
    </div>
    
    `;
    foodContainer.appendChild(div);
  });
};

const foodDetails = id => {
  //   console.log(id);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => singleFoodDetails(data.meals[0]));
};

const singleFoodDetails = meal => {
  //   console.log(meals);
  const mealDetail = document.getElementById("meal-details");
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
    <a target="_blank" href="${meal.strYoutube}" class="btn btn-primary">Go Youtube</a>
  </div>
  `;
  mealDetail.appendChild(div);
};
