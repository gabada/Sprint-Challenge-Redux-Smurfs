import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING ="FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";
export const REMOVE_SMURF = "REMOVE_SMURF";
export const REMOVE_SUCCESS = "REMOVE_SUCCESS";
export const REMOVE_FAILURE = "REMOVE_FAILURE";


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCHING });
  axios
      .get(`http://localhost:3333/smurfs/`)
      .then(res => {
          dispatch({
              type: SUCCESS,
              payload: res.data
          });
      })
      .catch(err => {
          dispatch({ type: FAILURE, payload: "Gargamel killed all the smurfs!" });
      });
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
      .post(`http://localhost:3333/smurfs/`, smurf)
      .then(res => {
          dispatch({
              type: ADD_SUCCESS,
              payload: res.data
          });
      })
      .catch(err => {
          dispatch({ type: ADD_FAILURE, payload: "Gargamel's cat ate the new smurf"});
      });
}

export const removeSmurf = id => dispatch => {
  dispatch({ type: REMOVE_SMURF });
  axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        console.log(res);
          dispatch({
              type: REMOVE_SUCCESS,
              payload: res.data
          });
      })
      .catch(err => {
          dispatch({ type: REMOVE_FAILURE, payload: "The smurf is hiding from you!"});
      });
}