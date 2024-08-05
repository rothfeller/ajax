let form = document.getElementById("form");
// Add song
function addSong(e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let artist = document.getElementById("artist").value;
  let genre = document.getElementById("genre").value;
  let country = document.getElementById("country").value;
  let year = document.getElementById("year").value;
  let params = `title=${title}&artist=${artist}&genre=${genre}&country=${country}&year=${year}`;

  let xhttp = new XMLHttpRequest();
  // Method, URL, ASYNC
  xhttp.open("POST", "process.php");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
      showUsers();
      // Refreshing the inputs after submit
      document.getElementById("title").value = "";
      document.getElementById("artist").value = "";
      document.getElementById("genre").value = "";
      document.getElementById("country").value = "";
      document.getElementById("year").value = "";
      // document.getElementById("result").innerHTML = this.responseText;
    }
  };
  xhttp.send(params);
}
