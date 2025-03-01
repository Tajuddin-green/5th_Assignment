document.getElementById("clear-history").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("activity-wall").innerHTML = "";
});
