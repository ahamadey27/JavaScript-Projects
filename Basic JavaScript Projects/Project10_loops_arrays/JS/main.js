function greet(name) {
    return "Hello, " + name + "!";
}

function displayGreeting() {
    var name = "John"; // You can set the name here or get it from user input
    var greeting = greet(name);
    document.getElementById("return").innerHTML = greeting;
}