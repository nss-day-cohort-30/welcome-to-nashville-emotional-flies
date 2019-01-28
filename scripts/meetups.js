
//add event listener for meetUpsSearch to accept the user input and pass it to the eventSearch variable
document.getElementById("meetUpsSearch").addEventListener("click", function meetUpsSearchHandlerFunction(event){

//this assigns the value of the clicked event to eventSearch varaible 
let eventSearch = document.getElementById("meetUpsByTopic").value

//if statement to notify user of empty search
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
       //this if statement allows an error to be presented if there are no results
        if (entries.events.length === 0) {
            alert("No results for your search criteria")
        }  
        
    else{
        //for loop, loops through api(entries) and pass it to the HTMLRepresentation function
       for (let i = 1; i < entries.events.length; i++) {
           let currentEvent = entries.events[i]
           
        
        //    use only if numbers are needed with search eventName = i + ". " + currentEvent.name.text           
           eventName = currentEvent.name.text           
           eventStartDTG = currentEvent.start.local

        //sets the varaible and calls the function
           let meetupHTML = HTMLRepresentation(currentEvent)
           addToDOM(meetupHTML)        
           
            }
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

    //Variables that links id in HTML
    const linkMeetup = document.getElementById("meetupResults")
    const linkItineraryToHTML = document.getElementById("itinerary")
    
    //target save button selected using the meetup results
    meetupResults.addEventListener("click", function getEventName(event){
    if (event.target.className === "save") {  
        
        //assigns the actual clicked event to the meet
        let meetUpSelected = event.target

        //assigns the name of the event to addMeetupToitinerary
        let addMeetupToitinerary = meetUpSelected.previousSibling.previousElementSibling.firstChild.innerText

        // the HTMLLinkItin variable is used for the function add to dom itinerary element
        let HTMLLinkItin = HTMLRepresentationForSelectedEvent(addMeetupToitinerary)
        additineraryToDOM(HTMLLinkItin)
        
        //the code below resets the search results once the save button is pressed
        linkMeetup.innerHTML = "";
    }
        
    })
    //function for HTML representation of 
    let HTMLRepresentationForSelectedEvent = (meetupEventForHTML) => {       
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
    const additineraryToDOM = (taco) => {
        //use += to continue adding on each click or use - to only selct the most recent save
        linkItineraryToHTML.innerHTML = taco;
    } 
    