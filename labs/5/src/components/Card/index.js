import React from "react";
import "./index.css";

class Card extends React.Component{
    render (){
        console.log(this.props);
        return(
            <div className="card">
                <h3>{this.props.name}</h3>
                <h4>{this.props.temp} {this.props.units}</h4>
                <p>{this.props.forecast}</p>
            </div>
        );
    }
}

export default Card;