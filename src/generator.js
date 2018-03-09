/**
* Core logic of the generator.
* This document contains the WebPage class as well as helper classes and functions.
*/


/**
* Class WebPage.
*/
function WebPage(){
    this.banner = centeredDivWithId("100%", "banner");
    this.navigation = centeredDivWithId("100%", "navigation");
    this.headband = centeredDivWithId("100%", "headband");
    this.content = centeredDivWithId("100%", "content");
    this.footer = centeredDivWithId("95%", "footer");
    
    $("body").append(this.banner);
    $("body").append(separation());
    $("body").append(this.navigation);
    $("body").append(this.headband);
    $("body").append(separation());
    $("body").append(this.content);
    $("body").append(separation());
    $("body").append(this.footer);
    
    
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
        parenting(pageName, h1(name));
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
    * Sets an informations footer at the bottom of the web page.
    *
    * @param String message : the message to display in the footer.
    */
    this.setFooter = function(message){
        footer.append(message);
    }
    
    
    /**
    * Sets a navigation bar for the webpage.
    *
    * @param String color : the color of the navigation bar.
    * @param ...Tab tabs : the tabs of the navigation bar.
    */
    this.setNavigation = function(color, ...tabs){
        var nav = sizedDiv("100%");
        for(var i=0; i < tabs.length; i++){
            parenting(nav, tabs[i].createTab());
        }
        this.navigation.style.background = color;
        this.navigation.append(nav);
        
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
    * Unused for now.
    * Returns the on click function of the tab.
    */
    this.changeTab = function(){
        this.onClick();
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