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