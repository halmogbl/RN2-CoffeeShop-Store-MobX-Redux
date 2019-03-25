// in react native we do not have default index.js in our app, so all the setup will be in app.js.
//to keep the cood clean we will create the store here and export it

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
//react Native dev tools
import { composeWithDevTools } from "redux-devtools-extension";
const middlewares = [thunk];
const enhancer = composeWithDevTools({
  // Options: https://github.com/jhen0409/react-native-debugger#options
})(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

export default store;

// go to app.js and import the store and call it
