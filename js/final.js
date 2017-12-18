$(document).ready(function(){
  $("#jquery_form").submit(function(event){
    event.preventDefault();

    var data = {
        "access_token": "y2jgnb2hqeitcko25k5d3z2a"
    };
	
    var subject = $("#jquery_form" + " [name='subject']").val();
    var message = $("#jquery_form" + " [name='text']").val();

    data['subject'] = subject;
    data['text'] = message;

    function onSuccess() {
        alert("Email sent");
        $("#jquery_form" + " [name='subject']").val('');
        $("#jquery_form" + " [name='text']").val('');
    }

    function onError(error) {
        alert("Email failed to send");
    }

    $.post('https://postmail.invotes.com/send',
        data,
        onSuccess
    ).fail(onError);
  })

  $('#portfolio-link').click(function(event){
    event.preventDefault();
    var tag = $("#portfolio");
    $('html,body').animate({scrollTop: tag.offset().top},'slow');
  })

});
