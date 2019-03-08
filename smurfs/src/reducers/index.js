import { FETCHING, SUCCESS, FAILURE, ADD_SUCCESS, ADD_FAILURE, REMOVE_SUCCESS, REMOVE_FAILURE } from '../actions';

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetching: false,
  error: ''
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
        smurfs: [],
        error: ''
      }
    case SUCCESS:
      return {
        ...state,
        fetching: false,
        smurfs: action.payload,
        error: ''
      }
    case FAILURE:
      return {
        ...state,
        fetching: false,
        smurfs: [],
        error: action.payload
      }
    case ADD_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      }
    case ADD_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case REMOVE_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      }
    case REMOVE_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};