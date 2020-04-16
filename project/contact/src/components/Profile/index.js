import React from "react";
import "./index.css";

class You extends React.Component {

    constructor(props) {
      super(props);
  
      this.state={
          name: "",
          count: 0
      }
    }
  
    componentDidMount() {
  
      fetch("http://plato.mrl.ai:8080/profile", {
        "method": "GET",
        headers: {
          API: "waite"},
          "Content-Type": "application/json",
          "Accept": "application/json"
        })
      .then((res) => res.json())
      .then((data) => {
        this.setState({name: data.name, count: data.count});
      });
  
    }
  
    render() {
      return (
        <p>
            {this.state.name} <br/> {this.state.count}
        </p>
      );
    }
  }
  
  export default You;