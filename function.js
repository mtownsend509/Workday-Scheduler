var saveButton = document.querySelector(".container");
var currentDay = document.querySelector("#currentDay");

var nineFill = document.querySelector("#NINE").children[1];
var tenFill = document.querySelector("#TEN").children[1];
var elevenFill = document.querySelector("#ELEVEN").children[1];
var twelveFill = document.querySelector("#TWELVE").children[1];
var oneFill = document.querySelector("#ONE").children[1];
var twoFill = document.querySelector("#TWO").children[1];
var threeFill = document.querySelector("#THREE").children[1];
var fourFill = document.querySelector("#FOUR").children[1];
var fiveFill = document.querySelector("#FIVE").children[1];


currentDay.textContent = moment().format("dddd, MMM Do h:mm:ss")

//constant update to time
setInterval( function() {
    currentDay.textContent = moment().format("dddd, MMM Do h:mm:ss")
    for (i=0; i<9; i++) {

    }
},1000)

saveButton.addEventListener("click", Save);


function colorSet() {
    for (i=0; i<9; i++) {

        if (parseInt(saveButton.children[i].getAttribute("data-number")) > (parseInt(moment().format("HH")))) {
            saveButton.children[i].children[1].classList.replace("past", "future");
        } else if (parseInt(saveButton.children[i].getAttribute("data-number")) == parseInt(moment().format("HH"))) {
            saveButton.children[i].children[1].classList.replace("past", "present");
        } else {
            saveButton.children[i].children[1].classList.replace("present", "past");
            saveButton.children[i].children[1].classList.replace("future", "past");
        }
    }
}

colorSet()

function Fill() {
    nineFill.value = JSON.parse(localStorage.getItem("nine"));
    tenFill.value = JSON.parse(localStorage.getItem("ten"));
    elevenFill.value = JSON.parse(localStorage.getItem("eleven"));
    twelveFill.value = JSON.parse(localStorage.getItem("twelve"));
    oneFill.value = JSON.parse(localStorage.getItem("one"));
    twoFill.value = JSON.parse(localStorage.getItem("two"));
    threeFill.value = JSON.parse(localStorage.getItem("three"));
    fourFill.value = JSON.parse(localStorage.getItem("four"));
    fiveFill.value = JSON.parse(localStorage.getItem("five"));
}

Fill()

function Save(event) {
    if (event.target.textContent == "Save") {
        console.log(event.currentTarget);
        var Text = event.target.parentNode.children[1].value;
        console.log(Text);
        if(event.target.parentNode.id == "NINE") {
            localStorage.setItem("nine", JSON.stringify(Text))
        } else if (event.target.parentNode.id == "TEN") {
            localStorage.setItem("ten", JSON.stringify(Text))
        } else if (event.target.parentNode.id == "ELEVEN") {
            localStorage.setItem("eleven", JSON.stringify(Text))
        } else if (event.target.parentNode.id == "TWELVE") {
            localStorage.setItem("twelve", JSON.stringify(Text))
        } else if (event.target.parentNode.id == "ONE") {
            localStorage.setItem("one", JSON.stringify(Text))
        } else if (event.target.parentNode.id == "TWO") {
            localStorage.setItem("two", JSON.stringify(Text))
        } else if (event.target.parentNode.id == "THREE") {
            localStorage.setItem("three", JSON.stringify(Text))
        } else if (event.target.parentNode.id == "FOUR") {
            localStorage.setItem("four", JSON.stringify(Text))
        } else {
            localStorage.setItem("five", JSON.stringify(Text))
        }
    }
}
