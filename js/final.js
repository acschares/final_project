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


//jQuery is required to run this code
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}


