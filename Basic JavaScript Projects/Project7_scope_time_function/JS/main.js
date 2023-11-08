function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Booze = "You can drink!";
    }
    else {
        Booze = "Wait until you're 21!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Booze;
}