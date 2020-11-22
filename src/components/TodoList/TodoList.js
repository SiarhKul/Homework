import React, { useEffect } from 'react'
import { useState } from 'react';
import { connect } from 'react-redux'
import { changeDone } from '../../store/actions/todos.js';
import TodoItem from './TodoItem/TodoItem.js'

function TodoList({ todos, onDone, chosen, filterText }) {
   const [casesToShow, setCasesToShow] = useState(todos)
   console.log('filtertext-', filterText);
   console.log('text-', todos.text);
   useEffect(() => {
      if (chosen === 'all') {
         setCasesToShow(todos)
      } else if (chosen === 'done') {
         setCasesToShow(todos.filter(todo => todo.done))
      } else {
         setCasesToShow(todos.filter(todo => !todo.done))
      }
   }, [chosen, todos])

   useEffect(() => {
      setCasesToShow(casesToShow.filter(({ text }) => text.toLowerCase()
         .includes(filterText.toLowerCase())))
   }, [filterText])


   return (
      <ul>
         {casesToShow.map(({ text, id, done }) =>
            <TodoItem
               key={id}
               text={text}
               id={id}
               done={done}
               onDone={() => { onDone(id) }}
            />)}
      </ul>
   )
}

const mapStateToProps = (state) => {
   return {
      todos: state.todos,
      chosen: state.chosen,
      filterText: state.filterText
   }
}

const mapDispatchToProps = dispatch => ({
   onDone: (id) => dispatch(changeDone(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)