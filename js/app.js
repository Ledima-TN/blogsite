$(document).ready(function () {
  var href = '#about'
  var hash = href.substring(href.indexOf('#') + 1)
  $('html, body').animate(
    {
      scrollTop: $('#' + hash).offset().top
    },
    200
  )

  $('.main-header').lettering()
  //$('.split-text').lettering()
  $('a.toscroll').on('click', function (e) {
    var href = $(this).attr('href')
    e.preventDefault()
    console.log(href)

    var hash = href.substring(href.indexOf('#') + 1)
    $('html, body').animate(
      {
        scrollTop: $('#' + hash).offset().top
      },
      500
    )
    return false
  })
})

$(function () {
  $('.navbar-toggle, nav, .main-title').click(function () {
    $('.navbar-toggle').toggleClass('navbar-on')
    $('.main-title').toggleClass('navbar-on')
    $('nav').fadeToggle()
    $('nav').removeClass('nav-hide')

    var href = $(this).attr('href')
    if (href) {
      e.preventDefault()
      console.log(href)

      var hash = href.substring(href.indexOf('#') + 1)
      $('html, body').animate(
        {
          scrollTop: $('#' + hash).offset().top
        },
        500
      )
      return false
    }
  })
})
