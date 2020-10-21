import React, {useState} from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo'
//const todos = ['Hello I\'m trying a cool todo-app', 'But, I also have to learn routes,redux and revise react']
//const showtodos = todos.map(todo => <li>{todo}</li>)

function App() {

  const [todos, setTodos] = useState(['Complete React Project', 'Add it to GitHub']);
  const [input, setInput] = useState([''])

  const addTodos = (event) =>{
    setTodos([...todos, input])
    event.preventDefault();
    setInput('')
  }
  return (
    <div className="App">
     <h1>Hello!!</h1>
     <form>
     <FormControl>
    <InputLabel >Add a todo</InputLabel>
    <Input id="my-input" aria-describedby="my-helper-text" value={input} onChange={ (event) => setInput(event.target.value)} />
    </FormControl>
     {/* <input value={input} onChange={ (event) => setInput(event.target.value)} /> */}
     {/* <button type="submit" onClick={addTodos}>Add Todo</button> */}
     <Button disabled={!input} variant="contained" color="secondary" type="submit" onClick={addTodos}>  Add Todo </Button>
    <ul>
    {todos.map(todo => <Todo name={todo}/>)}
    </ul>
    </form>
    </div>
  );
}

export default App;
