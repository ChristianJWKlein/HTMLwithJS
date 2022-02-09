document.getElementById("second-heading").innerHTML = "Aloha Amigos";

document.getElementById("get-data");

const getDataButton = document.getElementById("get-data");
getDataButton.addEventListener("click", () => {
  console.log("testing here");

  function displayData(allbeers) {
    document.querySelector("pre").innerHTML = JSON.stringify(allbeers, null, 2);
  }

  fetch("https://api.sampleapis.com/beers/ale")
    .then((data) => data.json())
    .then((beers) => displayData(beers))
    .catch((err) => console.log(err));
});

showAlert = () => {
  alert("End Learning Turotorial");
};

const alertBtn = document.getElementById("show-alert-btn");
alertBtn.addEventListener("click", showAlert);
