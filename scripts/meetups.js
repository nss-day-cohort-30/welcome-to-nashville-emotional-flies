//this will take in user input
let eventSearch = "bear"
//fetch with string interpolation of user input 
fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventSearch}&location.address=nashville&token=CZNRMRCYSJLQZ7VBULG2`, {
    headers: {
        "Authorization": "Bearer CZNRMRCYSJLQZ7VBULG2",
        "Accept": "application/json"
      },
})
    .then(response => response.json())
    .then(entries => {
        console.log(entries)
       for (let i = 0; i < entries.events.length; i++) {
           let eventName = entries.events[i].name.text
           
           let eventLocation =;

           let eventStartDTG = entries.events[i].start.local

        //    let eventEndDTG = entries.events[i].end.local
        console.log(eventDateTime)
       }
    }) 
    
    