var Instruments = ["gutiar", "drums", "piano", "bass", "flute"]; 
var Content = ""; 
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


