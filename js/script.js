// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$(".search-button").click(function() {
  let shortTerm = $(".search-term").val();

  let API_URL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    shortTerm +
    "&rating=pg&api_key=dc6zaTOxFJmzC";
  fetch(API_URL)
    .then(function(response) {
      console.log(response);
      return response.json();
    })

    .then(function(gifdata) {
      console.log(gifdata);
      var x = Math.floor((Math.random() * gifdata.data.length) + 1 );
      var picURL = gifdata.data[x].images.original.url;
      console.log(picURL);
      $(".main").html("<img src=" + picURL + ">");
    });
});
