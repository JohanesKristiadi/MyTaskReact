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

  // ini kan fungsi untuk detelenya? fungsi ini yang harusnya dijalankan saat diklik ok di modalnya
  // di sini dia menerima sesuatu ya! yaitu id yang mau dihapus
  DeleteTask = id => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
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
    // lihat deh, di sini setelah update berhasil, dia set ulang isEditnya jadi false loh!
    // apakah delete juga butuh diset isDeletenya jadi false setelah selesai?
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
          data={this.state.x}
          update={this.update}
        />
        <div>
          {todos.map(item =>
            <DeleteModal
              // di sini, dia sudah mengirimkan todo sebagai props ke delete modal
              // berarti, dia menerima todo.id dan todo.title loh!
              todo={item}
              delete={this.state.isDelete}
              close={this.closeDelete}
              // nah ini kan benar sudah dikirimkan ke modalnya fungsi utk delete task, berarti kalau dikirimkan, dia akan menjadi props ya
              // di deletemodalnya harus dipanggil sebagai props
              del={this.DeleteTask}
            />
          )}
        </div>
      </div>

    );

  }
}

export default App;
