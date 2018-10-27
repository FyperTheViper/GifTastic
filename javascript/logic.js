$(document).ready (function () {

    let buttonList = ["Happy", "Laughing", "Fun"];
    let l = console.log

    $(document).on("click", ".buttonClass", function() {
        let query = $(this).data("name");
        l(query)
        let gifURL = "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=cDJCSVzD3NJUPGzA3ZXqgrUr5aNtZn2w&limit=9";
        $.ajax({
            url: gifURL,
            method: "GET"
        })
        .done(function(response){
            l(response);
            let results = response.data;
            for (i = 0; i < results.length; i++) {
                let gifResult = $("<div class='newGifs'>")
                let gif = $("<img>");
                let rating = results[i].rating;
                let ratingTag = $("<p>").text("Rating: " + rating);
                let animate = gif.attr("src", results[i].images.fixed_height.url);
                let still = gif.attr("src", results[i].images.fixed_height_still.url);
                
                gif.attr("src", still);
                gif.attr("data-still", still);
                gif.attr("data-animate", animate);
                gif.attr("data-state", still);
                gif.addClass("submitImage");
                gifResult.append(ratingTag);
                gifResult.append(gif);
                $("#gifSpace").append(gifResult);
            }
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

    buttonPopulator();

}) 