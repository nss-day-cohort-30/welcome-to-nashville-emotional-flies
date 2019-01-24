fetch(`https://www.eventbriteapi.com/v3/events/search/`, {
    headers: {
        "Authorization": "Bearer CZNRMRCYSJLQZ7VBULG2",
        "Content-Type": "application/json"
      },
})
    .then(response => response.json())
    .then(entries => {console.log(entries)})