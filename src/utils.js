function ItemList(name, ...items){
    this.container = document.createElement("ul");
    parenting(this.container, name);
    for(var i = 0; i < items.length; i++){
        var newItem = document.createElement("li");
        parenting(newItem, items[i]);
        parenting(this.container, newItem);
    }
    
    this.addItem = function(item){
        var newItem = document.createElement("li");
        parenting(newItem, item);
        parenting(this.container, newItem);
    }
    
    this.asElement = function(){
        return this.container;
    }
}

function PotterCloak(...rows){
    this.visibilities = new Array(rows.length);
    this.visibilities.fill(true);
    this.rows = new Array(rows.length);
    for(var i = 0; i < rows.length; i++){
        this.rows[i] = rows[i];
    }
    
    this.swapVisibilityOf = function(i){
        var vis = this.visibilities[i];
        this.rows[i].setVisibility(!vis);
        this.visibilities[i] = !vis;
        if(vis){
            this.rows[i].asElement().style.height = "0";
        }else{
            this.rows[i].asElement().style.height = "auto";
        }
    }
    
    this.swapAll = function(){
        for(var i = 0; i < this.rows.length; i++){
            this.swapVisibilityOf(i);
        }
    }
}