// let genre = 'country'

let concertButton = document.getElementById('concertButton')
let concertInput = document.getElementById('concertsByGenre');

// event Listener 


concertButton.addEventListener('click', (event) => {
  let genre = concertInput.value.toLowerCase();

  if (genre === "") {
    alert("Please enter valid search criteria.")
    return;
  }

  fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&stateCode=TN&city=nashville&classificationName=${genre}&startDateTime=2019-01-28T06:00:00Z&endDateTime=2019-01-30T06:00:00Z&apikey=EWtvotYiyT2TazNiuuVXyFzKcOSeWxHE`)



    .then(response => response.json())
    .then(entries => {
      //  console.log(entries)
       let entriesList = entries._embedded.events;
      // /  console.log(entriesList);
       
        for (let index = 0; index < entriesList.length; index++) {
          const currentEvent = entriesList[index];
          //  console.log(currentEvent);

          artist = currentEvent.name;
          //  console.log(artist)
          venue = currentEvent._embedded.venues[0].name;
          //  console.log(venue)

          address = currentEvent._embedded.venues[0].address.line1;



          let concertHTML = concertBuilder(currentEvent)
          concertAdder(concertHTML);
        }
      
    })

    // if search reveals no matches, then alert the user with the .user method. 

    
    .catch(error => {
      alert('please select another genre')
    })

})
//




const concertBuilder = (entry) => {
  return `
        <div class="concert result">
        <p><strong>${artist}</strong>: ${address}</p>
        <button class="save">Save</button>
        </div>
        `
}


let concertEl = document.querySelector("#concertResults");

const concertAdder = (concertHTML) => {
  concertEl.innerHTML += concertHTML;
}





const concertItinerary = document.querySelector("#itinerary");




// function to add results to DOM
concertEl.addEventListener("click", () => {


  if (event.target.className === "save") {


    let concertSaved = event.target.previousElementSibling.textContent.split(":")[0];


    // concert Builder to HTML
    const concertItineraryBuiler = (concertSaved) => {

      return `
    <div class="itineraryItem"> Concert: ${concertSaved} at ${venue}</div>
    `
    }

    // adding new tag to Itinerary 

    const concertItineraryHTML = (concertSaved) => {
      itineraryEl.innerHTML = concertSaved;
    }

    let savedCon = concertItineraryBuiler(concertSaved);

    concertItineraryHTML(savedCon);


    concertEl.innerHTML = "";
  }


});






//  .then(response => response.json())
//  .then(entries => {console.log(entries)})





// ticketMaster API Calls //



// https://app.ticketmaster.com/{package}/{version}/{resource}.json?apikey=**{API key}


// API Key //

// EWtvotYiyT2TazNiuuVXyFzKcOSeWxHE

// fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=EWtvotYiyT2TazNiuuVXyFzKcOSeWxHE`, {
//   headers: {
//       "Accept": "application/json"
//     },
// })
//   .then(response => response.json())
//   .then(events => {console.log(events)})