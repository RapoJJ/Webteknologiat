window.onload = function() {
    //var firstNr = Math.floor((Math.random() * 10) + 1);
    //var secondNr = Math.floor((Math.random() * 10) + 1);

    document.getElementById("firstNumber").value = this.getRandom(1,10);
    document.getElementById("secondNumber").value = this.getRandom(1,10);
}

function getRandom (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor((Math.random() * max) + min);
}

class Calculator {
    constructor(firstNr, secondNr, operator) {
        this.firstNr = firstNr;
        this.secondNr = secondNr;
        this.operator = operator;
    }

    
}

function decreaseFirstNr() {
    var nr = document.getElementById("firstNumber").value;
    document.getElementById("firstNumber").value = --nr;
}

function increaseFirstNr() {
    var nr = document.getElementById("firstNumber").value;
    document.getElementById("firstNumber").value = ++nr;
}

function increaseSecondNr() {
    var nr = document.getElementById("secondNumber").value;
    document.getElementById("secondNumber").value = ++nr;
}

function decreaseSecondNr() {
    var nr = document.getElementById("secondNumber").value;
    document.getElementById("secondNumber").value = --nr;
}

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