function showList() {
  let xhttp = new XMLHttpRequest();
  // console.log(xhttp)
  xhttp.onload = function () {
    if (this.status == 200) {
      let songs = JSON.parse(this.responseText);
      for (let song of songs) {
        document.getElementById("result").innerHTML += `
        <p>${song.title}</p>
        <p>${song.artist}</p>
        <p>${song.genre}</p>
        <p>${song.country}</p>
        <p>${song.year}</p>
        <br>
        <hr>
      `;
      }
    }
  };
  // Method, URL, ASYNC
  xhttp.open("GET", "songs.json", true);
  xhttp.send();
}

let btn = document.getElementById("btn");
btn.addEventListener("click", showList);
