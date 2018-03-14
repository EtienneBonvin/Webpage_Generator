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
    var panel1 = new Panel("50%", "2px dashed red", "20px");
    panel1.addContent(paragraph("Hello world !"));
    panel1.centerContent();
    row1.addInCell(0, panel1.toElement());
    row1.centerContentInCell(0);
    row1.addInPage(page);
    
    var row2 = new Row("33%", "33%", "33%");
    var panel2 = new Panel("95%", "1px solid black", "20px");
    panel2.addContent(paragraph("Hello world !"));
    panel2.centerContent();
    var panel3 = new Panel("100%", "1px solid black", "20px");
    panel3.addContent(panel2.toElement());
    panel3.centerContent();
    row2.addInCell(1, panel3.toElement());
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