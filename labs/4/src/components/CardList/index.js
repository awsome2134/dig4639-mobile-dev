import React from "react";
import Card from "../Card/index.js";
import cardList from "../../data.json";

class CardList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            cardList
        }
        this.currentId=0;
        this.card_List=this.addIds();
      }

      addIds(){
          let card_List= [];
          this.state.cardList.cards.forEach(value => {
              card_List.push({"id": this.currentId, "title": value.title, "content": value.content});
              this.currentId++;
          });
          this.setState(cardList);
          return card_List;
      }

      removeCard(id){
        let cardList=this.card_List;
        cardList=cardList.filter((v) => v.id !== id);
        this.card_List=cardList;
    
      }
      render(){
        return(
            <React.Fragment>
                {this.card_List.map((v) => 
                    <Card id={v.id}  title={v.title} removeCard={(id) => this.removeCard(id)} content={v.content}  key={v.id} />)}
            </React.Fragment>
        );
      }
}

export default CardList;