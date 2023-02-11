import logo from './logo.svg'
import React from 'react';
import FormInput from './componnents/FormInput';
import TodoItem from './componnents/TodoItem';
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Reading book",
      },
      {
        id: 2,
        title: "Workout training",
      }
    ]
  }
  DeleteTask = id =>{
    this.setState({
      todos :this.state.todos.filter(item => item.id != id)
    })
  }
  addTask =data =>{
    const id =this.state.todos.length;
    const newData = {
      id : id+1,
      title : data
    }
    this.setState({
      todos:[...this.state.todos, newData]
    })
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="app">
        <div className='logo'>
          <img src={logo} alt='logo'></img>
          <h3>Task List</h3>
        </div>
        <div className='list'>
          {todos.map(item =>
            <TodoItem key = {item.id} todo = {item} del = {this.DeleteTask}/>
          )}

        </div>
        <div className='input-form'>
          <FormInput add = {this.addTask}/>
        </div>


      </div>
    );

  }
}

export default App;
