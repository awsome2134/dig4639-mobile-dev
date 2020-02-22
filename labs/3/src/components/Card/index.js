import React from "react";
import "./index.css";

class Card extends React.Component{
    render (){
        return(
            <div class="card">
                <h1>{this.props.content}</h1>
            </div>
        );
    }
}

export default Card;