$( document ).ready(function() {
     console.log( "ready!" );
    $('#go').click(function(e){
      $('#nameform').submit();  
      $(".form-group").appendTo("#jumbotron");
      e.preventDefault();
    });
});


