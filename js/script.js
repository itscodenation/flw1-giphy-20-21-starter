// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

let custom_api_url = "https://api.giphy.com/v1/gifs/search?rating=pg&api_key=dc6zaTOxFJmzC&q=";


$(".search-button").click(function(){
  
  let search = custom_api_url + $(".search-term").val();
  
  fetch(search).then(function(response) {
    return response.json();
  }).then(function(data) {
    
    let index = Math.floor(Math.random() * data.data.length);
    let gif = `<img src="${data.data[index].images.original.url}">`;
    
    $(".main").append(gif);
    
    $(".mail").attr(`href`, `mailto:s_tomas.brubaker@ousd.org?subject=Important!&body=` + gif);
    
  });

  
});

$(".clear").click(function(){
  $(".main").html("");
});