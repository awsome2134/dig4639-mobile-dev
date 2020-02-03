class Task {
    constructor (props) {
        this.props = props;
        this.props.done= false;
        this.element = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type="checkbox";
        checkbox.addEventListener("change",this.inputChange);
        //checkbox.id="taskBox";
        this.element.appendChild(checkbox);
        let taskText = document.createElement("span");
        taskText.innerHTML = props.content;
        //taskText.id="";
        this.element.appendChild(taskText);
    }

    inputChanged(){
        console.log(this.element.innerHTML);
    }

    render() {
        return this.element;
    }   
}

export default Task;