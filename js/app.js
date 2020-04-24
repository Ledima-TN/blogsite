	  $(document).ready(function () {
  $('.main-header').lettering();
  $('.split-text').lettering();
  $('a.toscroll').on('click', function (e) {
    var href = $(this).attr('href');
    e.preventDefault();
    console.log(href); 

    
    var hash = href.substring(href.indexOf('#') + 1);
    $('html, body').animate({
      scrollTop: $('#' + hash).offset().top
    }, 500);
    return false;
  })
})


