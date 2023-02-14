

$('#image').on('click', function (event) {
    event.preventDefault();

    const APIkey = "Tx4PO85BITHWuJbaJLa8RIsdAxPLDPf7LdPV9kaj";
    let queryURL = `https://api.nasa.gov/planetary/apod?api_key=${APIkey}`


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        const image = $('<img>').attr('src', response.url);
        const date = $('<h2>').append(response.date)
        const explanation = $('<p>').append(response.explanation)
        
        $('#display-photo').append(image, date, explanation)
    })
})

$('#image-gallery').on('click', function (event) {
    event.preventDefault();

    const nasa_id = "PIA18033"
    let queryURL = `https://images-api.nasa.gov/asset/${nasa_id}`


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        const image = $('<img>').attr('src', response.collection.items[3].href);
        
        $('#display-photo').append(image)
    })
})

