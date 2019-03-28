
$('.hamburger').click(function(){
  $('article').toggleClass('expanded');
  $('aside').toggleClass('nav-expanded');
  $(this).toggleClass('cross');
})

$('.hamburger').click();



expand(pc)
//

$('.expand').click(function(){
  alert('Switched to Expand/Collapse ↕️')
  $('aside').html('');
  expand(pc)
})

$('.flyer').click(function(){
  alert('Switched to Flyer ↔️')
  $('aside').html('')
  flyer(pc)
})
