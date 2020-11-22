import React from 'react'
import TodoChoser from './components/TodoChoser/TodoChoser'
import TodoFilter from './components/TodoFilter/TodoFilter'
import TodoInput from './components/TodoInput/TodoInput'
import TodoList from './components/TodoList/TodoList'


const App = () => {
   return (
      <>
         <h1>Header</h1>
         <TodoFilter />
         <TodoChoser />
         <TodoInput />
         <TodoList />
      </>
   )
}

export default App