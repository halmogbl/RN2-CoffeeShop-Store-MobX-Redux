import React, { Component } from "react";
import { connect } from "react-redux";
// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content
} from "native-base";

// Style
import styles from "./styles";

//List
import coffeeshops from "../CoffeeList/list";

class CoffeeDetail extends Component {
  state = {
    drink: "Cappuccino",
    option: "Small"
  };

  changeDrink = value => {
    this.setState({
      drink: value
    });
  };

  changeOption = value => {
    this.setState({
      option: value
    });
  };

  render() {
    // this is newer cleaner way to use states from mapStateToProps
    // decleration
    const { coffeeShops, loading } = this.props.coffeeReducer;

    // ---------------- old way--------------------
    // if (!coffeeshops) return <Content />;
    // const coffeeshop = this.props.coffeeShops[0];

    // ----------------- new way ------------------
    if (loading) return <Content />;
    const coffeeshop = coffeeShops[0];
    // ----------------------------------------------

    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {coffeeshop.name + "\n"}
                <Text note>{coffeeshop.location}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: coffeeshop.img }} />
            </Right>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.drink}
                onValueChange={this.changeDrink}
              >
                <Picker.Item label="Cappuccino" value="Cappuccino" />
                <Picker.Item label="Latte" value="Latte" />
                <Picker.Item label="Espresso" value="Espresso" />
              </Picker>
            </Left>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.option}
                onValueChange={this.changeOption}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body>
          </ListItem>
          <Button full danger>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    coffeeShops: state.coffeeReducer.coffeeShops,
    loading: state.coffeeReducer.loading,

    // cleaner way to do this insteade of fetching two of my states. we can just do this:
    coffeeReducer: state.coffeeReducer // this way i have all my states here . go under the render to use it
  };
};

export default connect(
  mapStateToProps,
  null
)(CoffeeDetail);
