$(document).ready(function(){

      var displayedButtons = ["Giraffes", "Bunnies", "Puppies"];
  
      function displayImg(){
  
          $("#display-images").empty();
          var input = $(this).attr("data-name");
          var limit = 10;
          var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=" + limit + "&api_key=";   