$( document ).ready(function() {
  console.log("ready!");
  //attach an event handler 
  $("#go").click(function() {
    //get form field data 
    let first = $("#fname").val();
    let last = $("#lname").val();
    //write data to jumbotron div
    $("#jumbotron").append(first + " " + last + " ")
    return false;
   });  
 }); 


