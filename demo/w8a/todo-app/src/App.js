import React from 'react';
import logo from './logo.svg';
import './App.css';

let todoList=[
  {content: "Task 1", prioity: 2, completed: true},
  {content: "Task 2", prioity: 1, completed: true},
  {content: "Task 3", prioity: 3, completed: false}
]


function TodoItem(props){
  return <p>{props.content}</p>
}
function App() {
  const todoListFiltered=todoList.filter((value) => value.completed)
  let todoArray=todoListFiltered.map(
    (value) => <TodoItem content={value.content} />
  )

  return (
    <div >
      {/* <TodoItem content="Item1"/>
      <TodoItem content="Item2"/>
      <TodoItem content="Item3"/> */}
      {todoArray}
      {todoList.filter((v) => v.completed).map(
        (v) => <TodoItem priority={v.priority} content={v.content}  completed={v.completed}/>)}
    </div>
  );
}

export default App;
