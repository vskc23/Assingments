import React, {useState} from 'react'

function App2() {

    const [todos, setTodos] = useState(['abc','def','ghi'])
    const [input, setInput] = useState([''])

    const addTodo = (event) =>
    {
        setTodos([...todos, input])
        event.preventDefault();
        
    }
    return (
        <div>
            <input type="text" value={input} onChange={(event) => setInput(event.target.value)}/>
            <button onClick={addTodo}>click</button>
            <ul>{todos.map(todo => (<li>{todo}</li>))}</ul>
        </div>
    )
}

export default App2
