import React from 'react';

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
              <input type="number" ref={this.posRef} />
              <input type="submit" value="SUBMIT"/>
            </form>
            <hr />
            <p>Removed: <br/> {this.state.removed.name} <br/> {this.state.removed.number}</p>
          </div>
        );
      }
}

export default Delete;