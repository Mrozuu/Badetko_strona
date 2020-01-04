window.onscroll = function() {functionScroll()};
  
var vHome = 0;
var vProjects = 1045;
var vAboutMe = 2161;
var vContacts = 4000;


function functionScroll() {
    if (document.documentElement.scrollTop < vProjects) {
        document.getElementById("nav_home").className = "";
        document.getElementById("nav_projects").className = "opacity";
        document.getElementById("nav_about_me").className = "opacity";
        document.getElementById("nav_contact").className = "opacity";
    }
    if (document.documentElement.scrollTop > vProjects && document.documentElement.scrollTop < vAboutMe) {
        document.getElementById("nav_home").className = "opacity";
        document.getElementById("nav_projects").className = "";
        document.getElementById("nav_about_me").className = "opacity";
        document.getElementById("nav_contact").className = "opacity";
    }
    if (document.documentElement.scrollTop > vAboutMe && document.documentElement.scrollTop < vContacts) {
        document.getElementById("nav_home").className = "opacity";
        document.getElementById("nav_projects").className = "opacity";
        document.getElementById("nav_about_me").className = "";
        document.getElementById("nav_contact").className = "opacity";
    }
    if (document.documentElement.scrollTop > vContacts) {
        document.getElementById("nav_home").className = "opacity";
        document.getElementById("nav_projects").className = "opacity";
        document.getElementById("nav_about_me").className = "opacity";
        document.getElementById("nav_contact").className = "";
    }
}