// Add event listener to park search button.
// It will capture user input and place it into userInput variable to be used in the fetch address

const parkSearchButton = document.querySelector("#parkSearch");

parkSearchButton.addEventListener("click", (event) => {


    // Capture user input and place it into the address to be fetched

    let userInputParks = document.querySelector("#parksByFeature").value.toLowerCase().replace(" ", "_");

    let address = `https://data.nashville.gov/resource/xbru-cfzi.json?${userInputParks}=Yes&$$app_token=5twx5LXsJSU43JWk9L2RZ1g5H`;
    
   
    // Fetch all parks data that matches user input

    fetch(address)
        .then(parks => parks.json())
        .then(parsedParks => {
            
            parsedParks.forEach(park => {
                parkName = park.park_name;
                parkAddress = park.mapped_location_address;
                let parkHTML = parkBuilder(park);
                parkAdder(parkHTML);
            })
        })
});

    
// Function to build HTML representation of park


const parkBuilder = (park) => {
    return `
    <div class="park result">
    <p><strong>${parkName}</strong>: ${parkAddress}</p>
    <button class="save">Save</button>
    </div>
    `
}


// Function to add HTML to DOM

const parksEl = document.querySelector("#parkResults"); 

const parkAdder = (parkHTML) => {
    parksEl.innerHTML += parkHTML;
}



// Add event listener to save buttons
// When clicked, it will send the park name to the itinerary and remove the parks results from the page

const itineraryEl = document.querySelector("#itinerary");


parksEl.addEventListener("click", () => {
    
    // Check that item clicked is a save button

    if (event.target.className === "save") {
    
        let buttonClicked = event.target;
        let parkToSave = buttonClicked.previousElementSibling.textContent.split(":")[0];
        
        let parkItineraryHTML = parkItineraryBuilder(parkToSave);
        parkItineraryAdder(parkItineraryHTML);

        // Remove park search results
        parksEl.innerHTML = "";

    }

});



// Function to build HTML representation of new itinerary item
const parkItineraryBuilder = (parkToSave) => {
    return `
    <div class="itineraryItem">Park: ${parkToSave}</div>
    `
}

// Function to add new div to itinerary list
const parkItineraryAdder = (parkHTML) => {
    itineraryEl.innerHTML += parkHTML;
}
