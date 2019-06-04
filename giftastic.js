var topics = ["Dingo", "Panther", "Bison", "Cape Buffalo", "Moose", "Oryx", "Bobcat", "Gorilla", "Musk Deer", "Tahr", "Koala", "Mouflon", "Sea Otter"]

function renderButton() {
    $("#button-view").empty();

    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("animalClass");
        newButton.attr("data-animal", topics[i]);
        newButton.text(topics[i]);
        $("#button-view").append(newButton);
    }
}

$("#add-animal").on("click", function (event) {
    event.preventDefault();

    var addAnimal = $("#aniaml-input").val().trim();
    topics.push(addAnimal);
    console.log(topics);
    renderButton();
})



function display() {
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

            var results = response.data;
            console.log(response);
            $("#animal-view").empty();
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var animalImage = $("<img>");
                animalImage.attr("src", results[i].images.fixed_height_still.url);
                animalImage.attr("data-state", "still");
                animalImage.addClass("animalgif");

                gifDiv.append(p);
                gifDiv.append(animalImage);
                $("#animal-view").append(gifDiv);

            }

        });
}

$(document).on("click", ".animalClass", display);


renderButton();

$(window).on("click", function () {
    var state = $("img").attr("data-state");
    for (var i = 0; i < results.length; i++) {
        if (state === "still") {
            $(this).attr("src", results[i].images.fixed_width.url)
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", results[i].images.fixed_height_still.url)
            $(this).attr("data-state", "still");
        }
    }

})

