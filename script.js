// TASK 2:
   // Define a function called search 
    // takes a string searchTerm as a parameter
    // makes a request to the giphy API using the searchTerm
    // logs the the reponse to the console
   // Call the search function to test it out

// TASK 3: 
  //  Define a function called display results
    // Takes a  response object and displays the image thumbnails to the screen
  // Call the displays reults function in the success function passing response as and argument
  // Calls the search function to test it out
    
// TASK 4:
  // create a click handler function  
    // takes in the value from the the search box when the button is clicked
    // calls the a function called search passing the value input as an argument

// TASK 5:
   // Create a keypress function that 
    // takes in the value from the the search box when the enter button is clicked
    // calls the a function called search passing the input value as an argument
    

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// search function
function search(searchTerm){
    var url = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
    $.ajax({
        url: url,
        method: "GET",
        success: function(response){
        displayResults(response.data);
        },
    }); 
}

// displayResults function
function displayResults(data){
     for(var i = 0; i < data.length; i++){
           console.log(data[i].images.fixed_width.url);
            $('.gallery').append(
                '<div class="col-lg-3 col-md-4 col-xs-6 thumb">\
                    <a class="thumbnail">\
                        <img src=' + data[i].images.fixed_width.url + '/>\
                    </a>\
                </div>'
            );
      }
}

// .click function
$(".btn").click(function(){
    $('.gallery').empty();
    var searchTerm = $('#srch-term').val();
    search(searchTerm);
});

// .keypress function
$("body").keypress(function(e){
    console.log(e.which)
    if(e.which === 13 ) {
        $('.gallery').empty();
        var searchTerm = $('#srch-term').val();
        search(searchTerm);
    }
});
