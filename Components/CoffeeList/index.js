import React, { Component } from "react";

// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Store

// Component
import CoffeeItem from "./CoffeeItem";
//start with connecting
import { connect } from "react-redux";

class CoffeeList extends Component {
  render() {
    let shops;

    // to use our loading set this condition
    if (this.props.loading) {
      return <Spinner />;
    }
    // we deleted the old condition
    shops = this.props.coffeeShops.map(coffeeShop => (
      <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
    ));

    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    coffeeShops: state.coffeeReducer.coffeeShops,
    loading: state.coffeeReducer.loading,
    items: state.cartReducer.items,
    loading: state.cartReducer.loading
  };
};

export default connect(
  mapStateToProps,
  null
)(CoffeeList);
