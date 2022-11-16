$(document).ready(function () {
    let NowMoment = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = NowMoment;
    let currentHour = moment().format("HH");
    createPage()
   
})

function createPage(){
    console.log("running")
    var container = document.getElementsByClassName('container')[0]
    console.log(container)
    for(let i=9; i < 18; i++){
        container.innerHTML+=
        `<div class="row">
        <div class="col-1 time-block">${i}:00</div>
        <textarea class="col-10 text-area"></textarea>
        <button class="col-1 saveBtn">Save Task</button>
       </div>`
    }
    addSaveFunctionality()
}

function blockColors() {

var presentHour = moment().format("HH:mm");

var timeBlock = parseInt($(this).attr("id").split("time-block")[1]);
 
  if (presentHour < timeBlock) {

    $("textarea").addClass("present");
    $("textarea").children(".description").addClass("white-text");
    
} else if (presentHour == timeBlock) {
    $("textarea").removeClass("present");
    $("textarea").addClass("future");
    
} else if (presentHour > timeBlock) {
    $("textarea").removeClass("future");
    $("textarea").addClass("past");
    }
    console.log(timeBlock);
}




function addSaveFunctionality(){
    var buttons = document.getElementsByClassName("saveBtn")
    
    $(buttons).on("click", function () {
        var task = document.getElementsByClassName("text-area");
        localStorage.setItem(presentHour, task);
        console.log("task")
    });
   //console.log(task)
}
