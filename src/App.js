import React, { Component } from 'react'
import TodoInput from './components/TodoInput/TodoInput'
import TodoList from './components/TodoList/TodoList'

class App extends Component {
    render() {
        return (
            <>
                <h1>My TODO list</h1>
                <TodoInput />
                <TodoList />
            </>
        )
    }
}
export default App