import Card from "./components/Card/index.js"; // TODO: Replace this with the correct import statement

let element;
function runOnLoad()
{
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    var newCard = new Card({question:"What is this?", answer:"Sample value provided"});
    element.appendChild(newCard.render());
}

window.addEventListener("DOMContentLoaded", runOnLoad);