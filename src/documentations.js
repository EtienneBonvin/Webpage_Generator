
var code6 = new CodeBlock();
code6.addCode("var page = new Webpage();");
var pageDoc = doc(
    h2("Create the page"),
    paragraph("First of all, let's create your webpage object. It will allow you to build your website bit by bit."),
    code6.asElement());


/**
* Banner setting documentation.
*/
var code4 = new CodeBlock();
code4.addCode("page.setBanner('../pics/banner.jpg', 'My application');");
var bannerDoc = doc(
    h2("Set the banner"),
    paragraph("Each webpage should have its banner. We offer you an easy way to do so by selecting though our predefined banners and tunning it with you own logo and application name."),
    code4.asElement());


/**
* Footer setting documentation.
*/
var code5 = new CodeBlock();
code5.addCode("page.setFooter('Developped by me !');");
var footerDoc = doc(
    h2("Set the footer"),
    paragraph("You can also set a little footer, a slim line at the bottom at the page, specifying the development team for example."),
    code5.asElement());


/**
* Headband setting documentation.
*/
var code6 = new CodeBlock();
code6.addCode("page.setHeadband('blue');");
var headBandDoc = doc(
    h2("Set a headband"),
    paragraph("Maybe you don't want to have a banner, still you can add a colored headband to nicely separate your banner and your content."),
    code6.asElement()
);


/**
* Top navigation setting documentation.
*/
var code7 = new CodeBlock();
code7.addCode("page.setTopNavigation('#4073c4', '2a4672', \n\tnew Tab('Presentation', \n\t\tfunction(){showPresentation()}),\n\tnew Tab('Documentation', \n\t\tfunction(){showDocumentation()}),\n\tnew Tab('Test', \n\t\tfunction(){showTest()}));");
var topNavDoc = doc(
    h2("Set top navigation"),
    paragraph("You may want to create several pages for your webpage, here's an easy way to add a top navigation with the desired color."),
    code7.asElement()
);


/**
* Side navigation setting documentation.
*/
var code8 = new CodeBlock();
code8.addCode("page.setSideNavigation('#4073c4', 'white',\n\tnew Tab('Page', \n\t\tfunction(){pageDocumentation()}),\n\tnew Tab('Row', \n\t\tfunction(){rowDocumentation()}),\n\tnew Tab('Panel', \n\t\tfunction(){panelDocumentation()}),\n\tnew Tab('Tab', function(){tabDocumentation()}));");
var sideNavDoc = doc(
    h2("Set side navigation"),
    paragraph("Sometimes a side navigation is preferable in place or in complement of the top navigation. You can also set it with the colors of your choice."),
    code8.asElement()
);


/**
* Side navigation removal documentation.
*/
var code9 = new CodeBlock();
code9.addCode("page.removeSideNavigation();");
var remSideNavDoc = doc(
    h2("Remove side navigation"),
    paragraph("Removing the side navigation never have been so easy. Just ask for it."),
    code9.asElement()
);

var code10 = new CodeBlock();
code10.addCode("page.setFontSize('1.5em');");
var setFontSizeDoc = doc(
    h2("Set font size"),
    paragraph("Here is how you can easily set the font size for the whole web page."),
    code10.asElement()
);


/**
* Row creation documentation.
*/
var code1 = new CodeBlock();
code1.addCode("var row = new Row('33%', '33%', '33%');");
var rowDoc = doc(
    h2("Create a row"),
    paragraph("When creating a row, you can choose how it will be cut. Each parameters is the width in percentage of the width of the container of each cells."),
    code1.asElement());


/**
* Add element in row documentation.
*/
var code2 = new CodeBlock();
code2.addCode("row.addInCell(1, h2('Hello world !'));");
var addInRowDoc = doc(
    h2("Add an element in the row"),
    paragraph("Now that your row is created, you can add some elements in a selected cell of the row.\nThe cells are indexed from 0 to N - 1, no actions will be executed if the index given to the function is bigger or equal to N."),
    code2.asElement());


/**
* Center content in row documentation.
*/
var code3 = new CodeBlock();
code3.addCode("row.centerContentInCell(1);");
code3.addCode("row.centerAllCells();");
var centerContentDoc = doc(
    h2("Center the content"),
    paragraph("You can at any time center the content of a given cell or alternatively center the content of all the cells in the row."),
    code3.asElement());