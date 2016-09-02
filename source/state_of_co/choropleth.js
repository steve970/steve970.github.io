//choropleth
var width = 1500, height = 700;

var minimum = 5, maximum = 24;

var minimumColor = "#BFD3E6", maximumColor = "#88419D";

var color = d3.scale.linear().domain([minimum, maximum]).range([minimumColor, maximumColor]);

//http://www.ngs.noaa.gov/PUBS_LIB/ManualNOSNGS5.pdf
var projection = d3.geo.conicConformal().parallels([39 + 43 / 60, 40 + 47 / 60]).rotate([105 + 00 / 60, -39 - 00 / 60]).scale(5000).translate([width / 2, height / 2]);

var path = d3.geo.path().projection(projection);

var svg = d3.select("body").append("svg").attr("width", width).attr("height", height);

d3.json("colorado.json", function(error, co) {
  var counties = topojson.feature(co, co.objects.counties);

  //counties
  svg.append("g").attr("class", "colorado").selectAll("path").data(counties.features).enter().append("path").attr("d", path).attr("id",function(data) {
    return data.id;
  }).style("fill", "white");

  //county borders
  svg.append("path").datum(topojson.mesh(co, co.objects.counties, function(a, b) {
    return a !== b;
  })).attr("class", "county-border").attr("d", path);

  //state borders
  svg.append("path").datum(topojson.mesh(co, co.objects.counties, function(a, b) {
    return a === b;
  })).attr("class", "state-border").attr("d", path);

});

d3.select(self.frameElement).style("height", height + "px");
//end choropleth

//linear gradient key
// var w = 140, h = 300;
//
// var key = d3.select("body").append("svg").attr("id", "key").attr("width", w).attr("height", h);
//
// var legend = key.append("defs").append("svg:linearGradient").attr("id", "gradient").attr("x1", "100%").attr("y1", "0%").attr("x2", "100%").attr("y2", "100%").attr("spreadMethod", "pad");
//
// legend.append("stop").attr("offset", "0%").attr("stop-color", maximumColor).attr("stop-opacity", 1);
//
// legend.append("stop").attr("offset", "100%").attr("stop-color", minimumColor).attr("stop-opacity", 1);
//
// key.append("rect").attr("width", w - 100).attr("height", h - 100).style("fill", "url(#gradient)").attr("transform", "translate(0,10)");
//
// var y = d3.scale.linear().range([200, 0]).domain([minimum, maximum]);
//
// var yAxis = d3.svg.axis().scale(y).orient("right");
//
// key.append("g").attr("class", "y axis").attr("transform", "translate(42,10)").call(yAxis).append("text").attr("transform", "rotate(-90)").attr("y", 30).attr("dy", ".71em").style("text-anchor", "end").text("% Below FPL");
//end key
