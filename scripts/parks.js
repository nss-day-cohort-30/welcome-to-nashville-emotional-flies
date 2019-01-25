// Fetch all parks data

let userInputParks = "dog_park";

const address = `https://data.nashville.gov/resource/xbru-cfzi.json?${userInputParks}=Yes&$$app_token=5twx5LXsJSU43JWk9L2RZ1g5H`;

fetch(address)
    .then(parks => parks.json())
    .then(parsedParks => {
        // console.table(parsedParks)

        // Iterate over parks, returning those with "Yes" value for the user input category
        
        parsedParks.forEach(park => {
            let parkName = park.park_name;
        });

    })


    // Function to add HTML to DOM
    
    const parksEl = document.querySelector("#parks"); // Add correct id selector here
    
    const parkAdder = (park) => {
        let newPark = parkBuilder(park);
        parksEl.innerHTML += newPark;
    }
    
    
    // Function to build HTML representation

    const parkBuilder = (park) => {
        return `
            <div class="parkInfo">
                <p>${parkName}, ${parkAddress}</p>
            </div>
        `
        parkAdder()
    }


