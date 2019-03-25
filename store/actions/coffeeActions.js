// this is the second step in the actions folder
// we are just fetching the date from the api here
// in the home component or app.js we wiil call this action or function by using mapDispatchToProps and ComponentDidMount(){this.props.getCoffeeShops()}
import * as actionTypes from "./actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://coffee.q8fawazo.me/api/?format=json"
});

export const getCoffeeShops = () => {
  return async dispatch => {
    // here we are just calling the second function then we will try fetching and catch the errors
    dispatch(setCoffeeShopsLoading());
    try {
      // to fetch from api
      const response = await instance.get("");
      // to get data from object reponse
      const coffeeShops = response.data;
      //dispatch to send to reducer
      dispatch({
        type: actionTypes.GET_COFFEESHOPS,
        payload: coffeeShops
      });
    } catch (error) {
      //incase there is an error
      console.error("Error while fetching", error);
      console.log("there is an error ferching the coffeeShops");
    }
  };
};

export const setCoffeeShopsLoading = () => ({
  type: actionTypes.COFFEESHOPS_LOADING
});
