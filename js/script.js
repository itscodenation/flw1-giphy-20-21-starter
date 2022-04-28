$(".search-button").click(function () {
   $(".display").html("");
  let userInput = $("input").val();
  
  let url =
    `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (gifData) {
      console.log(gifData.data[0].images.original.url);
      //let num = Math.floor(Math.random() * gifData.data.length);
     // $(".display").html(`<img src="${gifData.data[num].images.original.url}">`);
    
    for(var i = 0; i < gifData.data.length; i++){
      $(".display").append(`<img src="${gifData.data[i].images.original.url}">`);
    }
      
    });
});


