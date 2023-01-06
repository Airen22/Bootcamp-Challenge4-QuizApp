var ol = document.querySelector("#scores-list");

ol.innerHTML = "";
var li = document.createElement("li");
ol.appendChild(li);

li.textContent = localStorage.getItem("Recorded Score") + " - " + localStorage.getItem("Names");



