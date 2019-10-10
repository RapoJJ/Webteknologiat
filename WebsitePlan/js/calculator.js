$(function () {
    console.log("ready!");
    let randNr = getRandom(1, 10);

    $("#firstNumber").val(randNr);
    console.log(randNr);

    randNr = getRandom(1, 10);
    $("#secondNumber").val(randNr);
    console.log(randNr);

    $("#dialogbox").dialog({
        autoOpen: false
    });

    $("#dialogboxButton").dialog({
        autoOpen: false
    });
});

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor((Math.random() * max) + min);
}

function decNr(id) {
    var nr = document.getElementById(id).value;
    if (nr <= 1) {
        $("#dialogboxButton").dialog("open");
    }
    else {
        document.getElementById(id).value = --nr;
    }
}

function incrNr(id) {
    var nr = document.getElementById(id).value;
    if (nr > 9) {
        $("#dialogboxButton").dialog("open");
    }
    else {
        document.getElementById(id).value = ++nr;
    }
}

$("#firstNumber").change(function () {
    let value = $("#firstNumber").val();
    if (value = undefined || value < 1 || value > 10) {
        $("#dialogbox").dialog("open");
    }
});


function operate() {
    var firstNr = document.getElementById("firstNumber").value
    var secondNr = document.getElementById("secondNumber").value;
    var select = document.getElementById("select").value;
    switch (select) {
        case "0":
            console.log(parseInt(firstNr) + parseInt(secondNr));
            document.getElementById("answer").value = parseInt(firstNr) + parseInt(secondNr);
            break;
        case "1":
            console.log(firstNr - secondNr);
            document.getElementById("answer").value = firstNr - secondNr;
            break;
        case "2":
            console.log(firstNr / secondNr);
            document.getElementById("answer").value = firstNr / secondNr;
            break;
        case "3":
            console.log(firstNr * secondNr);
            document.getElementById("answer").value = firstNr * secondNr;
            break;
        default:
            console.log("Something broke!");
            break;
    }

}