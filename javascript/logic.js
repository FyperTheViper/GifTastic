$(document).ready (function () {

let buttonList = ["Happy", "Laughing", "Fun"];
let mover = $(this).attr("data-state");
let giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=cDJCSVzD3NJUPGzA3ZXqgrUr5aNtZn2w"

function searchEngine () {
    $.ajax({
        url: giphyURL,
        method: "GET"
    })

}

$("button").on("click", function() {


})


})