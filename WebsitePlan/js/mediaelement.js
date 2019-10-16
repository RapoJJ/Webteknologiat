
var dogs_json = '[{"name":"Head tilt", "src":"image/headtilt.jpg"}, {"name":"Nala sits", "src":"image/sit.png"}, {"name":"Nala Stares", "src":"image/stare.jpg"}, {"name":"Nala stares up", "src":"image/mighty.jpg"}]';
var dogImg_array = JSON.parse(dogs_json);


window.onload = function() {
    console.log(this.dogImg_array);
    document.getElementById('currentImg').src = this.dogImg_array[0].src;
    document.getElementById('imgtitle').innerHTML = this.dogImg_array[0].name;
}

var imageIndex = 0;
var imgAmount = dogImg_array.length;
var img = document.getElementById('currentImg');
var title = document.getElementById('imgtitle');

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
    img.src= dogImg_array[imageIndex].src;
    title.innerHTML = dogImg_array[imageIndex].name;
    console.log(imageIndex);
}

function autoplay() {
    var intervalId = setInterval(nxtImg, 2000);
}
