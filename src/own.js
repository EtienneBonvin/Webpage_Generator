function code(text){
    var pre = document.createElement("pre");
    var codeSpace = document.createElement("code");
    codeSpace.innerHTML = text;
    parenting(pre, codeSpace);
    return pre;
}


function CodeBlock(){
    this.container = document.createElement("pre");
    
    this.addCode = function(text){
        var element = document.createElement("code");
        element.innerHTML = text+"\n";
        parenting(this.container, element);
    }
    
    this.asElement = function(){
        return this.container;
    }
}


function doc(title, description, code){
    var element = sizedDiv("100%");
    parenting(element, title);
    parenting(element, description);
    parenting(element, code);
    return element;
}