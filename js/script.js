/* Custom scripts and plugins initialization

*/

// Initialize smooth scrolling
// Automatically add data-scroll attribute as required by the plugin to all internall links

$(function() {
    $('a[href^=#]').attr('data-scroll', '');

    smoothScroll.init({
    });

});

/* hide navbar collapsed (mobile view) when clicking a link
 * http://stackoverflow.com/questions/16680543/hide-twitter-bootstrap-nav-collapse-on-click
 */
$(function() {
    $('.nav a, #home').on('click', function(){
        if($('.navbar-toggle').css('display') !='none' &&  $('#bs-example-navbar-collapse-1').hasClass('in') ) {
            setTimeout(function () { $(".navbar-toggle").trigger( "click" ) },
                250);
        }
    });
});


/* Placeholder support for old browsers, as the labels are hidden and there
 * would be no way to know what to input fields are
*/

$('input').placeholder();

