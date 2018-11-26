import {
FETCH_DATA_BEGIN,
FETCH_DATA_SUCCESS,
FETCH_DATA_FAILURE
} from '../Actions/actions';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function dataReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_DATA_BEGIN:
      
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_DATA_SUCCESS:
    console.log("success", action.payload);
      return {
        ...state,
        loading: false,
        items: action.payload.data
      };

    case FETCH_DATA_FAILURE:
     
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}