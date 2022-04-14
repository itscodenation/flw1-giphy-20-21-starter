$(".search-button").click(function(){
    fetch("https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1")
      .then(function(response){
        return response.json();
    })
      .then(function(data){
        console.log(data.data)
      })
});