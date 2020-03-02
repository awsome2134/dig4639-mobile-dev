import React from "react";
import "./index.css";

class Card extends React.Component{
    render (){
        return(
            <div className="card">
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
                <button className="close" value="close" onClick={() => this.props.removeCard(this.props.id)}>Close</button>
            </div>
        );
    }
}

export default Card;