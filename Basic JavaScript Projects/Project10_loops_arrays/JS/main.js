function let_Function() {
    var x = 22;
    {
        let x = 33;
    }
    document.getElementById("Constant").innerHTML = "<br>" + x; 
}