function showDateTime() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "datetime.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("datetime").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}