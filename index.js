$( document ).ready(function() {
     console.log( "ready!" );
    $('#go').click(function(e){
      $('#nameform').submit();  
      $("#nameform").appendTo("#jumbotron");
      e.preventDefault();
    });
});


