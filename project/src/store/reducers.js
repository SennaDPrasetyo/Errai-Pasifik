import { FETCH_SEARCH, SET_INPUT, SET_LOADING } from "./actionType";

const initialState = {
  data: {},
  input: "",
  loading: false,
};

function reducer(state = initialState, action) {
  if (action.type === FETCH_SEARCH) {
    return { ...state, data: action.payload };
  } else if (action.type === SET_INPUT) {
    return { ...state, input: action.payload };
  } else if (action.type === SET_LOADING) {
    return { ...state, loading: action.payload };
  }
  return state;
}

export default reducer;
