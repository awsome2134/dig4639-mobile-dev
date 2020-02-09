import "./index.css"

class Card {
    constructor(props) {
        this.props = props;

        this.element= document.createElement("div");

        let writing=document.createElement("h1");
        writing.id="text";
        this.onClick=this.onClick.bind(this);
        writing.addEventListener("click", this.onClick);
        this.element.appendChild(writing);
        writing.innerHTML=this.props.question;

        console.log(this);
    }
    onClick(e) {
        console.log(this);
        let text=document.getElementById("text");
        if(this.props.question==text.innerHTML){
            text.innerHTML=this.props.answer;
        }else{
            text.innerHTML=this.props.question;
        }
        
        
    }

    render() {
        return this.element;
    }
}

export default Card;