$(".search-button").click(function(){
  let searchTerm = $(".search-term").val()
  $(".search-term").val("")
  let url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`
    fetch(url)
      .then(function(response){
        return response.json();
    })
      .then(function(data){
        let www = data.data.length
        console.log(data.data);
        let abcd = Math.floor(Math.random()*www);
        console.log(`list#: ${abcd}`);
        let number = data.data[abcd].images.original.url
        console.log(number);
        $(".main").html(`<img height="250px" src="${number}">`);
      })
});