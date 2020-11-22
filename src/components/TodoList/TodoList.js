import React, { useEffect } from 'react'
import { useState } from 'react';
import { connect } from 'react-redux'
import { changeDone } from '../../store/actions/todos.js';
import TodoItem from './TodoItem/TodoItem.js'

function TodoList({ todos, onDone, chosen, filterText }) {




   const [casesToShow, setCasesToShow] = useState(todos)

   useEffect(() => {
      let filteredTodos = todos;

      if (chosen === 'done') {
         filteredTodos = filteredTodos.filter(todo => todo.done);
      } else if (chosen === 'not-done') {
         filteredTodos = filteredTodos.filter(todo => !todo.done);
      }

      filteredTodos = filteredTodos.filter(({ text }) => text.toLowerCase().includes(filterText.toLowerCase()))

      setCasesToShow(filteredTodos);

   }, [chosen, todos, filterText]);

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



// import TodoItem from './TodoItem/TodoItem';
// import {changeDone, removeCase} from '../../store/actions/todos';
// import {connect} from 'react-redux';
// import { useEffect, useState } from 'react';

// const TodoList = ({
//   todos,
//   onDone,
//   onRemove,
//   chosen,
//   filterText
// }) => {

//   const  [casesToShow, setCasesToShow] = useState(todos);

//   useEffect(() => {
//     let filteredTodos = todos;

//     if (chosen === 'done') {
//       filteredTodos = filteredTodos.filter(todo => todo.done);
//     } else if (chosen === 'not-done') {
//       filteredTodos = filteredTodos.filter(todo => !todo.done);
//     }

//     filteredTodos = filteredTodos.filter(({text}) => text.toLowerCase().includes(filterText.toLowerCase()))

//     setCasesToShow(filteredTodos);

//   }, [chosen, todos, filterText]);


//   return (
//     <ul>
//       {casesToShow.map(({text, id, done}) => 
//         <TodoItem 
//           text={text}
//           key={id}
//           done={done}
//           id={id}
//           onDone={onDone}
//           onRemove={onRemove}
//         />)} 
//     </ul>
//   )
// };

// const mapStateToProps = ({todos, chosen, filterText}) => ({todos, chosen, filterText});
// const mapDispatchToProps = dispatch => ({
//   onDone: id => dispatch(changeDone(id)),
//   onRemove: id => dispatch(removeCase(id))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
