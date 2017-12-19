$(document).ready(function(){
  $("#jquery_form").submit(function(event){  //run this when form is submitted
    event.preventDefault(); //prevent default action

    //build data dictionary for API call to Postmail
    var data = {
        "access_token": "y2jgnb2hqeitcko25k5d3z2a"
    };

    //get subject and message values from form
    var subject = $("#subject").val();
    var message = $("#message").val();

    //add subject and message values to dictionary
    data['subject'] = subject;
    data['text'] = message;

    //define success function: alert user email was sent, clear out the form fields
    function onSuccess() {
        alert("Email sent");
        $("#subject").val('');
        $("#message").val('');
    }

    //define error function: alert user that email failed to send
    function onError(error) {
        alert("Email failed to send");
    }

    //send data to Postmail to send email, run either onSuccess or onError
    $.post('https://postmail.invotes.com/send',
        data,
        onSuccess
    ).fail(onError);
  })

  //Scroll down to portfolio section if arrow is selected
  $('#portfolio-link').click(function(event){
    event.preventDefault();
    var tag = $("#portfolio");
    $('html,body').animate({scrollTop: tag.offset().top},'slow');
  })

});
