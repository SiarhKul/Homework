const defaultState = {
   counter: 0
}

function counterReducer(state = defaultState, action) {
   switch (action.type) {
      case "INCREMENT_CONTER": return { ...state, counter: state.counter + 1 }
      case "DECREMENT_CONTER": return { ...state, counter: state.counter - 1 }
      case "RESET_CONTER": return { ...state, counter: state.counter = 0 }
      case "GET_CONTER": return { ...state, numFromInput: action.payload }
      case "ASSIGN_NUMBER": return { ...state, counter: state.counter = state.numFromInput }
      // case "GET_CONTER": return { ...state, counter: state.counter = action.payload }
      default:
         return state
   }
}

export default counterReducer
