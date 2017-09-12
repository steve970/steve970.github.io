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

  $("#top").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
  })

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

  if ($(window).innerWidth() < 426) {
    $('.navMenu').addClass('fixed');
    var detach0 = $('.skills').detach();
    var detach1 = $('.experience').detach();
    $(detach1).insertAfter($(".resume.col-12"));
    $(detach0).insertAfter($(".experience"));

    $(".showcase").each(function () {
      $(this).removeClass("col-3").addClass("col-12");
      var detach = $(this).detach();
      $(detach).insertAfter($(".gallery"));
    })



    $("#menuNavHello").removeClass("col-3").addClass("col-12");
    $("#menuNavAbout").removeClass("col-2").addClass("col-12");
    $("#menuNavResume").removeClass("col-2").addClass("col-12");
    $("#menuNavProjects").removeClass("col-2").addClass("col-12");
    $("#menuNavContact").removeClass("col-2").addClass("col-12");

    $("#menuNavHello").wrap("<div class='row'></div>");
    $("#menuNavAbout").wrap("<div class='row'></div>");
    $("#menuNavResume").wrap("<div class='row'></div>");
    $("#menuNavProjects").wrap("<div class='row'></div>");
    $("#menuNavContact").wrap("<div class='row'></div>");

    var detach2 = $("#menuNavHello").detach();
    console.log(detach2);
    $(detach2).insertBefore($("#menuNavAbout"));

    var detach3 = $(".js").detach();
    $(detach3).insertAfter($("#mobileNavigation"));
    $(".js").wrap("<div></div>");

    $("#footerMobileNav").removeClass("col-3").addClass("col-12");
    $("#footerMobileAbout").removeClass("col-2").addClass("col-12");
    $("#footerMobileProjects").removeClass("col-2").addClass("col-12");
    $("#footerMobileResume").removeClass("col-2").addClass("col-12");

    $(".mobileLinks").hide();

  };

  $( window ).scroll(function() {
    if ($(window).innerWidth() < 426) {
      console.log("Welcome to my mobile website!");
    } else if ($( window ).scrollTop() > 894 && $( window ).scrollTop() < 4011) {
      console.log('true')
      $('.navMenu').addClass('fixed');
    } else {
      console.log('false')
      $('.navMenu').removeClass('fixed');
    }

  });

  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });

});
