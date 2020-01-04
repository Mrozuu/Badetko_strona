window.onscroll = function() {functionScroll()};
  
var vHome = 0;
var vProjects = 1045;
var vAboutMe = 2161;
var vContacts = 3735;


function functionScroll() {
    if (document.documentElement.scrollTop < vProjects) {
        document.getElementById("nav_home").className = "nav_on";
        document.getElementById("nav_projects").className = "nav_off";
        document.getElementById("nav_about_me").className = "nav_off";
        document.getElementById("nav_contact").className = "nav_off";
    }
    if (document.documentElement.scrollTop > vProjects && document.documentElement.scrollTop < vAboutMe) {
        document.getElementById("nav_home").className = "nav_off";
        document.getElementById("nav_projects").className = "nav_on";
        document.getElementById("nav_about_me").className = "nav_off";
        document.getElementById("nav_contact").className = "nav_off";
    }
    if (document.documentElement.scrollTop > vAboutMe && document.documentElement.scrollTop < vContacts) {
        document.getElementById("nav_home").className = "nav_off";
        document.getElementById("nav_projects").className = "nav_off";
        document.getElementById("nav_about_me").className = "nav_on";
        document.getElementById("nav_contact").className = "nav_off";
    }
    if (document.documentElement.scrollTop > vContacts) {
        document.getElementById("nav_home").className = "nav_off";
        document.getElementById("nav_projects").className = "nav_off";
        document.getElementById("nav_about_me").className = "nav_off";
        document.getElementById("nav_contact").className = "nav_on";
    }
}

function onmouseover_icon_first(){

    var value = document.getElementById("icon-circle-empty-first");
    value.style.transition = "all 0.5s ease-in-out";
    //value.style.fontSize = "30px";
    value.style.color = "grey";
}

function onmouseout_icon_first(){

    var value = document.getElementById("icon-circle-empty-first");
    value.style.transition = "all 0.5s ease-in-out";
    //value.style.fontSize = "20px";
    value.style.color = "white";
}

function onmouseover_icon_second(){

    var value = document.getElementById("icon-circle-empty-second");
    value.style.transition = "all 0.5s ease-in-out";
    //value.style.fontSize = "30px";
    value.style.color = "grey";
}

function onmouseout_icon_second(){

    var value = document.getElementById("icon-circle-empty-second");
    value.style.transition = "all 0.5s ease-in-out";
    //value.style.fontSize = "20px";
    value.style.color = "white";
}


