# GifTastic

Link to GifTastic : https://fypertheviper.github.io/GifTastic/

Project "Theme": Welcome! Gifbot understands human emotions perfectly, and Gifbot only wants the best for its users. 
Pay no attention to the fact Gifbot never made it out of beta, it knows humans only require the internet and funny moving 
pictures to be happy. And happiness will be achieved.

In this project we explore the Giphy API and use AJAX and Javascript to dynamically create buttons 
that are also search results for gifs, which then displays them. They start off still, but each one can be clicked 
to make them animated.

In our Javascript we created an array of strings which served as our baseline search results. We then created an onclick function
which used AJAX to call Giphy's API, then inserts whatever is typed into the form directly into a url and the request parameters. This function also contains another onclick function and a conditional which says if an image is clicked and is still, animate it, 
and vice versa. 

Another function appends the search results to our button list which can be clicked to search the defined terms it contains. 

