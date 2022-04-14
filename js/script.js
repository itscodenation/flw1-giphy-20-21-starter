let baseURL = "https://api.giphy.com/v1/gifs/search?";
let apiKey = "tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1";
$(".search-button").click(function () {
  let input = $(".search-term").val();
  let finalURL = baseURL + "q=" + input + "&rating=pg&apiKey=" + apiKey;
  fetch(finalURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let random = getRandomInt(data.data.length);
      $(".main").prepend(`<img src=${data.data[random].images.original.url}>`);
    });
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}