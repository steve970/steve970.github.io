$(document).ready(function() {

  $(".record").on("click", function() {
    $(this).toggleClass('rotate');
    if ($(this).hasClass('rotate')) {
      // playTrack($('#didgi3').get(0));
      $('#stopwatch').timer('resume');
      // layerTracks();
      // playSymphony();
    }
    else {
      $('#stopwatch').timer('pause');
      stopTracks($('audio'));
    }
  })

  $(document).on('keydown', function (event) {
    if (event.which === 65) { // keyboard a
      playTrack($('#highhat').get(0));
    } else if (event.which === 83) { // keyboard s
      playTrack($('#bass').get(0));
    } else if (event.which === 68) { // keyboard d
      $('.record').css("background", "url(img/arnold.jpeg)")
      playTrack($('#live').get(0));
    } else if (event.which === 70) { // keyboard f
      playTrack($('#trumpet').get(0));
    } else if (event.which === 71) { // keyboard g
      playTrack($('#banjo').get(0));
    } else if (event.which === 74 ) { // keyboard j
      playTrack($('#dubstep').get(0));
      $('body').css("background", "url(img/background.gif)")
    } else if (event.which === 72) { // keyboard h
      playTrack($('#scratch').get(0));
    } else if (event.which === 75) { // keyboard k
      playTrack($('#flutes').get(0));
    } else if (event.which === 76) { // keyboard l
      playTrack($('#dubsteploop').get(0));
    } else if (event.which === 90) { // keyboard z
      $('.record').css("background", "url(img/arnold.jpeg)")
      playTrack($('#baby').get(0));
    } else if (event.which === 88) { // keyboard x
      playTrack($('#weapon').get(0));
    } else if (event.which === 67) { // keyboard c
      $('.record').css("background", "url(img/russell.jpeg)")
      playTrack($('#entertain').get(0));
    } else if (event.which === 86) { // keyboard v
      $('.record').css("background", "url(img/batman.jpeg)")
      playTrack($('#batman').get(0));
    }
    else if (event.which === 66) { // keyboard b
     $('.record').css("background", "url(img/jeff.jpeg)")
     playTrack($('#jeff').get(0));
   }
  })

  $(document).on('keyup', function (event) {
    if (event.which === 65) { // keyboard a
      stopTrack($('#highhat').get(0));
    } else if (event.which === 83) { // keyboard s
      stopTrack($('#bass').get(0));
    } else if (event.which === 68) { // keyboard d
      $('.record').css("background", "url(http://i.imgur.com/FKRMMap.gif) center center");
      $('.record').css("background-size", "cover");
      stopTrack($('#live').get(0));
    } else if (event.which === 70) { // keyboard f
      stopTrack($('#trumpet').get(0));
    } else if (event.which === 71) { // keyboard g
      stopTrack($('#banjo').get(0));
    } else if (event.which === 74) { // keyboard j
      stopTrack($('#dubstep').get(0));
      $('body').css("background", "#eaeaea")
    } else if (event.which === 72) { // keyboard h
      stopTrack($('#scratch').get(0));
    } else if (event.which === 75) { // keyboard k
      stopTrack($('#flutes').get(0));
    } else if (event.which === 76) { // keyboard l
      stopTrack($('#dubsteploop').get(0));
    } else if (event.which === 67) { // keyboard c
      $('.record').css("background", "url(http://i.imgur.com/FKRMMap.gif) center center");
      $('.record').css("background-size", "cover");
      stopTrack($('#entertain').get(0));
    } else if (event.which === 86) { // keyboard v
      $('.record').css("background", "url(http://i.imgur.com/FKRMMap.gif) center center");
      $('.record').css("background-size", "cover");
      stopTrack($('#batman').get(0));
    } else if (event.which === 66) { // keyboard b
      $('.record').css("background", "url(http://i.imgur.com/FKRMMap.gif) center center");
      $('.record').css("background-size", "cover");
      stopTrack($('#jeff').get(0));
    } else if (event.which === 90) { // keyboard z
      $('.record').css("background", "url(http://i.imgur.com/FKRMMap.gif) center center");
      $('.record').css("background-size", "cover");
      playTrack($('#baby').get(0));
    }
  })

  $(".record").dblclick(function () {
    $(this).toggleClass('rotate');
    playTrack($('#scratching').get(0));
  })

})

function playTrack (audioElem) {
  audioElem.play();
}

function stopTrack (audioElem) {
  audioElem.pause();
  audioElem.currentTime= 0;
}

function stopTracks (audioElem) {
  audioElem.each(function () {
    $(this).get(0).pause();
    $(this).get(0).currentTime = 0;
  })
}

// function layerTracks () {
//   setTimeout(function(){ playTrack($('#entertain').get(0)); }, 3000);
// }

// function playSymphony () {
//   setTimeout(function(){ playTrack($('#drums5').get(0)); }, 3500);
//   setTimeout(function(){ playTrack($('#didgi1').get(0)); }, 1000);
//   setTimeout(function(){ stopTracks($('audio')); }, 42500);
//   setTimeout(function(){ playTrack($('#annoy').get(0)); }, 42501);
// }
