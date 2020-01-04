window.onscroll = function() {functionScroll()};
  
var vHome = 0;
var vProjects = 1045;
var vAboutMe = 2161;
var vContacts = 2900;


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