//add event listener for meetUpsSearch to accept the user input and pass it to the eventSearch variable
document.getElementById("meetUpsSearch").addEventListener("click", function meetUpsSearchHandlerFunction(event){
    
    let eventSearch =document.getElementById("meetUpsByTopic").value
    if (eventSearch === "") {
        alert("Please enter valid search criteria")
    }
       
//fetch with string interpolation of user input 
fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventSearch}&location.address=nashville&token=CZNRMRCYSJLQZ7VBULG2`, {
    headers: {
        "Authorization": "Bearer CZNRMRCYSJLQZ7VBULG2",
        "Accept": "application/json"
      },
})
    .then(response => response.json())
    .then(entries => {
        
       for (let i = 0; i < entries.events.length; i++) {
           let currentEvent = entries.events[i]
        
           eventName = currentEvent.name.text           
           eventStartDTG = currentEvent.start.local

        //sets the varaible and calls the function
           let meetupHTML = HTMLRepresentation(currentEvent)
           addToDOM(meetupHTML)
           
       }
    }) 
})

    //Function for HTML Representation
    let HTMLRepresentation = (meetupRepresentation) => {
           return `
            <div class="meetup results">
            <p><strong>${eventName}</strong>: ${eventStartDTG}</p>
            <button class="save">Save</button>
            </div>
            `        
    } 

    //Variable that links id in HTML
    const linkMeetup = document.getElementById("meetupResults")
     //Function to add to DOM
    const addToDOM = (meetupHTML) => {
        linkMeetup.innerHTML += meetupHTML;
    }    