
//add event listener for meetUpsSearch to accept the user input and pass it to the eventSearch variable
document.getElementById("meetUpsSearch").addEventListener("click", function meetUpsSearchHandlerFunction(event){
    
    let eventSearch = document.getElementById("meetUpsByTopic").value
    if (eventSearch === "") {
        alert("Please enter valid search criteria")
        return;
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
            <p><strong>${eventName}</strong>: Date: ${eventStartDTG.split("T")[0] + " Time: "}${eventStartDTG.slice(11, 16 )}</p>
            <button class="save">Save</button>
            </div>
            `        
        } 
        //add event listener to save button that save it to the itinerary
  

    //Variables that links id in HTML
    const linkMeetup = document.getElementById("meetupResults")
    const linkItineraryToHTML = document.getElementById("itinerary")
    //target save button selected
    meetupResults.addEventListener("click", function getEventName(event){
    if (event.target.className === "save") {        
        let meetUpSelected = event.target
        //selects the name of the event
        let addMeetupToitinerary = meetUpSelected.previousSibling.previousElementSibling.firstChild.innerText

       let HTMLLinkItin = HTMLRepresentationForSelectedEvent(addMeetupToitinerary)
       additineraryToDOM(HTMLLinkItin)
    }
        
    })
    //function for HTML representation of 
    let HTMLRepresentationForSelectedEvent = (meetupEventForHTML) => {
        console.log(meetupEventForHTML)
        return `
         <div class="itinerary">
         <p>Meetup: ${meetupEventForHTML}</p>
         </div>
         `        
     } 
    
     //Function to add to DOM
    const addToDOM = (meetupHTML) => {
        linkMeetup.innerHTML += meetupHTML;
    }    
    // //Function to add to DOM itinerary
    const additineraryToDOM = (meetupHTML) => {
        linkItineraryToHTML.innerHTML += meetupHTML;
    } 