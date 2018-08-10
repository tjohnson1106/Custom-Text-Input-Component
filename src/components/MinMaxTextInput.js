import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

class MinMaxTextInput extends Component {
  static defaultProps = {
    minLength: 0,
    maxLength: 999
  };

  getCharacter = numCharacters => {
    return numCharacters == 1 ? "character" : "characters";
  };

  renderMethod() {
    const len = this.props.value ? this.props.value.length : 0;
    const msg = "";
  }

  render() {
    return (
      <View>
        <TextInput {...this.props} />
        {this.renderMethod}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  neutralText: {},
  invalidText: {
    color: "orange"
  }
});

export default MinMaxTextInput;
