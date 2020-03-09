window.onscroll = function() {
  functionScroll();
};
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

function vmin(v) {
  return Math.min(vh(v), vw(v));
}

function vmax(v) {
  return Math.max(vh(v), vw(v));
}

var vProjects = vh(95);
var vAboutMe = vh(195);
var vContacts = vAboutMe + document.getElementById("about_me").offsetHeight;
console.log(vContacts);

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
    console.log("@");
  }

  if (document.documentElement.scrollTop >= vContacts - vh(30)) {
    console.log("!");
    document.getElementById("content_head_animation").className =
      "content_head_animation";
  }
  if (document.documentElement.scrollTop >= vContacts - vh(20)) {
    document.getElementById("content_bar_animation1").className =
      "content_bar_animation";
    document.getElementById("content_bar_animation2").className =
      "content_bar_animation";
    document.getElementById("content_bar_animation3").className =
      "content_bar_animation";
  }

  //mobilna
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
  //value.style.fontSize = "30px";
  value.style.color = "grey";
}

function onmouseout_icon_first() {
  var value = document.getElementById("icon-circle-empty-first");
  value.style.transition = "all 0.5s ease-in-out";
  //value.style.fontSize = "20px";
  value.style.color = "white";
}

function onmouseover_icon_second() {
  var value = document.getElementById("icon-circle-empty-second");
  value.style.transition = "all 0.5s ease-in-out";
  //value.style.fontSize = "30px";
  value.style.color = "grey";
}

function onmouseout_icon_second() {
  var value = document.getElementById("icon-circle-empty-second");
  value.style.transition = "all 0.5s ease-in-out";
  //value.style.fontSize = "20px";
  value.style.color = "white";
}
