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
        
        let i=0
        $(".img_here").empty();
        while (i<3){
          let abcd = Math.floor(Math.random()*www);
          console.log(`list#: ${abcd}`);
          let number = data.data[abcd].images.original.url
          let email = $(".email-input").val();
          console.log(number);
          $(".img_here").append(`<div class="blocks"><img height="250px" src="${number}">
          <br>
          <a href = "mailto: ${email}">Mail_to_link</a>`);
          $(".img_here").css("display","block");
          i=i+1
        }
      })
});