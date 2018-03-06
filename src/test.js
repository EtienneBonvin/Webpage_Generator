var page;

$('document').ready(function(){
    page = new WebPage();
    page.setBanner("res/pics/EPFL-Logo.jpg", "Test application");
    page.setNavigation("red", new Tab("Tab1", function(){showTab1()}), new Tab("Tab2", function(){showTab2()}));
    //page.setHeadband("red");
    page.addContent(paragraph("Hello world !"));
    page.setFooter("Test application. All rights reserved.");
});

function showTab1(){
    page.addContent(paragraph("Switch to tab 1 !"));
}

function showTab2(){
    page.addContent(paragraph("Switch to tab 2 !"));
}