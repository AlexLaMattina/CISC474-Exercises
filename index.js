$( document ).ready(function() {
    console.log( "ready!" );
    $('#go').click(function(e){
      $(".form=group").appendTo("#jumbotron");
      $('#nameform').submit();  
      e.preventDefault();
    });
});


