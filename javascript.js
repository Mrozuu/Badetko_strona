// start nav_scroll.js
function vh(v) {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (v * h) / 100;
  }

  function vw(v) {
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    return (v * w) / 100;
  }

$(window).on("load", function() {
    window.onscroll = function() {
      functionScroll();
    };

  
    function vmin(v) {
      return Math.min(vh(v), vw(v));
    }
  
    function vmax(v) {
      return Math.max(vh(v), vw(v));
    }
  
    var vProjects = vh(95);
    var vAboutMe = vh(195);
    var vContacts =
      vAboutMe + vh(5) + document.getElementById("about_me").offsetHeight;
    var vContacts20 = vContacts - vh(20);
    var vContacts30 = vContacts - vh(30);
  
    var vContacts3 =
      document.getElementById("fullsite").offsetHeight -
      document.getElementById("content").offsetHeight;
  
    var vContacts2;
    $(document).ready(function() {
      vContacts2 = $("#content").offset().top;
    });
  
    function functionScroll() {
      if (document.documentElement.scrollTop < vProjects) {
        document.getElementById("nav_home").className = "nav_on";
        document.getElementById("nav_projects").className = "nav_off";
        document.getElementById("nav_about_me").className = "nav_off";
        document.getElementById("nav_contact").className = "nav_off";
      }
      if (
        document.documentElement.scrollTop > vProjects &&
        document.documentElement.scrollTop < vAboutMe
      ) {
        document.getElementById("nav_home").className = "nav_off";
        document.getElementById("nav_projects").className = "nav_on";
        document.getElementById("nav_about_me").className = "nav_off";
        document.getElementById("nav_contact").className = "nav_off";
      }
      if (
        document.documentElement.scrollTop > vAboutMe &&
        document.documentElement.scrollTop < vContacts
      ) {
        document.getElementById("nav_home").className = "nav_off";
        document.getElementById("nav_projects").className = "nav_off";
        document.getElementById("nav_about_me").className = "nav_on";
        document.getElementById("nav_contact").className = "nav_off";
      }
      if (document.documentElement.scrollTop >= vContacts) {
        document.getElementById("nav_home").className = "nav_off";
        document.getElementById("nav_projects").className = "nav_off";
        document.getElementById("nav_about_me").className = "nav_off";
        document.getElementById("nav_contact").className = "nav_on";
      }
  
      if (document.documentElement.scrollTop >= vContacts30) {
        document.getElementById("content_head_animation").className =
          "content_head_animation";
      }
      if (document.documentElement.scrollTop >= vContacts20) {
        document.getElementById("content_bar_animation1").className =
          "content_bar_animation";
        document.getElementById("content_bar_animation2").className =
          "content_bar_animation";
        document.getElementById("content_bar_animation3").className =
          "content_bar_animation";
      }
  
      //mobile
      var vContactsM1 =
        document.getElementById("mobile").offsetHeight -
        document.getElementById("mobile_contact").offsetHeight -
        vh(50);
  
      var vContactsM2 = vContactsM1 + vh(20);
  
      if (document.documentElement.scrollTop > vContactsM1) {
        document.getElementById("mobile_contact_header2").className =
          "content_head_animation";
      }
  
      if (document.documentElement.scrollTop > vContactsM1) {
        document.getElementById("mobile_contact_bar1").className =
          "mobile_contact_bar_animation";
        document.getElementById("mobile_contact_bar2").className =
          "mobile_contact_bar_animation";
        document.getElementById("mobile_contact_bar3").className =
          "mobile_contact_bar_animation";
      }
    }
  
    function onmouseover_icon_first() {
      var value = document.getElementById("icon-circle-empty-first");
      value.style.transition = "all 0.5s ease-in-out";
      value.style.color = "grey";
    }
  
    function onmouseout_icon_first() {
      var value = document.getElementById("icon-circle-empty-first");
      value.style.transition = "all 0.5s ease-in-out";
      value.style.color = "white";
    }
  
    function onmouseover_icon_second() {
      var value = document.getElementById("icon-circle-empty-second");
      value.style.transition = "all 0.5s ease-in-out";
      value.style.color = "grey";
    }
  
    function onmouseout_icon_second() {
      var value = document.getElementById("icon-circle-empty-second");
      value.style.transition = "all 0.5s ease-in-out";
      value.style.color = "white";
    }
  });

// end nav_scroll.js

$(document).ready(function () {
  var NavY = $(".bottombar").offset().top;
  var stickyNav = function () {
    var ScrollY = $(window).scrollTop();
    if (ScrollY > NavY) {
      $(".bottombar").addClass("sticky");
      $(".bottombar_space").addClass("space");
    }
    else {
      $(".bottombar").removeClass("sticky");
      $(".bottombar_space").removeClass("space");
    }
  };
  stickyNav();
  $(window).scroll(function () {
    stickyNav();
  });
});


$("a").click(function () {
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top
    },
    800
  );
  return false;
});

function createImage() {
  var par = document.getElementsByClassName("background_gallery")[0];
  var img = document.createElement('img');
  img.src = 'images/lines2_animated.svg';
  par.appendChild(img);
}

$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
  var elem = document.createElement("img");
  document.getElementById("logo").appendChild(elem);
  document.getElementById("wrap").className = "background_on";
  document.getElementById("contener").className = "background_on_mobile";
  elem.src = "images/LOGO3_animated.svg";
});

$(window).on('beforeunload', function() {
$(window).scrollTop(0);
});

document.addEventListener("DOMContentLoaded", function() {
var lazyloadImages = document.querySelectorAll("img.lazy");    
var lazyloadThrottleTimeout;

function lazyload () {
if(lazyloadThrottleTimeout) {
  clearTimeout(lazyloadThrottleTimeout);
}    

lazyloadThrottleTimeout = setTimeout(function() {
    var scrollTop = window.pageYOffset;
    lazyloadImages.forEach(function(img) {
        //if(img.offsetTop < (window.innerHeight + scrollTop)) {
        if(img.offsetTop < (window.innerHeight + scrollTop - vh(50) )) {
            console.log("xD");
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
    });
    if(lazyloadImages.length == 0) { 
      document.removeEventListener("scroll", lazyload);
      window.removeEventListener("resize", lazyload);
      window.removeEventListener("orientationChange", lazyload);
    }
}, 20);
}

document.addEventListener("scroll", lazyload);
window.addEventListener("resize", lazyload);
window.addEventListener("orientationChange", lazyload);
});

;(function(){
function id(v){return document.getElementById(v); }
function loadbar() {
var ovrl = id("overlay"),
    prog = id("progress"),
    stat = id("progstat"),
    img = document.images,
    c = 0;
    tot = img.length;

function imgLoaded(){
  c += 1;
  var perc = ((100/tot*c) << 0) +"%";
  prog.style.width = perc;
  stat.innerHTML = "Loading "+ perc;
  if(c===tot) return doneLoading();
}
function doneLoading(){
  ovrl.style.opacity = 0;
  setTimeout(function(){ 
    ovrl.style.display = "none";
  }, 1200);
}
for(var i=0; i<tot; i++) {
  var tImg     = new Image();
  tImg.onload  = imgLoaded;
  tImg.onerror = imgLoaded;
  tImg.src     = img[i].src;
}    
}
document.addEventListener('DOMContentLoaded', loadbar, false);
}());