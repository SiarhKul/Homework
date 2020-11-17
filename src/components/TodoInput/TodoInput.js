import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../../store/actions/todos.js'


function TodoInput({ addItem }) {
   const [inputText, setInputText] = useState('');

   const onInputChange = ({ target: { value } }) => {
      setInputText(value);
   }

   return (
      <>
         <input type="text" value={inputText} onChange={onInputChange} />
         <button onClick={() => addItem(inputText)}>Add</button>
      </>
   )
}

const mapDispatchToProps = (dispatch) => {
   return {
      addItem: (text) => dispatch(createTodo(text))
   }
}

export default connect(null, mapDispatchToProps)(TodoInput)