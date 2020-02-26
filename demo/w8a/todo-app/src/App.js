import React from 'react';
import logo from './logo.svg';
import './App.css';
import todoList from './todoList.json';


function TodoItem(props){
  return <p className="card" onClick={() => props.removeTask(props.id)}> {props.content}</p>
}

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      todoList,
      hideCompletedItems: false,

    }
    this.currentId=4;
  }

  

  addTask(e){
    console.log(this.refs.dropDown);
    let todoList = this.state.todoList;
    todoList.push(
      {"id": this.currentId, "completed": false, "priority": this.refs.dropDown.value, "content": this.refs.textContent.value}
      );
      this.currentId++;
      this.setState({todoList});
      console.log(this.refs.dropDown.value);
  }

  removeTask(id){
    console.log(id);
    let todoList=this.state.todoList;
    console.log(this.state.todoList);
    todoList=todoList.filter((v) => v.id !== id);
    console.log(this.state.todoList);

    this.setState({todoList});

  }

  render(){
    return (
      <React.Fragment>
        <label htmlFor="dropDown"><strong>priority</strong></label>
        <select name="dropDown" id="dropDown" ref="dropDown">
          <option value="1">Top</option>
          <option value="2">Mid</option>
          <option value="3">Bottom</option>
        </select>

        <input type="text" ref="textContent" />
        <input type="button" value="Add Task" onClick= {(e)=> this.addTask(e)} />
        <input ref="hideCheckbox" type="checkbox" id="hideCompletedItems" 
        name="hide" value="hideCompletedItems" 
        onChange= {(e)=> this.setState({ hideCompletedItems : e.target.checked})} 
          />
        <label htmlFor="hide"> ToDo List</label><br></br>
        
        {(this.state.hideCompletedItems ? this.state.todoList
        .filter((v) => !v.completed) : todoList)
        .map((v) => 
        <TodoItem priority={v.priority} id={v.id}  removeTask={(id) => this.removeTask(id)} content={v.content}  completed={v.completed} key={v.id} />)}
        </React.Fragment>
    );
  }
}
function App(props) {
  return(
    <TodoList />
  );
}

export default App;
