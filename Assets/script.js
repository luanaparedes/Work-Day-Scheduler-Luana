$(document).ready(function () {
    let NowMoment = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = NowMoment;
    createPage()
   
})

function createPage(){
    console.log("running");

    addSaveFunctionality();
  
}




const rows = document.getElementsByClassName("text-area");
let currentHour = parseInt(moment().format('H'));

function loadTodos(id) {
  var task = localStorage.getItem(id);
  $("#" + id).val(task);
};

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  loadTodos(rowHour);
  console.log(rowHour, currentHour);
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly temp fix
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if (currentHour < rowHour) {
      setColor(row, "green");
    } else {
      setColor(row, "lightgrey");
    }
    console.log(currentHour);
  }
});


function setColor(element, color) {
  element.style.backgroundColor = color;
  console.log(element);
}

// ssaving notes and callin them on page reload
function addSaveFunctionality(){
    
    $(".saveBtn").on("click", function () {
        var task = $(this).siblings(".text-area").val();
        var id = $(this).siblings(".text-area").attr("id");
        localStorage.setItem(id, task);
        console.log(task);
    });
    let todos = [];
const todosJson = localStorage.getItem('todos');
if(todosJson){
    todos = JSON.parse(todosJson);
}
}
