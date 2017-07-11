
$(".btn").click(function(){
    $('.gallery').empty();
    var searchTerm = $('#srch-term').val();
    search(searchTerm);
});


$("body").keypress(function(e){
    console.log(e.which)
    if(e.which === 13 ) {
	    $('.gallery').empty();
	    var searchTerm = $('#srch-term').val();
	    search(searchTerm);
	}
});


function displayResults(response){
	 for(var i = 0; i < response.data.length; i++){
           console.log(response.data[i].images.fixed_width.url);
            $('.gallery').append(
                '<div class="col-lg-3 col-md-4 col-xs-6 thumb">\
                    <a class="thumbnail">\
                        <img src=' + response.data[i].images.fixed_width.url + '/>\
                    </a>\
                </div>'
            );
      }
}


function search(searchTerm){
    var url = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
    console.log(url);
    $.ajax({
        url: url,
        method: "GET",
        success: function(response){
          	displayResults(response);
        },
    }); 
}
