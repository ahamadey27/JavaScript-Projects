function constant_Function() {
    const computer = { type: "Desktop", brand: "Mac", color: "gray" }; 
    computer.price = "1000"; 
    computer.color = "pink"; 
    document.getElementById("Constant").innerHTML = "The color of the " +
        computer.type + " is " + computer.color + "."; 
}