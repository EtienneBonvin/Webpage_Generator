/**
* Create a clickable element with a given type.
*
* @param String elementType : the type of the element to create.
* @param String textToDisplay : the text to display on the element.
* @param function onClick : the function to execute when clicking on the created element.
*
* @return HTML Element : an element with the given attributes.
*/
function clickableElement(elementType, textToDisplay, onClick){
    var element = document.createElement(elementType);
    element.innerHTML = textToDisplay;
    element.addEventListener("click", onClick);
    element.style.cursor = "pointer";
    return element;
}

/**
* Create a division with the given with (in percent of the screen's width).
*
* @param String width : the width of the division to create (e.g "50%").
*
* @return HTML element : a centered division with the given width.
*/
function centeredDivWithId(width, id){
    var element = document.createElement("div");
    element.style.textAlign = "left";
	element.style.width = width;
	element.style.margin = "0 auto";
    element.id = id;
    return element;
}


/**
* Create a division with the given width (in percent of the screen's width).
*
* @param String width : the width of the division to create (e.g "50%").
*
* @return HTML element : a division with the given width.
*/
function sizedDiv(width){
    var element = document.createElement("div");
    element.style.textAlign = "left";
	element.style.width = width;
    element.style.display = "inline-block";
    element.style.verticalAlign = "text-top";
    return element;
}

/**
* Create a parent / child relation between two HTML elements.
*
* @param HTMl element parent : the parent HTML element.
* @param HTML element child : the child HTML element.
*/
function parenting(parent, child){
    parent.appendChild(child);
}

/**
* Create an HTML paragraph element.
*
* @param String text : the text to be displayed in the paragraph.
*
* @return HTMl element : a paragraph with the given text.
*/
function paragraph(text){
    var element = document.createElement("p");
    element.innerHTML = text;
    return element;
}

/**
* Create an HTML image element.
*
* @param String src : the path of the image.
* @param String id : the id to assign to the image.
*
* @return an HTML image element.
*/
function image(src, id){
    var element = document.createElement("img");
    element.src = src;
    element.id = id;
    return element;
}


/**
* Create a header H1.
*
* @param String text : the text written in the header.
*
* @return a HTML element representing a header H1.
*/
function h1(text){
    var element = document.createElement("h1");
    element.innerHTML = text;
    return element;
}


/**
* Create a header H2.
*
* @param String text : the text written in the header.
*
* @return a HTML element representing a header H2.
*/
function h2(text){
    var element = document.createElement("h2");
    element.innerHTML = text;
    return element;
}


/**
* Creates a little white band to separate elements.
*
* @return and HTML div element representing a white separation.
*/
function separation(){
    var element = makeElement("div", " ", "separation");
    return element;
}

/**
* Create an element with a specific type, text and class.
*
* @param String elementType : the type of the element to create.
* @param String text : the text to be displayed in the element.
* @param String className : the class to attribute to the element.
*
* @return HTML element : an element with the given specifications.
*/
function makeElement(elementType, text, className){
    var element = document.createElement(elementType);
    element.innerHTML = text;
    element.className += className;
    return element;
}