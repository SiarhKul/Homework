import React from 'react'
import { connect } from 'react-redux'
import './TodoItem.css'
import { removeTodoItem } from '../../../store/actions/todos.js'

function TodoItem({ text, done, id, onDone, onRemove }) {
   return (
      <li>
         <span className={done ? 'done' : ''}>{text}</span>
         <button onClick={() => onDone(id)}>Done</button>
         <button onClick={() => onRemove(id)}>Delete</button>
      </li>
   )
}

const mapDispatchToProps = (dispatch) => {
   return {
      onRemove: (id) => {
         dispatch(removeTodoItem(id))
      }
   }
}

export default connect(null, mapDispatchToProps)(TodoItem)