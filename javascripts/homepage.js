$(document).ready(function(){if($(".js").hide(),$(".threeLine").click(function(){$(".js").toggle()}),$(".footerThreeLine").click(function(){$(".js").toggle()}),$("#anchorArrow").click(function(){return $("html, body").animate({scrollTop:$("#aboutAnchor").offset().top},1e3),!1}),$("#top").click(function(){return $("html, body").animate({scrollTop:0},1e3),!1}),$("#aboutNav").click(function(){return $("html, body").animate({scrollTop:$("#aboutAnchor").offset().top},1e3),$(window).innerWidth()<426&&void $(".js").toggle()}),$("#footerAboutNav").click(function(){return $("html, body").animate({scrollTop:$("#aboutAnchor").offset().top},1e3),!1}),$("#anchorArrow1").click(function(){return $("html, body").animate({scrollTop:$("#workAnchor").offset().top},1e3),!1}),$("#skillNav").click(function(){return $("html, body").animate({scrollTop:$("#workAnchor").offset().top},1e3),$(window).innerWidth()<426&&void $(".js").toggle()}),$("#footerSkillNav").click(function(){return $("html, body").animate({scrollTop:$("#workAnchor").offset().top},1e3),!1}),$("#anchorArrow2").click(function(){return $("html, body").animate({scrollTop:$("#projectAnchor").offset().top},1e3),!1}),$("#projectNav").click(function(){return $("html, body").animate({scrollTop:$("#projectAnchor").offset().top},1e3),$(window).innerWidth()<426&&void $(".js").toggle()}),$("#footerProjectNav").click(function(){return $("html, body").animate({scrollTop:$("#projectAnchor").offset().top},1e3),!1}),$("#anchorArrow3").click(function(){return $("html, body").animate({scrollTop:$("#contactAnchor").offset().top},1e3),!1}),$("#contactNav").click(function(){return $("html, body").animate({scrollTop:$("#contactAnchor").offset().top},1e3),$(window).innerWidth()<426&&void $(".js").toggle()}),$("#footerContactNav").click(function(){return $("html, body").animate({scrollTop:$("#contactAnchor").offset().top},1e3),!1}),$(window).innerWidth()<426){$(".navMenu").addClass("fixed");var o=$(".skills").detach(),e=$(".experience").detach();$(e).insertAfter($(".resume.col-12")),$(o).insertAfter($(".experience")),$(".showcase").each(function(){$(this).removeClass("col-3").addClass("col-12");var o=$(this).detach();$(o).insertAfter($(".gallery"))}),$("#menuNavHello").removeClass("col-3").addClass("col-12"),$("#menuNavAbout").removeClass("col-2").addClass("col-12"),$("#menuNavResume").removeClass("col-2").addClass("col-12"),$("#menuNavProjects").removeClass("col-2").addClass("col-12"),$("#menuNavContact").removeClass("col-2").addClass("col-12"),$("#menuNavHello").wrap("<div class='row'></div>"),$("#menuNavAbout").wrap("<div class='row'></div>"),$("#menuNavResume").wrap("<div class='row'></div>"),$("#menuNavProjects").wrap("<div class='row'></div>"),$("#menuNavContact").wrap("<div class='row'></div>");var t=$("#menuNavHello").detach();console.log(t),$(t).insertBefore($("#menuNavAbout"));var l=$(".js").detach();$(l).insertAfter($("#mobileNavigation")),$(".js").wrap("<div></div>"),$("#footerMobileNav").removeClass("col-3").addClass("col-12"),$("#footerMobileAbout").removeClass("col-2").addClass("col-12"),$("#footerMobileProjects").removeClass("col-2").addClass("col-12"),$("#footerMobileResume").removeClass("col-2").addClass("col-12"),$(".soundboard").addClass(""),$(".mobileLinks").hide()}$(window).scroll(function(){$(window).innerWidth()<426?console.log("Welcome to my mobile website!"):$(window).scrollTop()>894&&$(window).scrollTop()<4011?(console.log("true"),$(".navMenu").addClass("fixed")):(console.log("false"),$(".navMenu").removeClass("fixed"))}),$("#nav-icon3").click(function(){$(this).toggleClass("open")})});