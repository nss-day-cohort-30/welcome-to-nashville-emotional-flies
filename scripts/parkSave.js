// Add event listener to save buttons
// When clicked, it will send the park name to the itinerary and remove the parks results from the page

const parkItineraryEl = document.querySelector("#parkItinerary");


// Add event listener to park results container

parksEl.addEventListener("click", () => {
    
    // Check that item clicked is a save button

    if (event.target.className === "save") {

        document.querySelector("#parkItinerary").innerHTML = "";
            
        let buttonClicked = event.target;
        let parkToSave = buttonClicked.previousElementSibling.textContent.split(":")[0];  // When save button is clicked, corresponding
            
        let parkItineraryHTML = parkItineraryBuilder(parkToSave);
        parkItineraryAdder(parkItineraryHTML);

        // Remove park search results
        parksEl.innerHTML = "";

        
    }
});

// Function to build HTML representation of new itinerary item
const parkItineraryBuilder = (parkToSave) => {
    return `
    <div id="park" class="park itineraryItem">
    <p>Park: ${parkToSave}</p>
    </div>
    `
}

// Function to add new div to itinerary list
const parkItineraryAdder = (parkHTML) => {
    parkItineraryEl.innerHTML = parkHTML;
}