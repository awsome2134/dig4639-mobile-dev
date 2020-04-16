import React from "react";
import "./index.css";
class Show extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {contacts: []};
  
    }
  
    componentDidMount() {
  
      fetch("http://plato.mrl.ai:8080/contacts", {
        "method": "GET",
        headers: {
          API: "waite"},
          "Content-Type": "application/json",
          "Accept": "application/json"
        })
      .then((res) => res.json())
      .then((data) => {
        this.setState({contacts: data.contacts});
      });
  
    }
  
    render() {
      return (
        <div>
         {
           this.state.contacts.map((value, index) => {
             return <p className="show" key={index}>{value.name}<br/>{value.number}</p>;
           })
         }
        </div>
      );
    }
  }
  
  export default Show;