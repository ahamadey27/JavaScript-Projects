function search_Method() {
    const str = "hello this is going to be a long sentance and a good time" 
    const toSearch = str.search("time"); 
    document.getElementById("Search").innerHTML = toSearch; 
}