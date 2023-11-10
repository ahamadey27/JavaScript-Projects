let guitar = {
    make: "Fender ",  //USE COMAS and COLONS HERE INSEAD OF SEMICOLONS EQUALS SIGNS
    model: "Jazzmaster ", 
    year: "1990 ", 
    color: "Sunburst ", 
    description: function () {
        return "This guitar is a " + this.make + this.model +
            this.year + this.color;
    }  
}
function displayGuitarInfo() {
    var info = guitar.description();
    document.getElementById("guitar_info").innerHTML = info;
}
