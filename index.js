$( document ).ready(function() {
  var up = document.getElementsByClassName('form-group');
  var down = document.getElementById('jumbotron');
  up.innerHTML = "Click on the button to copy a DIV into another DIV.";

    console.log( "ready!" );
    $('#go').click(function(e){
      $('#nameform').submit();
    
      $('.form-group').clone().appendTo('#jumbotron');
      down.innerHTML = "Inner DIV is copied to another element.";

      e.preventDefault();
    });
});
//    $('button[name="delete_spec"]').click(function (e) {
//  e.preventDefault();
//  delete_specs($(this).data("id")); 
//});
//("#prospects_form").submit(function(e) {
//    e.preventDefault();
//})
//;

