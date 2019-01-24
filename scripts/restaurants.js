fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&apikey=f3c493d118f4b2a20a5298e22cb4f499")
    .then(restaurants => restaurants.json())
    .then(parsedRestaurants => {
        console.table(parsedRestaurants)
    })

