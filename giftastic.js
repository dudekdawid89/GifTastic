var topics = ["Dingo", "Panther","Bison",]

function renderButton(){
    $("#button-view").empty();

    for(var i = 0; i < topics.length; i++){
        var newButton = $("<button>");
        newButton.addClass("animalClass");
        newButton.attr("data-animal", topics[i]);
        newButton.text(topics[i]);
        $("#button-view").append(newButton);
    }
}

$("#add-animal").on("click", function(event){
    event.preventDefault();

    var addAnimal = $("#aniaml-input").val().trim();
    topics.push(addAnimal);
    console.log(topics);
    renderButton();
})

$("button").on("click", function(){
    var animal = $(this).attr("data-animal");
})
$(window).on("load", function() {
    renderButton();
});