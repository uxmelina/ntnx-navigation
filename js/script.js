
$('.hamburger').click(function(){
  $('article').toggleClass('expanded');
  $('aside').toggleClass('nav-expanded');
  $(this).toggleClass('cross');
})

$('.hamburger').click();



expand(frame)
//

$('.expand').click(function(){
  alert('Switched to Expand/Collapse ↕️')
  $('aside').html('');
  expand(frame)
})

$('.flyer').click(function(){
  alert('Switched to Flyer ↔️')
  $('aside').html('')
  flyer(frame)
})
