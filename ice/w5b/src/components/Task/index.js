import "./index.css"

class Task {
    constructor(props) {
        this.props = props;
        this.element = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        this.onClick = this.onClick.bind(this);
        checkbox.addEventListener("change",this.onClick);

        this.element.appendChild(checkbox);
        let span = document.createElement("span");
        this.element.appendChild(span);
        span.innerHTML = this.props.content;
        this.element.className = "task";

        let button = document.createElement("button");
        button.id="deleteTask";
        button.innerHTML="Delete";
        //button.addEventListener("click", this.remove);
        this.element.appendChild(button);
        
    }
    onClick(e) {
        console.log(this);
        console.log(e.target);
        console.log(e.target.checked)
        this.props.done=e.target.checked;
        console.log(this.props.done);
    }

    remove(){
        this.element.remove();
    }

    render() {
        return this.element;
    }
}

export default Task;