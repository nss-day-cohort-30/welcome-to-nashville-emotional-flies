const userInput = "Mexican"
// let search = document.querySelector("#restaurantsByFoodType").value

// let search = document.querySelector("restaurantsByFoodType").value

let search = "Burger"

fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${search}&apikey=f3c493d118f4b2a20a5298e22cb4f499`)

    .then(restaurants => restaurants.json())
    .then(parsedRestaurants => {
        for (let i = 0; i < parsedRestaurants.restaurants.length; i++) {
            const currentRestaurant = parsedRestaurants.restaurants[i];
            currentRestaurant.name = currentRestaurant.restaurant.name
            currentRestaurant.address = currentRestaurant.restaurant.location.address
            currentRestaurant.cuisine = currentRestaurant.restaurant.cuisines
            currentRestaurant.rating = currentRestaurant.restaurant.user_rating.aggregate_rating
            if (currentRestaurant.cuisine.includes(search)) {
                const restaurantHTML = restaurantList(currentRestaurant)
                printRestaurants(restaurantHTML)
            }
        }
    })


const restaurantList = restaurant => {
  return `
  <div class="restaurant result">
      <p><strong>${restaurant.name}</strong>: ${restaurant.address}</p>
      <p>Rating: ${restaurant.rating}</p>
      <button class="save">Save</button>
  </div>
  `
}


const printRestaurants = restaurantHTML => {
  document.querySelector("#restaurantResults").innerHTML += restaurantHTML
}