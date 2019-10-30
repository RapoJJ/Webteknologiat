var dogs_json = '[{"name":"Head tilt", "src":"image/headtilt.jpg"}, {"name":"Nala sits", "src":"image/sit.png"}, {"name":"Nala Stares", "src":"image/stare.jpg"}, {"name":"Nala stares up", "src":"image/mighty.jpg"}]';
var dogImg_array = JSON.parse(dogs_json);
var savedI = "index";

var imageIndex;
var imgAmount = dogImg_array.length;
var img = document.getElementById('currentImg');
var title = document.getElementById('imgtext');


window.onload = function () {
    this.imageIndex = localStorage.getItem(savedI);

    if (this.imageIndex == null) {
        this.imageIndex = 0;
    }

    console.log(this.dogImg_array);
    document.getElementById('currentImg').src = this.dogImg_array[this.imageIndex].src;
    document.getElementById('imgtext').innerHTML = this.dogImg_array[this.imageIndex].name;
}

function nxtImg() {
    imageIndex++;
    if (imageIndex == imgAmount) {
        imageIndex = 0;
    }
    localStorage.setItem(savedI, imageIndex);
    //img.src = dogImg_array[imageIndex].src;
    //title.innerHTML = dogImg_array[imageIndex].name;
    console.log(imageIndex)

    $("#currentImg").fadeTo(500, 0.5, function() {
        $("#currentImg").attr('src', dogImg_array[imageIndex].src);
        $("#imgtext").html(dogImg_array[imageIndex].name);
    }).fadeTo(1000, 1);
}

function bckImg() {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = imgAmount - 1;
    }
    localStorage.setItem(savedI, imageIndex);
    console.log(savedI);
    //img.src = dogImg_array[imageIndex].src;
    //title.innerHTML = dogImg_array[imageIndex].name;
    console.log(imageIndex);

    $("#currentImg").fadeTo(500, 0.5, function() {
        $("#currentImg").attr('src', dogImg_array[imageIndex].src);
        $("#imgtext").html(dogImg_array[imageIndex].name);
    }).fadeTo(1000, 1);
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


$("#changeList").click(function() {
    console.log("something happens")
    $(".grid").removeClass("grid").addClass("list");
});

$("#changeGrid").click(function() {
    console.log("happening");
    $(".list").removeClass("list").addClass("grid");
})