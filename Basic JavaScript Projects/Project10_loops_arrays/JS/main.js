function array_Function() {
    var Game_State = [];
    Game_State[0] = "still";
    Game_State[1] = "walking";
    Game_State[2] = "fast walking"; 
    Game_State[3] = "running"; 
    Game_State[4] = "dead";
    document.getElementById("Array").innerHTML = "In the end of the game, the character is " + Game_State[4] + "."; 

}

//Index is array number and value is what the array equals