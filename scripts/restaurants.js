//creates variable that holds the #restaurantSearch button
const restaurantSearchButton = document.querySelector("#restaurantSearch")

//adds event listener to the button that listens for the click then invokes the function
restaurantSearchButton.addEventListener("click", (event) => {
    //search variable takes the value of the input field 
    let search = document.querySelector("#restaurantsByFoodType").value

    //capitalizes the first character of the search to ensure user input enters into the API search correctly
    search = search.charAt(0).toUpperCase() + search.slice(1)

    //if user doesn't put anything in the input field or if user enters invalid cuisine name
    if (search === "") {
        alert("Please enter valid restaurant")
        return
    }

    //had to put fetch inside of the function, otherwise it wouldn't know
    //where to put the value of the input
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${search}&apikey=f3c493d118f4b2a20a5298e22cb4f499`)
        .then(restaurants => restaurants.json())
        .then(parsedRestaurants => {
            if (parsedRestaurants.restaurants.length === 0) { //if this didn't work I could use a .catch after last .then
                alert("Please, enter valid cuisine. Ya know you want to. Youz so hungry.")
            } else {
                for (let i = 0; i < parsedRestaurants.restaurants.length; i++) {
                    const currentRestaurant = parsedRestaurants.restaurants[i];

                    //takes objects and turns them into variables
                    currentRestaurant.name = currentRestaurant.restaurant.name
                    currentRestaurant.address = currentRestaurant.restaurant.location.address
                    currentRestaurant.cuisine = currentRestaurant.restaurant.cuisines
                    currentRestaurant.rating = currentRestaurant.restaurant.user_rating.aggregate_rating

                    //creates a variable that stores the HTML DOM Representation Function and takes the 
                    //object currentRestaurant as an argument
                    const restaurantHTML = restaurantList(currentRestaurant)
                    //calls on the function printRestaurants with the arugment of restaurantHTML
                    printRestaurants(restaurantHTML)
                }
            }
        })
})

//function containing DOM elements for restaurant 
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

//create variables that hold document elements 
const itineraryResults = document.getElementById("itinerary")
const restaurantResults = document.getElementById("restaurantResults")

//adds event listener to saved buttons
restaurantResults.addEventListener("click", (event) => {
    if (event.target.className === "save") {         //ensures that the item clicked is the save button
        let restaurantSelected = event.target;      //stores event into a variable
        let restaurantSaved = restaurantSelected.previousElementSibling.previousElementSibling.innerText.split(":")[0];
        let savedRestaurant = restaurantItineraryHTML(restaurantSaved)
        addsRestaurantToItinerary(savedRestaurant) //invokes function to print selected itinerary to DOM
        restaurantResults.innerHTML = "";         // Removes search results
    }
})

// Function that builds HTML representation of new itinerary item(restaurantSaved)
const restaurantItineraryHTML = (restaurantSaved => {
    return `
            <div class="itineraryRestaurant">
            <p>Restaurant: ${restaurantSaved}</p>
            </div>

            `
})

//adds new div with selected itinerary item to the DOM 
const addsRestaurantToItinerary = (restaurantItineraryHTML) => {
    itineraryResults.innerHTML = restaurantItineraryHTML; //used to be += but in order to REPLACE THE CURRENT ITINERARY set it to = for only current itinerary
}

