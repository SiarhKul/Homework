import React from 'react'
import { connect } from 'react-redux'
import { changeFilter } from '../../store/actions/todos.js'

const TodoFilter = (props) => {
   return (
      <div>
         <input type="text" onChange={props.onFilterChanger} />
      </div>
   )
}


const mapDispatchToProps = (dispatch) => {
   return {
      onFilterChanger: ({ target: { value } }) => dispatch(changeFilter(value))
   }
}


export default connect(null, mapDispatchToProps)(TodoFilter)
