

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
    
    this.setHeadband = function(color){
        $("headband").empty();
        var head = sizedDiv("100%");
        this.headband.style.background = color;
        parenting(this.headband, head);
    }
    
    this.addContent = function(content){
        parenting(this.content, content);
    }
    
    this.setFooter = function(message){
        footer.append(message);
    }
    
    this.setNavigation = function(color, ...tabs){
        var nav = sizedDiv("100%");
        for(var i=0; i < tabs.length; i++){
            parenting(nav, tabs[i].createTab());
        }
        this.navigation.style.background = color;
        this.navigation.append(nav);
        
    }
}

function Tab(name, onClick){
    this.name = name;
    this.onClick = onClick;
    
    this.changeTab = function(){
        this.onClick();
    }
    
    this.getName = function(){
        return this.name;
    }
    
    this.createTab = function(){
        var element = clickableElement("div", this.name, function(){
            onClick();
        });
        element.className += "tab";
        return element;
    }
}