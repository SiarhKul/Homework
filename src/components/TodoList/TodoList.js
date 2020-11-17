import React from 'react'
import { connect } from 'react-redux'
import { changeDone } from '../../store/actions/todos.js';
import TodoItem from './TodoItem/TodoItem.js'

function TodoList({ todos, onDone }) {
   return (
      <ul>
         {todos.map(({ text, id, done }) =>
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


// const mapStateToProps = ({ todos }) => ({ todos });

const mapStateToProps = (state) => {
   return {
      todos: state.todos
   }
}

const mapDispatchToProps = dispatch => ({ onDone: (id) => dispatch(changeDone(id)) })

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)