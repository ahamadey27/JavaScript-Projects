function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value; 
    var Animal_String = " is a great animal!"; 
    switch (Animals) {
        case "Turtle":
            Animal_Output = "Turtle" + Animal_String;
            break;
        case "Cat":
            Animal_Output = "Cat" + Animal_String;
            break;
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
            break;
        case "Fish":
            Animal_Output = "Fish" + Animal_String;
            break;
        case "Snake":
            Animal_Output = "Snake" + Animal_String;
            break;
        default:
            Animal_Output = "Please enter animal exactly as written in the list.";
    }
    document.getElementById("Output").innerHTML = Animal_Output; 
}