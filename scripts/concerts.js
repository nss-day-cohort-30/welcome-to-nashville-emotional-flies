 fetch('https://app.ticketmaster.com/discovery/v2/events.json?&stateCode=TN&city=nashville&keyword=music&startDateTime=2019-01-25T06:00:00Z&endDateTime=2019-01-26T06:00:00Z&apikey=EWtvotYiyT2TazNiuuVXyFzKcOSeWxHE')



.then(response => response.json())
.then(entries => {
  // console.log(entries)
let entriesList = entries._embedded.events;

  for (let index = 0; index < entriesList.length; index++) {
   const currentEvent= entriesList[index];
  //  console.log(currentEvent);

   artist = currentEvent.name;
  //  console.log(artist)
   venue = currentEvent._embedded.venues[0].name;
   console.log(venue)
  }
  
})









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