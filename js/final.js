$(document).ready(function(){
  $('#contact-submit').click(function(event){
    event.preventDefault();

    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    alert(name);
    alert(email);
    alert(message);

    alert("Your email was sent");
  })
});
