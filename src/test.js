$('document').ready(function(){
    var page = new WebPage();
    page.setBanner("res/pics/EPFL-Logo.jpg", "Test application");
    page.setHeadband("red");
    page.addContent(paragraph("Hello world !"));
    page.setFooter("Test application. All right reserved.")
});