import React from 'react'
import { connect } from 'react-redux'
import { changeChoser } from '../../store/actions/todos.js'

const TodoChoser = ({ onChooserClick }) => {
   return (
      <div>
         <button onClick={() => { onChooserClick('done') }}>done</button>
         <button onClick={() => { onChooserClick('not-done') }}> no done</button>
         <button onClick={() => { onChooserClick('all') }} >all</button>
      </div>
   )
}

const mapDispatchToProps = (dispatch) => {
   return {
      onChooserClick: (type) => dispatch(changeChoser(type))
   }

}

export default connect(null, mapDispatchToProps)(TodoChoser) 
