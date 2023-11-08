function Full_Sentance(){
    var S1 = "I'm going to the store ";
    var S2 = "to but some eggs for a cake. ";
    var S3 = "I really hope I don't mess this one up! ";
    var S4 = "People are counting on me.";
    var Complete_Sentance = S1.concat(S2, S3, S4); 
    document.getElementById("Sentance_Time").innerHTML = Complete_Sentance;
}