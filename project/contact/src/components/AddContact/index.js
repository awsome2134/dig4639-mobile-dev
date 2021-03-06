import React from 'react';
import "./index.css";

class Add extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            added:{}
          };
          
          this.nameRef= React.createRef();
          this.numberRef = React.createRef();
    }

    getValue = (event) => {

        event.preventDefault();
    
        const name = this.nameRef.current.value;
        const number = this.numberRef.current.value;

        fetch("http://plato.mrl.ai:8080/contacts/add", {
            "method": "POST",
            headers: {
                API: "waite",
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            "body": JSON.stringify({
                "name": name,
                "number": number,
            })
        })
        .then((res) => res.json())
        .then((data) => this.setState({added: data.added}) )
        .catch(err =>{
            console.log(err);
        })
    }

    render() {
        return (
          <div>
            <form onSubmit={this.getValue}>
              <label htmlFor="name" className="labelclass">Name</label>
              <input type="text" name="name" className="signclass" placeholder="name" ref={this.nameRef} />

              <br />

              <label htmlFor="number" className="labelclass">Number</label>
              <input type="text" name="number" className="signclass" placeholder="(555) 555-55555" ref={this.numberRef} />

              <br />

              <input type="submit" className="buttonclassclass" value="SUBMIT"/>
            </form>
            <hr />
            <p>Added: <br/> {this.state.added.name} <br/> {this.state.added.number}</p>
          </div>
        );
      }
}

export default Add;
