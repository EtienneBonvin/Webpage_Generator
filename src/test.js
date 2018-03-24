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
    page.setFontSize("1.2em");
    
    /* Adds a banner and an application name to the page */
    page.setBanner("res/pics/logo1.png", "Webpage generator");
    
    /* Defines the navigation bar, here only two tabs */
    page.setNavigation("#4073c4", "#2a4672", 
            new Tab("Presentation", function(){showTab1()}),
            new Tab("Documentation", function(){showTab2()}),
            new Tab("Test", function(){showTab3()}));
    
    /* If no navigation is used, one can add a colored headband to separate banner and content */
    //page.setHeadband("red");
    
    showTab1();
    
    /* Set the footer of the page */
    page.setFooter("Test application. All rights reserved.");
});


/* Function called when the first tab is clicked */
function showTab1(){
    page.clearContent();
    
    var row1 = new Row("10%", "80%", "10%");
    row1.addInCell(1, image("res/pics/easy.gif"));
    row1.centerContentInCell(1);
    row1.addInPage(page);
    
    var row2 = new Row("35%", "10%", "55%");
    var upDiv = sizedDiv("100%");
    upDiv.style.height = "50%";
    upDiv.style.textAlign = "center";
    parenting(upDiv, h2("Tired of having to spend hours to develop a website ?"));
    var downDiv = sizedDiv("100%");
    downDiv.style.height = "50%";
    downDiv.style.textAlign = "center";
    parenting(downDiv, h2("Don't want to spend hundreds in its development by a professional ?"));
    row2.addInCell(0, upDiv);
    row2.addInCell(0, downDiv);
    
    row2.addInCell(2, paragraph("<b>WPG</b> brings you an easy and convenient, readable way to <b>quickly develop simple websites</b>."));
    row2.addInCell(2, paragraph("<b>WPG</b> is a library containing simple, meaningful methods that will allow you to <b>efficiently</b> create your website. It has been thought in a way that the elements can be easily created, arranged and placed on the webpage in the <b>most convenient way possible</b>."));
    row2.addInCell(2, paragraph("<b>Inspired by Bootstrap</b>, the main structure of the library is the row, representing a row in the page. However, the way of creating and managing them has been made such that it is easier and more concrete to use."))
    
    row2.addInPage(page);
}


function showTab2(){
    page.clearContent();
    var row1 = new Row("10%", "80%", "10%");
    row1.addInCell(1, h1("Row"));
    row1.addInCell(1, paragraph("A row is the base structure of the webpage. It allows you to have a complete control of the placement of the content on the page."));
    row1.addInPage(page);
    
    var row2 = new Row("15%", "75%", "10%");
    row2.addInCell(1, bannerDoc);
    row2.addInCell(1, footerDoc);
    row2.addInCell(1, rowDoc);
    row2.addInCell(1, addInRowDoc);
    row2.addInCell(1, centerContentDoc);
    row2.addInPage(page);
}


/* Function called when the second tab is clicked */
function showTab3(){
    page.clearContent();
    
    /* Sets the actual content of the page */
    var row1 = new Row("33%", "33%", "33%");
    var panel1 = new Panel("50%", "2px dashed red", "20px");
    panel1.addContent(paragraph("Hello world !"));
    panel1.centerContent();
    row1.addInCell(0, panel1.toElement());
    row1.centerAllCells();
    var imagePanel = new Panel("50%", "1 px solid black", "20px");
    imagePanel.addPicture("res/pics/EPFL-Logo.jpg");
    row1.addInCell(2, imagePanel.toElement());
    row1.addInPage(page);
    
    var row2 = new Row("33%", "33%", "33%");
    var panel2 = new Panel("95%", "1px solid black", "20px");
    panel2.addContent(paragraph("Hello world !"));
    panel2.centerContent();
    var panel3 = new Panel("100%", "1px solid black", "20px");
    panel3.addContent(panel2.toElement());
    panel3.centerContent();
    panel3.setBackground("black");
    panel2.setBackground("white");
    row2.addInCell(1, panel3.toElement());
    row2.addInPage(page);
    
    var row3 = new Row("33%", "33%", "33%");
    row3.addInCell(2, paragraph("Hello world !"));
    row3.addInPage(page);
}