function writeLines() {
    console.log("Eka rivi");
    alert("Eka ilmoitus");
}

window.onload = function() {
    var url = 'https://www.google.com/maps?q=' + 'Valtakatu 70' + 'Lappeenranta' + '&output=embed'
    document.getElementById("map").src = url;
}

function moveMap() {
    var address = document.getElementById("street").value;
    var city = document.getElementById("city").value;

    var url = 'https://www.google.com/maps?q=' + address + city + '&output=embed';

    console.log(address);
    console.log(city);

    document.getElementById("map").src = url;

}