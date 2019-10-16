
var dogs_json = '[{"name":"Head tilt", "src":"image/headtilt.jpg"}, {"name":"Nala sits", "src":"image/sit.png"}, {"name":"Nala Stares", "src":"image/stare.jpg"}, {"name":"Nala stares up", "src":"image/mighty.jpg"}]';
var dogImg_array = JSON.parse(dogs_json);


window.onload = function() {
    document.getElementById('currentImg').src = this.dogImg_array[0].src;
}

function nextImage(element)
{
    var img = document.getElementById(element);
    console.log(img);
    for(var i = 0; i < dogImg_array.length;i++)
    {
        console.log(dogImg_array[i].src);
        console.log(img.src);
        
        if(i === dogImg_array.length - 1){
            document.getElementById(element).src = dogImg_array[0].src;
            break;
            }
        else {
            document.getElementById(element).src = dogImg_array[i+1].src;
            break;
            }
    }
    
}