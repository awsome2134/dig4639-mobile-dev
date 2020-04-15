import React from "react";

class Show extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {contacts: []};
  
    }
  
    componentDidMount() {
  
      fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "waite"}})
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
             return <p key={index}>{value.name}<br/>{value.number}</p>;
           })
         }
        </div>
      );
    }
  }
  
  export default Show;