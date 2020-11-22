import {
   ADD_CASE,
   SET_CASE_DONE,
   REMOVE_CASE_DONE,
   TODO_CHOSER,
   CHANGE_FILTER
} from "../../constans/todoActions.js"

const defaultState = {
   todos: [],
   chosen: 'all',
   filterText: ''
};


export const todoReducer = (state = defaultState, action) => {
   console.log(state);
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
               return item.id === action.payload ? { ...item, done: !item.done } : { ...item }
            })
         }
      case REMOVE_CASE_DONE:
         return {
            ...state,
            todos: state.todos.filter((todo) => {
               return todo.id !== action.payload
            })
         }

      case TODO_CHOSER: {
         return {
            ...state,
            chosen: action.payload
         }
      }
      case CHANGE_FILTER: {
         return {
            ...state,
            filterText: action.payload
         }
      }

      default:
         return state;
   }
}

