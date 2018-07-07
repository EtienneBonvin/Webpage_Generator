/**
* Core logic of the generator.
* This document contains the WebPage class as well as helper classes and functions.
*/

/**
* Class WebPage.
*/
function WebPage() {
    
    "use strict";
    
    this.banner = centeredDivWithId("100%", "banner");
    this.topNavigation = centeredDivWithId("100%", "topNavigation");
    this.headband = centeredDivWithId("100%", "headband");
    this.sideNavigation = centeredDivWithId("0%", "sideNavigation");
    this.contentContainer = centeredDivWithId("100%", "contentContainer");
    this.content = centeredDivWithId("100%", "content");
    parenting(this.contentContainer, this.content);
    this.footer = centeredDivWithId("95%", "footer");
    var style = document.createElement('style');
    document.head.appendChild(style);
    this.stylesheet = style.sheet;
    
    this.container = centeredDivWithId("100%");
    
    this.container.append(this.banner);
    this.container.append(separation());
    this.container.append(this.topNavigation);
    this.container.append(this.headband);
    this.container.append(separation()); this.container.append(this.contentContainer);
    this.container.append(separation());
    this.container.append(this.footer);
    
    $("body").append(this.container);
    
    /**
    * Sets the banner with an image in the upper left corner and an application name on the upper right.
    *
    * @param String src : the path of the image to display.
    * @param String name : the name of the application to display.
    */
    this.setBanner = function(src, name){
        $("banner").empty();
        var imageDiv = sizedDiv("40%");
        parenting(imageDiv, image(src, "logo"));
        var pageName = sizedDiv("60%");
        var nameH1 = h1(name);
        nameH1.style.marginRight = "30px";
        parenting(pageName, nameH1);
        pageName.style.textAlign = "right";
        parenting(this.banner, imageDiv);
        parenting(this.banner, pageName);
    }
    
    
    /**
    * Sets a colored headband for the webpage under the banner. Usefull as decoration when no navigation is set.
    *
    * @param String color : the hex code or name of the color of the headband.
    */
    this.setHeadband = function(color){
        $("headband").empty();
        var head = sizedDiv("100%");
        this.headband.style.background = color;
        parenting(this.headband, head);
    }
    
    
    /**
    * Sets the content of the webpage.
    *
    * @param HTMLObject content : the HTML object representing the content of the webpage.
    */
    this.addContent = function(content){
        parenting(this.content, content);
    }
    
    
    /**
    * Clean the content of the webpage.
    */
    this.clearContent = function(){
        $("#content").empty();
    }
    
    
    /**
    * Sets an informations footer at the bottom of the web page.
    *
    * @param String message : the message to display in the footer.
    */
    this.setFooter = function(message){
        var footMessage = h4(message);
        footMessage.style.textAlign = "right";
        footMessage.style.margin = "2px";
        footer.append(footMessage);
    }
    
    
    /**
    * Sets a navigation bar for the webpage.
    *
    * @param String color : the color of the navigation bar.
    * @param ...Tab tabs : the tabs of the navigation bar.
    */
    this.setTopNavigation = function(color, hoverColor, ...tabs){
        var nav = sizedDiv("100%");
        for(var i=0; i < tabs.length; i++){
            parenting(nav, tabs[i].createTab());
        }
        this.topNavigation.style.background = color;
        this.topNavigation.append(nav);
        this.stylesheet.insertRule('.tab:hover{background : '+hoverColor+'}', 0);
    }
    
    
    /**
    * Set a navigation on the side of the screen.
    *
    * @param String color : hex string of the background color of the navigation.
    * @param String fontColor : hex string of the font color of the tabs in the navigation.
    * @ param ...Tab : the tabs to put in the side navigation.
    */
    this.setSideNavigation = function(color, fontColor, ...tabs){
        var row = new Row("20%", "80%");
        var sideNav = centeredDivWithId("100%");
        for(var i = 0; i < tabs.length; i++){
            parenting(sideNav, clickableElement("p", "<b>"+tabs[i].getName()+"</b>", tabs[i].changeTab()));
        }
        
        sideNav.style.border = "1px solid black";
        sideNav.style.paddingLeft = "10px";
        sideNav.style.borderRadius = "10px";
        sideNav.style.background = color;
        sideNav.style.color = fontColor;
        
        row.addInCell(0, sideNav);
        row.addInCell(1, this.content);
        parenting(this.contentContainer, row.asElement());
    }
    
    
    /**
    * Remove the side navigation.
    */
    this.removeSideNavigation = function(){
        $("#contentContainer").empty();
        parenting(this.contentContainer, this.content);
    }
    
    
    /**
    * Sets the font size for the entire webpage.
    *
    * @param String size : the font size to set.
    */
    this.setFontSize = function(size){
        document.body.style.fontSize = size;
    }
    
    
    /**
    * Sets the background color for the whole webpage.
    *
    * @param String color : the hex string of the color to set.
    */
    this.setBackgroundColor = function(color){
        this.container.style.background = color;   
    }
}


