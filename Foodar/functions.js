//Displays banner

debugger;

var banner = document.getElementById("bannerInfo");

var close = document.getElementById("close")

var link = document.createElement("a");

var image = document.createElement("img");

link.href = "https://goremadepizza.com/"

image.src = "pizzaAd.jpg";

banner.appendChild(link);

image.id = "bannerImage";

link.appendChild(image);

function displayBanner() {
    banner.style.visibility = "visible";
}

function closeBanner() {
    banner.style.visibility = "hidden";
}

setTimeout(displayBanner, 5000);

var validZips = [43110, 43125, 90210];

var btn = document.getElementById("go");

btn.addEventListener("click", zipCheck);

function zipCheck() {
    var userZip = document.getElementById("zip").value;
    var displayMessage = document.getElementById("displayServiceArea");
    for (var i = 0; i < validZips.length; i++) {
        if (validZips[i] == userZip) {
            displayMessage.innerHTML = "We've got your area covered!";
            displayMessage.style.color = "green";
            break;
        }
        if (i == validZips.length - 1 && validZips[i] != userZip) {
            displayMessage.innerHTML = "Sorry, we haven't expanded to that area yet.";
            displayMessage.style.color = "red";
        }
    }
}