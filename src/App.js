import logo from './logo.svg'
import React from 'react';
import FormInput from './componnents/FormInput';
import TodoItem from './componnents/TodoItem';
import './App.css';
import EditModal from './componnents/EditModal';
import DeleteModal from './componnents/DeleteModal';

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
    ],
    isEdit: false,
    editData: {
      id: "",
      title: ""
    },
    isDelete: false

  }

  DeleteTask = () => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== this.state.todos.id)
    })
  }

  openDelete = (id, data) => {
    this.setState({
      isDelete: true,
      DeleteData: {
        id,
        title: data
      }
    })
  }

  closeDelete = () => {
    this.setState({
      isDelete: false
    })
  }
  setTitle = e => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value
      }
    })
  }

  openModal = (id, data) => {
    this.setState({
      isEdit: true,
      editData: {
        id,
        title: data,
      }
    })
  }

  closeModal = () => {
    this.setState({
      isEdit: false
    })
  }



  addTask = data => {
    const id = this.state.todos.length;
    const newData = {
      id: id + 1,
      title: data
    }
    this.setState({
      todos: [...this.state.todos, newData]
    })
  }

  update = () => {
    const { id, title } = this.state.editData;
    const newData = { id, title }
    const newTodos = this.state.todos;
    newTodos.splice((id - 1), 1, newData)
    this.setState({
      todos: newTodos,
      isEdit: false,
      editData: {
        id: "",
        title: ""
      }
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
            <TodoItem
              todo={item}
              del={this.openDelete}
              open={this.openModal}
            />
          )}
        </div>
        <div className='input-form'>
          <FormInput add={this.addTask} />
        </div>

        <EditModal
          edit={this.state.isEdit}
          close={this.closeModal}
          change={this.setTitle}
          data={this.state.editData}
          update={this.update}
        />
        <div>
          {todos.map(item =>
            <DeleteModal
              todo={item}
              delete={this.state.isDelete}
              close={this.closeDelete}
              del={this.DeleteTask}
            />
          )}
        </div>
      </div>

    );

  }
}

export default App;
