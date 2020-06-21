$(document).ready(() => {
    $('.reviewSlider').slick({
      infinite: true,
      arrows: false,
      autoplay: true,
      pauseOnHover: false,
      autoplaySpeed: 0,
      speed: 5000,
      cssEase: 'linear',
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.5
          }
        }
        
      ]
    })
  })
  $("#hamburger").click(() => {
    $(".navBox").toggleClass('shown')
  })
  $("#close").click(() => {
    $(".navBox").toggleClass('shown')
  })
  $(".navBox a").click(() => {
    $(".navBox").toggleClass('shown')
  })
  $("#btnHome").click(() => {
    $.scrollTo('#scrlHome', 800)
  })
  $("#btnWorkshops").click(() => {
    $.scrollTo('#scrlWorkshops', 800)
  })
  $("#btnTeam").click(() => {
    $.scrollTo('#scrlTeam', 800)
  })