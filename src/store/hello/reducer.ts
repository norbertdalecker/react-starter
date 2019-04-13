import { Reducer } from 'redux';
import { ActionTypes } from './actions';
import { HelloState } from './model';

const initialState: HelloState = {
  hello: null,
  loading: false,
};

const reducer: Reducer<HelloState> = (state = initialState, action) => {
  // tslint:disable-next-line:no-small-switch
  switch (action.type) {
    case ActionTypes.LIST_REQUEST: {
      return { ...state, loading: true };
    }
    case ActionTypes.LIST: {
      return { ...state, loading: false, hello: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
