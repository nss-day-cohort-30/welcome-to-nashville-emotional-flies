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



