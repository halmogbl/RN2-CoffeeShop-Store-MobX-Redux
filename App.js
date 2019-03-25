import React, { Component } from "react";
import { Spinner } from "native-base";
import HomePage from "./Components/HomePage";

import { Provider } from "react-redux";

// this is our centeral store
import store from "./store";

export default class App extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner color="white" />;
    }
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}

// sice we imported the store and provider,then we wraped the homepage with the provider and we passed a store as props
//now we can go aheade and use mapStateToProps
