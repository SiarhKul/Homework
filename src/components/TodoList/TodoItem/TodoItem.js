import React from 'react'
import './TodoItem.css'
export default function TodoItem({ text, done, id, onDone }) {
   return (
      <li>
         <span className={done ? 'done' : ''}>{text}</span>
         <button onClick={() => onDone(id)}>Done</button>
         <button>Delete</button>
      </li>
   )
}
