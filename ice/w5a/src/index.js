<<<<<<< HEAD
import Task from "./components/Task"
let element;
let inputElement;

=======
import Task from "./components/Task/index.js"
let element;
let input;
>>>>>>> 46b90aafffc8bfc39bdb4e5bfc9a2298d3dcd03b
function runOnLoad()
{
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    input = document.getElementById("taskText");
    // Handle adding a new task
    var addTaskButton = document.getElementById("addTask");
    inputElement = document.getElementById("taskText");
    addTaskButton.addEventListener("click", onClick);
}

function onClick() {
    console.log("clicked!");
    let newTask = new Task ({
        content:inputElement.value
    });
    element.appendChild(newTask.render());
}

/*function onCLick1(){
    let checkbox=document.getElementById("taskBox");
    let text= document.getElementById("");
    if(checkbox.innerHTML== true){
        text.styles.background-color= "green";
    }
}*/

window.addEventListener("DOMContentLoaded", runOnLoad);