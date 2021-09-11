$(document).ready(function() {

// button "to-top"
  $( "#to-top" ).css( "display", "none" );
  $(window).scroll(function() {
    // smooth button appearance/disappearance
    // if the value of the scroll padding from the top is not zero
    if ($(this).scrollTop() != 0)
      $("#to-top").fadeIn();
    // if equal to zero
    else
      $("#to-top").fadeOut();
  });
  // smooth scrolling
  $("#to-top").click(function() {
    $("body, html").animate({scrollTop: 0}, 600);
  });

// notification of adding / deleting to favorites
    $('.card__like').on('click', function() {
    // assign the number of clicks to the click variable
    var click = $(this).data('clicks') || 0;
    // if the number of clicks is odd
    if (click % 2 == 1 ) {
      $( "#notification-deletion" ).css( "display", "block" );
      $(this).children(".icon-heart").css( {"color":"#FFF", "opacity":"0.5"});
      // the time that the notification remains visible
      setTimeout(function(){
          $( "#notification-deletion" ).css( "display", "none" );}, 1500);
      } 
    // if the number of clicks is even
    else {
      $( "#notification" ).css( "display", "block" );
      $(this).children(".icon-heart").css( {"color":"#d66e67", "opacity":"1.0"});
      // the time that the notification remains visible
      setTimeout(function(){
        $( "#notification" ).css( "display", "none" );}, 1500);
      };
    // click counter
    $(this).data('clicks',click+1);
  });

// menu for mobile devices
$('.menu-burger').click(function(){
  // changing the status of the menu icon
  $('.menu-burger').toggleClass('open-menu');
  // show / hide the mobile menu
  $('.nav').toggleClass('open-menu');
});


//jQuery plugin for the "Show more" button"
  $('.loadMore').loadMoreResults({
    // number of visible cards
    displayedItems: 6,
    // total number of cards
    showItems: 20,
    button: {
            'class':'btn-load-more',
            'text':'Показать еще 20'
          }
  });
  // wrapper for the "Show more" button"
  $(".btn-load-more").wrap("<div class='btn-load-more-wrapper'></div>");
  
})