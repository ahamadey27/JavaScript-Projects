function get_Date() {
    if (new Date().getHours(22) < 18) {
        document.getElementById("Greeting").innerHTML = "How are you Today?";
    }
    }