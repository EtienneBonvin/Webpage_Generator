var code4 = new CodeBlock();
code4.addCode("page.setBanner('../pics/banner.jpg', 'My application');");
var bannerDoc = doc(
    h2("Set the banner"),
    paragraph("Each webpage should have its banner. We offer you an easy way to do so by selecting though our predefined banners and tunning it with you own logo and application name."),
    code4.asElement());

var code5 = new CodeBlock();
code5.addCode("page.setFooter('Developped by me !');");
var footerDoc = doc(
    h2("Set the footer"),
    paragraph("You can also set a little footer, a slim line at the bottom at the page, specifying the development team for example."),
    code5.asElement());

var code1 = new CodeBlock();
code1.addCode("var row = new Row('33%', '33%', '33%');");
var rowDoc = doc(
    h2("Create a row"),
    paragraph("When creating a row, you can choose how it will be cut. Each parameters is the width in percentage of the width of the container of each cells."),
    code1.asElement());

var code2 = new CodeBlock();
code2.addCode("row.addInCell(1, h2('Hello world !'));");
var addInRowDoc = doc(
    h2("Add an element in the row"),
    paragraph("Now that your row is created, you can add some elements in a selected cell of the row.\nThe cells are indexed from 0 to N - 1, no actions will be executed if the index given to the function is bigger or equal to N."),
    code2.asElement());

var code3 = new CodeBlock();
code3.addCode("row.centerContentInCell(1);");
code3.addCode("row.centerAllCells();");
var centerContentDoc = doc(
    h2("Center the content"),
    paragraph("You can at any time center the content of a given cell or alternatively center the content of all the cells in the row."),
    code3.asElement())