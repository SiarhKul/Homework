import {
   ADD_CASE,
   SET_CASE_DONE,
   REMOVE_CASE_DONE
} from '../../constans/todoActions.js'

export const createTodo = text => ({ type: ADD_CASE, payload: text })
export const changeDone = id => ({ type: SET_CASE_DONE, payload: id })