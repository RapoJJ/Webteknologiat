//var ticketInfo_json = '[{"ticketPrice": 16.00,"saleAmount": {"underSeven": 1,"elderly": 0.5,"youngster": 0.5,"MTK": 0.15,"conscript": 0.5,"student": 0.45}}]';
//var ticketInfo_array = JSON.parse(ticketInfo_json);
//GET TICKET ARRAY FROM NODEJS SERVER
var ticketInfo_array;
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/ticketPrices/",
        datatype: "json",
        success: function (response) {
            ticketInfo_array = response;
        }
    })
});

var saleAmount;
var givenDiscounts;


class Person {
    constructor(name, email, age, isStudent, isMtkMember, isConscript) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.isStudent = isStudent;
        this.isMtkMember = isMtkMember;
        this.isConscript = isConscript;
    }

    calculatePrice(buyer) {

        //Ehto-viidakko
        if (buyer.age >= 65) {
            saleAmount = ticketInfo_array[0].saleAmount.elderly;
            givenDiscounts = "Over 65 years old";
        } else if (buyer.age < 7) {
            saleAmount = ticketInfo_array[0].saleAmount.underSeven;
            givenDiscounts = "Under 7 years old";
        } else if (buyer.age >= 7 && buyer.age <= 15) {
            saleAmount = ticketInfo_array[0].saleAmount.youngster;
            givenDiscounts = "Between 7 and 15 years old";
        } else {
            if (buyer.isStudent) {
                if (buyer.isMtkMember) {
                    saleAmount = ticketInfo_array[0].saleAmount.MTK + ticketInfo_array[0].saleAmount.student;
                    givenDiscounts = "Student and MTK member";
                } else {
                    saleAmount = ticketInfo_array[0].saleAmount.student;
                    givenDiscounts = "Student";
                }
            } else if (buyer.isConscript) {
                saleAmount = ticketInfo_array[0].saleAmount.conscript;
                givenDiscounts = "Conscript";
            } else if (buyer.isMtkMember) {
                saleAmount = ticketInfo_array[0].saleAmount.MTK;
                givenDiscounts = "MTK member";
            } else {
                saleAmount = 0;
                givenDiscounts = "No discounts";
            }
        }
        return ticketInfo_array[0].ticketPrice - ticketInfo_array[0].ticketPrice * saleAmount;
    }
}

function sendInfo() {
    ticketBuyer = new Person($('#name').val(), $('#email').val(), $('#age').val(),
        $('#student').prop("checked"), $('#mtk').prop("checked"), $('#conscript').prop("checked"));


    $('#ticketInfo').empty();
    $('#ticketInfo').fadeIn().css('display', 'inline-block');
    $('#ticketInfo').append('<p>Name:' + ticketBuyer.name + '</p>' +
        '<p>Email: ' + ticketBuyer.email + '</p>' +
        '<p>Age: ' + ticketBuyer.age + '</p>' +
        '<p>Ticket price: ' + ticketBuyer.calculatePrice(ticketBuyer).toFixed(2) + ' €</p>' +
        '<p>Given discounts: ' + givenDiscounts + '</p>' +
        '<input type="button" value="Buy ticket with this info" id="buyTicket"/>');

}

//CHECKBOX, disable others and empty them when clicked.
$("#conscript").on('click', function () {
    $("input.group1").prop("disabled", this.checked);
    $('input.group1').prop('checked', false);
});

$(".group1").on('click', function () {
    $("input.group2").prop("disabled", this.checked);
    $('input.group2').prop('checked', false);
})
