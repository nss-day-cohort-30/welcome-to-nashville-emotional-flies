const userInput = "Mexican"
// let search = document.querySelector("#restaurantsByFoodType").value

// let search = document.querySelector("restaurantsByFoodType").value

let search = "Burger"

fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${search}&apikey=f3c493d118f4b2a20a5298e22cb4f499`)

    .then(restaurants => restaurants.json())
    .then(parsedRestaurants => {
        for (let i = 0; i < parsedRestaurants.restaurants.length; i++) {
            const currentRestaurant = parsedRestaurants.restaurants[i];
            let name = currentRestaurant.restaurant.name
            let address = currentRestaurant.restaurant.location.address
            let cuisine = currentRestaurant.restaurant.cuisines
            let rating = currentRestaurant.restaurant.user_rating.aggregate_rating
            let menu = currentRestaurant.restaurant.menu_url
            if (cuisine.includes(search)) {
                console.log(name)
                console.log(address)
                console.log(rating)
                console.log(menu)
            }
        }

    })






        // const restaurantList = parsedRestaurants.restaurants[0]
        // console.log(restaurantList)

        // forEach(restaurant => {
        //     const restaurantCuisine = restaurant.cuisine(restaurant)
        //     console.log(parsedRestaurants)
        // })
    // })

  




        // const allRestaurants = parsedRestaurants.restaurants[0].restaurant.cuisines
        // //create function that loops through the restaurants 
        // //create function that loops through the restaurant to find the selected cuisine
        // console.table(allRestaurants)


       // //create function that loops through the restaurants 
        // //create function that loops through the restaurant to find the selected cuisine
        // console.table(allRestaurants)

    // let cuisineResults = parsedRestaurants.restaurant.cuisines
    // console.table(cuisineResults)

//     parsedRestaurants.forEach(restaurant => {
//         const restaurantHTML = restaurantList(restaurant)
//         printRestaurants(restaurantHTML)

//     })

// const restaurantList = jsonCompletedRestaurants => {
//   return `
//   <article class="restaurantList">
//       <h1>${jsonCompletedRestaurants.name}</h1>
//       <section>${jsonCompletedRestaurants.location}</section>
//   </article>
//   `
// }

// const printRestaurants = restaurantHTML => {
//   document.querySelector(".restaurantList").innerHTML += restaurantHTML
// }