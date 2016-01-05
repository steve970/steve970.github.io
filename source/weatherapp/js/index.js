$(document).ready(function () {

  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/posts/1",
    datatype: "json",
    success: function(data) {
      console.log(data.title);
    }
  })

  $.ajax({
    type: "GET",
    url: "https://jsonip.com",
    dataType: "json",
    success: function(data) {
      var ipAddress = data.ip;
      $('.location').text(ipAddress);
    }
  })

  $.ajax({
    type: "GET",
    url: "https://freegeoip.net/json/",
    dataType: "json",
    success: function(data) {
      var longitude = data.longitude;
      var latitude = data.latitude;
      $('.calculate').remove();
      $('.longlat').text("Longitude: " + longitude + "     Latitude: " + latitude)
    }
  })

  $.ajax({
    type: "GET",
    url: "https://www.flickr.com/services/feeds/photos_public.gne?tags=puggle&format=json",
    dataType: "jsonp",
    data: {format: "json"}
  })

  jsonFlickrFeed = function(data) {
    var x = data.items[12].media["m"].replace(/_m/, "");
    $('body').css('background', 'url("' + x + '") no-repeat center center fixed');
    $('body').css('background-size', 'cover')
  }

  $('form').on("submit", function (e) {
    var place = $(this).serialize().replace("location=", "").toLowerCase() || "";  // This is better with a big form
    if (place === "")
      $('.message').text("Please put in a city and state!")
    else
      console.log();
      $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&APPID=" +"#{ENV['OPENWEATHER_API']}",
        success: function(data) {
          var weather = data.weather[0].main;
          if ( weather === "Cloudy" || weather == "Clouds")
            $('.message').text("Cloudy with a chance of furballs");
          else if ( weather === "Rain")
            $('.message').text("It's raining cats and dogs");
          else if ( weather === "Clear")
            $('.message').text("I need a dog pun about the sun...");
          else
            $('.message').text("It's ruff out there");
        }
      })
      e.preventDefault();
  })

});
