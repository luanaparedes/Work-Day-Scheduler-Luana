$(document).ready(function () {
    let NowMoment = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = NowMoment;
    createPage()
   
})

function createPage(){
    console.log("running")
   // var container = document.getElementsByClassName('container')[0]
   // console.log(container)
   // for(let i=9; i < 18; i++){
  //      container.innerHTML+=
    //     `<div class="row">
    //     <div class="col-1 time-block">${i}:00</div>
    //     <textarea class="col-10 text-area"></textarea>
    //     <button class="col-1 saveBtn">Save Task</button>
    //    </div>`
  //  }
    addSaveFunctionality()
  //  blockColors();
}


//function blockColors() {

const timeBlocks = document.querySelectorAll('.time-block');
let presentHour = moment().format("hh");

$('.timeBlock').each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > presentHour && val < presentHour+6){
        $(this).css('background-color','Blue');
    }else if(val < presentHour && val > presentHour-6){
        $(this).css('background-color','Red');
    }else if(val === presentHour){
        $(this).css('background-color','Green');
    }else{
        $(this).css('background-color','White');
    }
});
// for (let timeBlock of timeBlocks) {
    
    
//     const timeDisplay = parseInt(timeBlock.getAttribute('time-block'));
    
//     if (presentHour == timeDisplay) {

//     $("textarea").addClass("present");
//     $("textarea").children(".description").addClass("white-text");
    
// } else if (presentHour == timeBlock) {
//     $("textarea").removeClass("present");
//     $("textarea").addClass("future");
    
// } else if (presentHour > timeBlock) {
//     $("textarea").removeClass("future");
//     $("textarea").addClass("past");
//     }
    
// }
// console.log(timeBlocks)
// }




function addSaveFunctionality(){
    var buttons = document.getElementsByClassName("saveBtn")
    
    $(buttons).on("click", function () {
        var task = document.getElementsByClassName("text-area");
        localStorage.setItem(presentHour, task);
        console.log("task")
    });
   //console.log(task)
}
