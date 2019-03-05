
import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
 user:null,
 isFetching:false
};

function doActions(state, action) {
  let result = null;		
  if (action && action.payload) {
    result = action.payload;
  }
  switch(action.type) {
    case ActionTypes.REQUEST_USER:
    {
      return Object.assign({},state,{'isFetching': true});
    }
     case ActionTypes.RECEIVE_USER:
    {
      return Object.assign({},state,{'isFetching': false},{'user':result});
    }
    default:break;
  }
  return Object.assign({}, state);
}

const app = (state = initialState, action) => {
  return doActions(state, action);
}
export default app;