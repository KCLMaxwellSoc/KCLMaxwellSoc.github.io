/* Custom scripts and plugins initialization

*/

// Initialize smooth scrolling

smoothScroll.init({
        offset:50
});


/* hide navbar collapsed (mobile view) when clicking a link
 * http://stackoverflow.com/questions/16680543/hide-twitter-bootstrap-nav-collapse-on-click
 */
$(function() {
    $('.nav a, #home').on('click', function(){
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});


