// This is where it all goes :)
$( document ).ready( function () {

  $(".js").hide();
  
  $(".threeLine").click(function () {
    $(".js").toggle()
  });

  $(".footerThreeLine").click(function () {
    $(".js").toggle()
  });

  $("#anchorArrow").click(function() {
    $('html, body').animate({
        scrollTop: $('#aboutAnchor').offset().top
    }, 1000);
    return false;
  });

  $("#aboutNav").click(function() {
    $('html, body').animate({
        scrollTop: $('#aboutAnchor').offset().top
    }, 1000);
    return false;
  });

  $("#footerAboutNav").click(function() {
    $('html, body').animate({
        scrollTop: $('#aboutAnchor').offset().top
    }, 1000);
    return false;
  });

  $("#anchorArrow1").click(function() {
    $('html, body').animate({
        scrollTop: $('#workAnchor').offset().top
    }, 1000);
    return false;
  });

  $("#skillNav").click(function() {
    $('html, body').animate({
        scrollTop: $('#workAnchor').offset().top
    }, 1000);
    return false;
  });

  $("#footerSkillNav").click(function() {
    $('html, body').animate({
        scrollTop: $('#workAnchor').offset().top
    }, 1000);
    return false;
  });

  $("#anchorArrow2").click(function() {
    $('html, body').animate({
        scrollTop: $('#projectAnchor').offset().top
    }, 1000);
    return false;
  });

  $("#projectNav").click(function() {
    $('html, body').animate({
        scrollTop: $('#projectAnchor').offset().top
    }, 1000);
    return false;
  });

  $("#footerProjectNav").click(function() {
    $('html, body').animate({
        scrollTop: $('#projectAnchor').offset().top
    }, 1000);
    return false;
  });

  $("#anchorArrow3").click(function() {
    $('html, body').animate({
        scrollTop: $('#contactAnchor').offset().top
    }, 1000);
    return false;
  });

  $("#contactNav").click(function() {
    $('html, body').animate({
        scrollTop: $('#contactAnchor').offset().top
    }, 1000);
    return false;
  });

  $("#footerContactNav").click(function() {
    $('html, body').animate({
        scrollTop: $('#contactAnchor').offset().top
    }, 1000);
    return false;
  });

  $( window ).scroll(function() {
    // alert($( window ).scrollTop());
    if ($( window ).scrollTop() > 130 && $( window ).scrollTop() < 3990 ) {
      console.log('true')
      $('.navMenu').addClass('fixed');
    } else {
      console.log('false')
      $('.navMenu').removeClass('fixed');
    }

  });

});
