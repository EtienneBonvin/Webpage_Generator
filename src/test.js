/**
*
* Test document.
* This document shows and describe how the Webpage Generator should be used.
*
*/

var page;

$('document').ready(function(){
    
    /* Creates a new Webpage skeleton */
    page = new WebPage();
    
    /* Adds a banner and an application name to the page */
    page.setBanner("res/pics/EPFL-Logo.jpg", "Test application");
    
    /* Defines the navigation bar, here only two tabs */
    page.setNavigation("red", new Tab("Tab1", function(){showTab1()}), new Tab("Tab2", function(){showTab2()}));
    
    /* If no navigation is used, one can add a colored headband to separate banner and content */
    //page.setHeadband("red");
    
    /* Sets the actual content of the page */
    page.addContent(paragraph("Hello world !"));
    
    /* Set the footer of the page */
    page.setFooter("Test application. All rights reserved.");
});


/* Function called when the first tab is clicked */
function showTab1(){
    page.addContent(paragraph("Switch to tab 1 !"));
}


/* Function called when the second tab is clicked */
function showTab2(){
    page.addContent(paragraph("Switch to tab 2 !"));
}