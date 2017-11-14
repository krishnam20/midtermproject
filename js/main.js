// triggers a jquery animation which displays a href tag that allows you to jump to the top of the screen
//also implements a transition which fades in and fades out upon appearing and exiting.

$(document).ready(function() {

//target goToTop function
    var clickEvent = $(".goToTop");


//set up these variables when you are scrolling through the page
//only applies to aboutMe and Projects section since they require scrolling
    $(window).on("scroll",function() {
        var height = $(this).height();
        var scrollTop = $(this).scrollTop();

            if (scrollTop > height) {
            	if(!clickEvent.is(":visible")){
                    //fades in the goToTop button
            		clickEvent.fadeIn();
            	}
            } else {
                //fades out the goToTop button when you scroll up far enough.
            	clickEvent.fadeOut();
            }
        });


});



