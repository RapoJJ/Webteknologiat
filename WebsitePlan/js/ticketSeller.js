var ticketInfo_json = '[{"ticketPrice": 16.00,"saleAmount": {"underSeven": 100,"elderly": 50,"youngster": 50,"MTK": 15,"conscript": 50,"student": 45}}]';

var ticketInfo_array = JSON.parse(ticketInfo_json);


class Person {
    constructor (name, email, age, isStudent, isMtkMember, isConscript) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.isStudent = isStudent;
        this.isMtkMember = isMtkMember;
        this.isConscript = isConscript;
    }
}




function sendInfo() {
    ticketBuyer = new Person($('#name').val(), $('#email').val(), $('#age').val(), true, false, true);

    console.log($('#student').prop("checked"));

    console.log(this.ticketInfo_array[0].saleAmount.underSeven);    
}


$("#conscript").on('click', function() {
    $("input.group1").prop("disabled", this.checked);
});

$(".group1").on('click', function() {
    $("input.group2").prop("disabled", this.checked);
})