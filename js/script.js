const E_STATE = {
  EXPAND: 1,
  FLYOUT: 2
}

const E_PRODUCT = {
  PRISM_CENTRAL: { "title": "Prism Central", "file": "prism-central" },
  XI_LEAP: { "title": "Xi Leap", "file": "xi-leap" },
  XI_LEAP_FLAT: { "title": "Xi Leap (Nav Style: Flat)", "file": "xi-leap-flat" },
  XI_LEAP_IAAS: { "title": "Xi Leap IaaS (Nav Style: Flat)", "file": "xi-leap-iaas" },
}

let state = E_STATE.EXPAND;

$(function () {
  product = E_PRODUCT.XI_LEAP;
  setProduct(product);

  $('.switcher').click(function () {
    $('.products').toggleClass('prod-expanded')
  })

  $('.hamburger').click(function () {
    $('article').toggleClass('expanded');
    $('nav').toggleClass('nav-expanded');
    $(this).toggleClass('cross');
  })

  $('.expand').click(function () {
    state = E_STATE.EXPAND;
    setProduct(product);
  });

  $('.flyout').click(function () {
    state = E_STATE.FLYOUT;
    setProduct(product);
  });

  $.each(E_PRODUCT, function (index, product) {
    $('#products').append('<a data-product="' + index + '" hcs>' + product.title + '</a>');
  });

  $('#products a').click(function () {
    setProduct(E_PRODUCT[$(this).data("product")]);
  });
});

function setProduct(e_product) {
  $('#page-title').text(e_product.title)
  $('#products').removeClass('prod-expanded')
  $('#navigation').html('');
  $('#aside-content').addClass("hidden");
  $("#sidebar").find(".name").each(function () {
    $(this).text('Dashboard');
  });

  let filename = "./sitemap/" + e_product.file + ".json";
  $.getJSON(filename, function (data) {
    setToggleFooter(data);
    renderNavigation(data);
    registerNavHandler();
  })
    .fail(function (jqxhr, textStatus, error) {
      alert("Request Failed: " + filename + ", " + error);
    });
}

function setToggleFooter(tree) {
  let display = false;
  tree.map(element => {
    if (element.type === "PARENT") {
      display = true;
    }
  });
  display ? $('footer').removeClass("hidden") : $('footer').addClass("hidden");
}

function renderNavigation(tree) {
  if (state === E_STATE.EXPAND) {
    $('.expand').addClass('active');
    $('.flyout').removeClass('active');
    pane = $('#navigation').append('<div class="scroll"></div>')
    treeExpand(pane.find(".scroll"), tree);
  } else {
    $('.flyout').addClass('active');
    $('.expand').removeClass('active');
    treeFlyout($('#navigation'), tree);
  }
}

function registerNavHandler() {
  $('.nav-item').click(function (event) {
    event.stopPropagation();

    $('#sidebar-sections').html('');
    page_title = $(this).find("a").text();
    $("#sidebar").find(".name").each(function () {
      $(this).text(page_title);
    });

    $(".hamburger").trigger("click");

    if ($(this).data("sections") === null) {
      $('#sidebar').addClass("no-sections");
    } else {
      sections = $(this).data("sections").split(',');
      sections.forEach(function (item) {
        if (item.length === 0) {
          $('#sidebar-sections').append('<div class="separator"></div>');
        } else {
          active = item.indexOf('#') == -1 ? '' : 'selected';
          item = item.replace('#', '');
          $('#sidebar-sections').append('<li class=' + active + '>' + item + '</li>')
        }
      });
      $('#sidebar').removeClass("no-sections");
    }
  });
}

function treeExpand(parent, tree) {
  tree.map(element => {
    if (element.type === "SEPARATOR") {
      parent.append('<hr></hr>');
    }
    else if (element.type === "HEADING") {
      parent.append('<div class="heading" hcd>' + element.title + '</div><hr></hr>');
    }
    else if (element.type === "PAGE") {
      sections = element.sections ? element.sections : null;
      parent.append('<div class="nav-item" data-sections="' + sections + '"hcd><a>' + element.title + '</a></div>');
    }
    else if (element.type === "PARENT") {
      details = $('<details><summary hcd >' + element.title + '<kbd><img src="./images/arrow.svg" /></kbd></summary>').appendTo(parent);
      subnav = $('<div class="sum-secondary-menu"></div>').appendTo(details);
      treeExpand(subnav, element.nav)
      parent.append('</details>');
    }
  });
}

function treeFlyout(parent, tree) {
  tree.map(element => {
    if (element.type === "SEPARATOR") {
      parent.append('<hr></hr>');
    }
    else if (element.type === "HEADING") {
      parent.append('<div class="heading" hcd>' + element.title + '</div><hr></hr>');
    }
    else if (element.type === "PAGE") {
      sections = element.sections ? element.sections : null;
      parent.append('<div class="nav-item" data-sections="' + sections + '"hcd><a>' + element.title + '</a></div>');
    }
    else if (element.type === "PARENT") {
      details = $('<div class="nav-item" hcd><a>' + element.title + '</a><img src="./images/arrow.svg" />').appendTo(parent);
      subnav = $('<div class="nav-secondary-menu"></div>').appendTo(details);
      treeFlyout(subnav, element.nav)
      parent.append('</details>');
    }
  });
}