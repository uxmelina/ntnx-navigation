
$('.hamburger').click(function(){
  $('article').toggleClass('expanded');
  $('aside').toggleClass('nav-expanded');
  $(this).toggleClass('cross');
})

$('.hamburger').click();

let page = pc;
let state = 'expand';

render(page, state);
//

$('.pc').click(function(){
  page = pc;
  render(page, state);
})

$('.frame').click(function(){
  page = frame;
  render(page, state);
})

$('.beam').click(function(){
  page = beam;
  render(page, state);
})


function render (page, state){

  $('aside').html('');
  state == 'expand' ? expand(page) : flyer(page)

  $('.expand').click(function(){
    state = 'expand'
    $('aside').html('');
    expand(page)
  })

  $('.flyer').click(function(){
    state = 'flyer'
    $('aside').html('')
    flyer(page)
  })

}
