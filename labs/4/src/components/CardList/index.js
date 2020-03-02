import React from "react";
import Card from "../Card/index.js";
import cardList from "../../data.json";

class CardList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            cardList: cardList.cards
        }
        this.currentId=0;
        this.addIds();
      }

      addIds(){
          let cardList=this.state.cardList.map((v, i) => v.id=i );
          this.setState({cardList});
      }

      removeCard(id){
        let cardList=this.state.cardList;
        cardList=cardList.filter((v) => v.id !== id);
        this.setState({cardList});
    
      }
      render(){
        return(
            <React.Fragment>
                {this.state.cardList.map((v) => 
                    <Card id={v.id}  title={v.title} removeCard={(id) => this.removeCard(id)} content={v.content}  key={v.id} />)}
            </React.Fragment>
        );
      }
}

export default CardList;