
$('.hamburger').click(function(){
  $('article').toggleClass('expanded');
  $('aside').toggleClass('nav-expanded');
  $(this).toggleClass('cross');
})

$('.hamburger').click();
