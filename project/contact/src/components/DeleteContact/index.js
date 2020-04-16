import React from 'react';
import "./index.css";

class Delete extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            removed:{}
          };
          
          this.posRef= React.createRef();
    }

    getValue = (event) => {

        event.preventDefault();
    
        const position = this.posRef.current.value;
        console.log(position);

        fetch("http://plato.mrl.ai:8080/contacts/remove", {
            "method": "POST",
            headers: {
                API: "waite",
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            "body": JSON.stringify({
                "position": position
            })
        })
        .then((res) => res.json())
        .then((data) => this.setState({removed: data.removed}) )
        .catch(err =>{
            console.log(err);
        })
    }

    render() {
        return (
          <div>
            <form onSubmit={this.getValue}>
              <label className="labelclass" htmlFor="number">Position</label>
              <input type="number" className="signclass" placeholder="0" ref={this.posRef} />

              <br />

              <input className="buttonclass" type="submit" value="SUBMIT"/>
            </form>
            <hr />
            <p>Removed: <br/> {this.state.removed.name} <br/> {this.state.removed.number}</p>
          </div>
        );
      }
}

export default Delete;