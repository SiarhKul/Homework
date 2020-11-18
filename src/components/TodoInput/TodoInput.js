import React, { useCallback } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../../store/actions/todos.js'

function TodoInput({ addItem }) {
   const [inputText, setInputText] = useState('');

   const onInputChange = ({ target: { value } }) => {
      setInputText(value);
   }

   const setEmptyInput = useCallback(
      () => {
         setInputText('')
      }, [])

   return (
      <>
         <input type="text" value={inputText} onChange={onInputChange} />
         <button onClick={() => { addItem(inputText); setEmptyInput() }}>Add</button>

      </>
   )
}

const mapDispatchToProps = (dispatch) => {
   return {
      addItem: (text) => dispatch(createTodo(text))
   }
}

export default connect(null, mapDispatchToProps)(TodoInput)

