import {
   ADD_CASE,
   SET_CASE_DONE,
   REMOVE_CASE_DONE,
   TODO_CHOSER,
   CHANGE_FILTER
} from '../../constans/todoActions.js'

export const createTodo = text => ({ type: ADD_CASE, payload: text })
export const changeDone = id => ({ type: SET_CASE_DONE, payload: id })
export const removeTodoItem = id => ({ type: REMOVE_CASE_DONE, payload: id })
export const changeChoser = type => ({ type: TODO_CHOSER, payload: type })
export const changeFilter = text => ({ type: CHANGE_FILTER, payload: text })