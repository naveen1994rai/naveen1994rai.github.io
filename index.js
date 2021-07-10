$('.nav-link, .fa-arrow-alt-circle-down, .fa-arrow-alt-circle-up').click(function () {
  console.log("clicked");
  var sectionTo = $(this).attr('href');
  console.log(sectionTo);
  console.log("Jump to : " + $(sectionTo).offset().top);
  $('html, body').animate({
    scrollTop: $(sectionTo).offset().top
  }, 1300);
});

document.addEventListener("DOMContentLoaded", function () {

    let autohide = document.querySelector('.autohide');
    
    navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
  
    if(autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                autohide.classList.remove('scrolled-down');
                autohide.classList.add('scrolled-up');
            }
            else {
                autohide.classList.remove('scrolled-up');
                autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
    }
}); 

$(".download-button").hover(function () {
  $(this).html('GO');
}, function () {
  $(this).html('<i class="fa fa-download" aria-hidden="true"></i> Resume');
})


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|\.)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 30],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
