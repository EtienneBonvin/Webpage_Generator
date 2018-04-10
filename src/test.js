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
    page.setBackgroundColor("#f0f0f5");
    
    /* Adds a banner and an application name to the page */
    page.setBanner("res/pics/logo1.png", "Webpage generator");
    
    /* Defines the navigation bar, here only two tabs */
    page.setTopNavigation("#4073c4", "#2a4672", 
            new Tab("Presentation", function(){showPresentation()}),
            new Tab("Documentation", function(){showDocumentation()}),
            new Tab("Test", function(){showTest()}));
    
    /* If no navigation is used, one can add a colored headband to separate banner and content */
    //page.setHeadband("red");
    
    showPresentation();
    
    /* Set the footer of the page */
    page.setFooter("Test application. All rights reserved.");
});


/* Show the website presentation */
function showPresentation(){
    clearContentAndSN();
    
    var row1 = new Row("10%", "80%", "10%");
    var easy = image("res/pics/easy.gif");
    easy.style.border = "1px solid black";
    easy.style.borderRadius = "5px";
    row1.addInCell(1, easy);
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


/* Show documentation page */
function showDocumentation(){
    clearContentAndSN();
    
    page.setSideNavigation("#4073c4", "white",
        new Tab("Page", function(){pageDocumentation()}),
        new Tab("Row", function(){rowDocumentation()}),
        new Tab("Panel", function()
        {panelDocumentation()}),
        new Tab("Tab", function()
        {tabDocumentation()})
    );
    
    pageDocumentation();
}


/* Display page's documentation. Keeps side navigation */
function pageDocumentation(){
    page.clearContent();
    var row1 = new Row("5%", "85%", "10%");
    row1.addInCell(1, h1("Page"));
    row1.addInCell(1, paragraph("The page is the main object of this project. As you probably guessed, it represents the webpage you'll be building."));
    row1.addInPage(page);
    
    var row2 = new Row("15%", "75%", "10%");
    row2.addInCell(1, pageDoc);
    row2.addInCell(1, bannerDoc);
    row2.addInCell(1, footerDoc);
    row2.addInCell(1, topNavDoc);
    row2.addInCell(1, headBandDoc);
    row2.addInCell(1, sideNavDoc);
    row2.addInCell(1, remSideNavDoc);
    row2.addInCell(1, setFontSizeDoc);
    row2.addInPage(page);
}


/* Display row's documentation. Keeps side navigation */
function rowDocumentation(){
    page.clearContent();
    var row1 = new Row("5%", "85%", "10%");
    row1.addInCell(1, h1("Row"));
    row1.addInCell(1, paragraph("A row is the base structure of the webpage. It allows you to have a complete control of the placement of the content on the page."));
    row1.addInPage(page);
    
    var row2 = new Row("15%", "75%", "10%");
    row2.addInCell(1, rowDoc);
    row2.addInCell(1, addInRowDoc);
    row2.addInCell(1, centerContentDoc);
    row2.addInPage(page);
}

function panelDocumentation(){
    page.clearContent();
    var row1 = new Row("5%", "85%", "10%");
    row1.addInCell(1, h1("Panel"));
    row1.addInCell(1, paragraph("A panel will allow you to highlight a part of you website with nice borders."));
    row1.addInPage(page);
    
    var row2 = new Row("15%", "75%", "10%");
}

function tabDocumentation(){
    page.clearContent();
    var row1 = new Row("5%", "85%", "10%");
    row1.addInCell(1, h1("Tab"));
    row1.addInPage(page);
}


/** Clear both content and side navigation */
function clearContentAndSN(){
    page.clearContent();
    page.removeSideNavigation();
}


/* Show various tests */
function showTest(){
    clearContentAndSN();
    
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