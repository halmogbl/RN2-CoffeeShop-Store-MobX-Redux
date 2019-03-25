import * as actionTypes from "../actions/actionTypes";

const initialState = {
  coffeeShops: [],
  loading: true
};

//so the reducer is a function that takes two argument state and action =>{ "what does it do" this function will switch between cases by action.type }
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // *********************************************** first case :
    case actionTypes.GET_COFFEESHOPS:
      return {
        // spreade the  state
        ...state,
        // setState
        coffeeShops: action.payload,
        loading: false
      };
    // *********************************************** second case:
    case actionTypes.COFFEESHOPS_LOADING:
      return {
        ...state,

        loading: true
      };
    // *********************************************** last case :
    default:
      return state;
  }
};

export default reducer;
