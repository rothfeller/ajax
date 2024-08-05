let btn = document.getElementById("btn")
btn.addEventListener("click", showData)

function showData() {
    let xhttp = new XMLHttpRequest();
    // console.log(xhttp)
    xhttp.onload = function() {
        if (this.status == 200) {
            // console.log(this.responseText)
            document.getElementById("result").innerHTML = this.responseText;
        }
    }
    // Method, URL, ASYNC
    xhttp.open("GET", "example.txt", true) 
    xhttp.send();
}
