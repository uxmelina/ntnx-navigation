$('.switcher').click(function(){
  $('.products').toggleClass('prod-expanded')
})


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

$('.pc').click(function(state){
  page = pc;
  $('.page-title').text('Prism Central')
  $('.products').removeClass('prod-expanded')
  render(page, state);
})

$('.frame').click(function(state){
  page = frame;
  $('.page-title').text('Frame')
  $('.products').removeClass('prod-expanded')
  render(page, state);
})

$('.beam').click(function(state){
  page = beam;
  $('.page-title').text('Beam')
  $('.products').removeClass('prod-expanded')
  render(page, state);
})


function render (page, state){
  $('aside').html('');

  state === 'expand' ? expand(page) : flyer(page)

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
