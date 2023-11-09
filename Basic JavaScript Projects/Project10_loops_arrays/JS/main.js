function call_Loop() {
    var Digit = "";
    var X = 2;
    while (X < 22) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit; 
}