const userInput = "Burger"


fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&apikey=f3c493d118f4b2a20a5298e22cb4f499")
    .then(restaurants => restaurants.json())
    .then(parsedRestaurants => {
       console.log(parsedRestaurants.restaurants.forEach (restaurant => 
         )
    })




        // const restaurantList = parsedRestaurants.restaurants[0]
        // console.log(restaurantList)

        // forEach(restaurant => {
        //     const restaurantCuisine = restaurant.cuisine(restaurant)
        //     console.log(parsedRestaurants)
        // })
    // })

    //function into the input button 20-30 cuisine options
    //that will feed into a url fetch via string interpolation?
    //fetch similar cuisines with locations
    //incorporates 

    //will I need to string interpolate the URL?




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