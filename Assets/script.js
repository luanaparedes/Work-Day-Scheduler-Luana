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
    blockColors()
}

function blockColors(){

   for (var i = 0; i < time; i++) {

    var presentHour = moment().format("HH:mm");
    var timeBlock = document.getElementsByClassName('time-block')[i].innerHTML;
    var time = document.getElementsByClassName('time-block').length;

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

}

function addSaveFunctionality(){
    var buttons = document.getElementsByClassName("saveBtn")
    
    $(buttons).on("click", function () {
        var task = $('.text-area').val();
        localStorage.setItem(presentHour, task);
        console.log("task")
    });
   // console.log(task)
}
