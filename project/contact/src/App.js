import React from 'react';
import AddContact from "./components/AddContact";
import ShowContact from "./components/ShowContact";
import DeleteContact from "./components/DeleteContact";
import Profile from "./components/Profile";

class App extends React.Component{

  constructor(props){
    super(props);
    this.changeTask = this.changeTask.bind(this);
    this.state={"view":""};
  }

  changeTask(selection){
    this.setState({"view": selection});
  }

  render(){
    return(
      <div>
        <button onClick={() => this.changeTask()}>Home</button>
        <button onClick={() => this.changeTask("Add")}>Add Contact</button>
        <button onClick={() => this.changeTask("Delete")}>Delete Contacts</button>
        <button onClick={() => this.changeTask("Last")}>Total</button>
        <div id= "showingArea">
          { this.state.view === "Add" ?
            <AddContact></AddContact>
          : this.state.view === "Delete" ?
            <DeleteContact></DeleteContact>
          : this.state.view === "Last" ?
            <Profile></Profile>
          : <ShowContact></ShowContact>
          }
        </div>
      </div>
    );
  }
}

export default App;

