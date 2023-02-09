import logo from './logo.svg'
import FormInput from './componnents/FormInput';
import TodoItem from './componnents/TodoItem';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className='logo'>
        <img src={logo} alt='logo'></img>
        <h3>Task List</h3>
      </div>
      <div className='list'>
        <TodoItem/>
      </div>
      <div className='input-form'>
        <FormInput/>
      </div>


    </div>
  );
}

export default App;
