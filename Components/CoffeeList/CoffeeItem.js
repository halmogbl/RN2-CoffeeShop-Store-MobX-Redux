import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";
import { connect } from "react-redux";

class CoffeeItem extends Component {
  handlePress = () => {
    alert("Pressed");
  };
  render() {
    const { coffeeShop } = this.props;
    return (
      <ImageBackground
        // this is how to sow the pictures
        source={{ uri: coffeeShop.background }}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <ListItem button onPress={this.handlePress} style={styles.listitem}>
          <Card style={styles.transparent}>
            <CardItem style={styles.transparent}>
              <Left>
                <Thumbnail
                  bordered
                  // this is how to sow the pictures
                  source={{ uri: coffeeShop.img }}
                  style={styles.thumbnail}
                />
                <Text style={styles.text}>{coffeeShop.name}</Text>
                <Text note style={styles.text}>
                  {coffeeShop.distance}
                </Text>
              </Left>
            </CardItem>
          </Card>
        </ListItem>
      </ImageBackground>
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
)(CoffeeItem);
