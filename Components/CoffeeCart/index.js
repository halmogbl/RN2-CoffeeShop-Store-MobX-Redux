import React, { Component } from "react";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";
// to connect to the centeral store use connect
import { connect } from "react-redux";

//we moved the domey data from here to  the cartReducer in the initialState
// so we will need to to call the reducer to get the data from it by using mapStateToProps

class CoffeeCart extends Component {
  render() {
    let items = this.props.items;
    // items = array of objects SO YOU NEED TO USE  map
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Array [
    //   Object {
    //     "drink": "Latte",
    //     "option": "Small",
    //     "quantity": 2,
    //   },
    //   Object {
    //     "drink": "Espresso",
    //     "option": "Large",
    //     "quantity": 1,
    //   },
    // ]
    // *********** after maping through items array we got rid of the array so we can deal with objects.  ***************
    // item =  objects
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Object {
    //   "drink": "Latte",
    //   "option": "Small",
    //   "quantity": 2,
    // }
    // Object {
    //   "drink": "Espresso",
    //   "option": "Large",
    //   "quantity": 1,
    // }

    //so item.drink = Latte & Espresso

    //after maping save them in Component to keep everything orgonized
    let cartItems;

    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {cartItems}
        <Button full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

//we are calling mapStateToProps to get the data the centeral store
const mapStateToProps = state => {
  return {
    items: state.cartReducer.items
  };
};

// to connect to the centeral store use connect
export default connect(
  mapStateToProps,
  null
)(CoffeeCart);

// we are done with this componnet lets go to nxet componnet
//lets go to CoffeeDetail
