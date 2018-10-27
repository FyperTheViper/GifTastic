$(document).ready (function () {

    let buttonList = ["Happy", "Laughing", "Fun"];
    let l = console.log

    gifPopulator(buttonList, "searchButton")


    function gifPopulator (buttonList, buttonClass) {
        $("#gifSpace").empty();
        for (i = 0; i < buttonList.length; i++) {
            
            let b = $("<button>");
            b.addClass(buttonClass);
            b.attr("data-name", buttonList[i]);
            b.text(buttonList[i]);
            $("#gifSpace").append(b);
        }

    }


    $("button").on("click", function() {
        let query = $(this).data("name");
        l(query)
        let gifURL = "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=cDJCSVzD3NJUPGzA3ZXqgrUr5aNtZn2w&limit=9";
        $.ajax({
            url: gifURL,
            method: "GET"
        })
        .done(function(response){

        })

    })


















})