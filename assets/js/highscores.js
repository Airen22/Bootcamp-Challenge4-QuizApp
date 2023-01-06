var ol = document.querySelector("#scores-list");

console.log(JSON.stringify(localStorage.getItem("Scores")))

ol.innerHTML = "";
var li = document.createElement("li");
ol.appendChild(li);

li.textContent = localStorage.getItem("Scores");



