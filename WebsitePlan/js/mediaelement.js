var dogs_json = '[{"name":"Head tilt", "src":"image/headtilt.jpg"}, {"name":"Nala sits", "src":"image/sit.png"}, {"name":"Nala Stares", "src":"image/stare.jpg"}, {"name":"Nala stares up", "src":"image/mighty.jpg"}]';
var dogImg_array = JSON.parse(dogs_json);
var localStorageKey = "index";

var imageIndex;
var imgAmount = dogImg_array.length;
var img = document.getElementById('currentImg');
var title = document.getElementById('imgtext');


window.onload = function () {
    this.imageIndex = 0;
    console.log(this.dogImg_array);
    document.getElementById('currentImg').src = this.dogImg_array[0].src;
    document.getElementById('imgtext').innerHTML = this.dogImg_array[0].name;
}

function nxtImg() {
    imageIndex++;
    if (imageIndex == imgAmount) {
        imageIndex = 0;
    }
    img.src = dogImg_array[imageIndex].src;
    title.innerHTML = dogImg_array[imageIndex].name;
    console.log(imageIndex)
}

function bckImg() {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = imgAmount - 1;
    }
    img.src = dogImg_array[imageIndex].src;
    title.innerHTML = dogImg_array[imageIndex].name;
    console.log(imageIndex);
}

var intervalId;

function autoplay() {
    if (intervalId != null) {
        clearInterval(intervalId);
        intervalId = null;
    }
    else {
        intervalId = setInterval(nxtImg, 2000);
    }
}

document.getElementById("play").addEventListener("click", function (e) {
    var target = e.target;

    target.classList.toggle("fa-pause");
    target.classList.toggle("fa-play");
}, false);