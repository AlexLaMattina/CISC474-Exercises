$( document ).ready(function() {
  $("#go").on( "click", function( event ) {
    event.preventDefault()
    let first = $("#fname").val();
    let last = $("#lname").val();
    $("#jumbotron").append(first + " " + last + " ")
   });  
 }); 


