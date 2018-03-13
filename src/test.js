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
    
    showTab1();
    
    /* Set the footer of the page */
    page.setFooter("Test application. All rights reserved.");
});


/* Function called when the first tab is clicked */
function showTab1(){
    page.clearContent();
    
    /* Sets the actual content of the page */
    var row1 = new Row("33%", "33%", "33%");
    row1.addInCell(0, paragraph("Hello world !"));
    row1.addInPage(page);
    
    var row2 = new Row("33%", "33%", "33%");
    row2.addInCell(1, paragraph("Hello world !"));
    row2.addInPage(page);
    
    var row3 = new Row("33%", "33%", "33%");
    row3.addInCell(2, paragraph("Hello world !"));
    row3.addInPage(page);
}


/* Function called when the second tab is clicked */
function showTab2(){
    page.clearContent();
    
    page.addContent(paragraph("Switch to tab 2 !"));
}