/**
* Tab helper class.
* Represents a tab of the navigation bar, with a name and an onClick function.
*
* @param String name : the name of the tab.
* @param Function onClick : the function to execute on click.
*/
function Tab(name, onClick){
    this.name = name;
    this.onClick = onClick;
    
    
    /**
    * Returns the on click function of the tab.
    */
    this.changeTab = function(){
        return this.onClick;
    }
    
    
    /**
    * Usused for now.
    * Returns the name of the tab.
    */
    this.getName = function(){
        return this.name;
    }
    
    
    /**
    * Creates a tab as a clickable HTML element with the "tab" css' class name.
    */
    this.createTab = function(){
        var element = clickableElement("div", this.name, function(){
            onClick();
        });
        element.className += "tab";
        return element;
    }
}


/**
* Row class. Represents a row of the content of the webpage.
*
* @param String ... sizes : the list of sizes in percent of the size of each cells.
*/
function Row(...sizes){
    this.container = sizedDiv("100%");
    this.cells = [];
    for(var i = 0; i < sizes.length; i++){
        this.cells.push(sizedDiv(sizes[i]));
        parenting(this.container, this.cells[i]);
    }
    
    
    /**
    * Adds some content in a cell of the row.
    *
    * @param int index : the index of the cell in which the content should be added.
    * @param HTMLObject content : the content to add.
    */
    this.addInCell = function(index, content){
        if(index >= 0 && index < this.cells.length){
            parenting(this.cells[index], content);
        }
    }
    
    
    /**
    * Centers the content of the cells at the given index.
    *
    * @param int index : the index of the cell in which the content should be centered.
    */
    this.centerContentInCell = function(index){
        if(index >= 0 && index < this.cells.length){
            this.cells[index].style.textAlign = "center";
        }
    }
    
    
    /**
    * Centers the content of all the cells.
    */
    this.centerAllCells = function(){
        for(var i = 0; i < this.cells.length; i++){
            this.centerContentInCell(i);
        }
    }
    
    
    /**
    * Sets the size of the font in the row.
    *
    * @param String size : the size of the row.
    */
    this.setFontSize = function(size){
        this.container.style.fontSize = size;
    }
    
    this.setVisibility = function(visible){
        if(visible){
            this.container.style.visibility = "visible";
        }else{
            this.container.style.visibility = "hidden";
        }
    }
    
    
    /**
    * Adds the row to the content of the page given as argument.
    *
    * @param Webpage page : the webpage in which the row should be added.
    */
    this.addInPage = function(page){
        page.addContent(this.container);
    }
    
    
    /**
    * Give the row as an HTML element.
    *
    * @return the row as an HTML element.
    */
    this.asElement = function(){
        return this.container;
    }
}


/**
* Panel class. Represents a panel with borders.
*
* @param String width : the width of the panel in percent.
* @param String borderStyle : the style of the border to apply using CSS convention.
* @param String borderRadius : the border radius to apply.
*/
function Panel(width, borderStyle, borderRadius){
    this.container = sizedDiv(width);
    this.container.style.border = borderStyle;
    this.container.style.borderRadius = borderRadius;
    
    
    /**
    * Adds content to the panel.
    *
    * @param HTMLElement content : the content to add to the panel.
    */
    this.addContent = function(content){
        parenting(this.container, content);
    }
    
    
    /**
    * Centers the content of the panel.
    */
    this.centerContent = function(){
        this.container.style.textAlign = "center";
    }
    
    
    /**
    * Sets the background of the panel to a given color.
    *
    * @param String color : the hex string of the color in which to paint the panel.
    */
    this.setBackground = function(color){
        this.container.style.background = color;
    }
    
    
    
    /**
    * Adds a picture inside the panel.
    * The border disappears, find a way to make it visible again.
    */
    this.addPicture = function(src){
        var srcImage = image("res/pics/EPFL-Logo.jpg");
        srcImage.style.width = "100%";
        srcImage.style.height = "100%";
        parenting(this.container, srcImage);
    }
    
    
    /**
    * Returns the panel as a HTMLElement.
    *
    * @return HTMLElement : the created panel.
    */
    this.toElement = function(){
        return this.container;
    }
}