// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
$(".search-button").click(function() {
  let input = $(".search-term").val();
  let apiUrl =
    "https://api.giphy.com/v1/gifs/search?q=" +
    input +
    "&rating=pg&api_key=dc6zaTOxFJmzC";
  fetch(apiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
    let s = ""
      console.log(data);
      let imageCount = data.data.length;
      let imgNumber = Math.floor(Math.random() * imageCount);
      for (let i = 0; i < imgNumber;i++){
        s += "`<img src=" + data.data[i].images.original.url + ">`"
      }
      $(".introText").html(s);
    });
});
