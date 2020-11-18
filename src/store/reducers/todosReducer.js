import {
   ADD_CASE,
   SET_CASE_DONE,
   REMOVE_CASE_DONE,
} from "../../constans/todoActions.js"

const defaultState = {
   todos: [],
};

export const todoReducer = (state = defaultState, action) => {
   switch (action.type) {
      case ADD_CASE:
         return {
            ...state,
            todos: [...state.todos, { text: action.payload, done: false, id: Math.random() }]
         };
      case SET_CASE_DONE:
         return {
            ...state,
            todos: state.todos.map(item => {
               return item.id === action.payload ? { ...item, done: true } : { ...item }
            })
         }
      case REMOVE_CASE_DONE:
         return {
            ...state,
            todos: state.todos.filter((todo) => {
               return todo.id !== action.payload
            })
         }
      default:
         return state;
   }
}