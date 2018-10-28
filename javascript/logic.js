$(document).ready (function () {

    let buttonList = ["LOL", "Dank", "Memes", "Pancakes", "Cats LOL", "Fails"];
    let l = console.log

    buttonPopulator();

    $(document).on("click", ".buttonClass", function() {
        let query = $(this).data("name");
        l(query)
        let gifURL = "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=cDJCSVzD3NJUPGzA3ZXqgrUr5aNtZn2w&limit=12";
        $.ajax({
            url: gifURL,
            method: "GET"
        })
        .done(function(response){
            l(response);
            $("#gifSpace").empty();
            let results = response.data;
            for (i = 0; i < results.length; i++) {
                let gifResult = $("<div class='newGifs'>");
                let p = $('<p>').text("Rating: " + results[i].rating);
                let gif = $('<img>');

                gif.attr("src", results[i].images.fixed_height_still.url);
                gif.attr("data-state", "still");
                gif.attr("data-still", results[i].images.fixed_height_still.url);
                gif.attr("data-animate", results[i].images.fixed_height.url);
                gif.addClass("gif")
                gifResult.append(p);
                gifResult.append(gif);
                $("#gifSpace").append(gifResult);
            }
            $(".gif").on("click", function() {
                let state = $(this).attr("data-state");
        
                if (state === "still") {
                  $(this).attr("src", $(this).attr("data-animate"));
                  $(this).attr("data-state", "animate");
                } else {
                  $(this).attr("src", $(this).attr("data-still"));
                  $(this).attr("data-state", "still");
                }
            });
        })
    })

    function buttonPopulator() {
        $("#buttonSpace").empty();
        for (i = 0; i < buttonList.length; i++) {
            
            let b = $("<button>");
            b.addClass("buttonClass");
            b.attr("data-name", buttonList[i]);
            b.text(buttonList[i]);
            $("#buttonSpace").append(b);
        }
    }

    $("#gimme").on("click", function(){
        let adder = $("#search-input").val().trim();
        buttonList.push(adder);
        buttonPopulator();
        return false;
    })
}) 