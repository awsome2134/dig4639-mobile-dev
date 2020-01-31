class Adder{
    constructor(props){
        this.props=props;
    }

    sum(a, b){
        if (typeof a != "undefined" && typeof b != "undefined"){
            return a + b;
        }
        else{
            return null;
        }
    }

    render(){
        return `<p>The sum of ${this.props.a} and ${this.props.b} is ${this.sum(this.props.a, this.props.b)}</p>`
    }
}

module.exports= Adder;