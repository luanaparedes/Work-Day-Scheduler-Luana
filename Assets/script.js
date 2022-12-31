$(document).ready(function () {
    let NowMoment = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = NowMoment;
    createPage()
   
})

function createPage(){
    console.log("running")

    addSaveFunctionality()
  //  blockColors();
}


//function blockColors() {

const rows = document.getElementsByClassName("text-area");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}
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
        localStorage.setItem('todos', JSON.stringify(task));
        console.log("task")
    });
    let todos = [];
const todosJson = localStorage.getItem('todos');
if(todosJson){
    todos = JSON.parse(todosJson);
}
   //console.log(task)
}
