import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

class MinMaxTextInput extends Component {
  static defaultProps = {
    minLength: 0,
    maxLength: 999
  };

  // x character needed
  getCharacter = numCharacters => {
    return numCharacters == 1 ? "character" : "characters";
  };

  renderMessage() {
    var len = this.props.value ? this.props.value.length : 0;
    var msg = "";

    // User has max # of characters
    if (len == this.props.maxLength) {
      return <View />;

      if (len >= this.props.minLength) {
        msg = this.getMoreCharactersRemainingMessage(
          this.props.maxLength - len
        );
      }
    }

    msg = this.getCharacterMessage(10);
    return <Text>{msg}</Text>;
  }

  getCharacterMessage = numCharacters => {
    return `${numCharacters}   ${this.getCharacterMessage(
      numCharacters
    )} needed`;
  };
  // x more characters needed
  getMoreCharactersMessage = numCharacters => {
    return `${numCharacters} more   ${this.getCharacterMessage(
      numCharacters
    )} needed`;
  };
  // x character remaining
  getMoreCharactersRemainingMessage = numCharacters => {
    return `${numCharacters}   ${this.getCharacterMessage(
      numCharacters
    )} remaining`;
  };

  render() {
    return (
      <View>
        <TextInput {...this.props} />
        {this.renderMessage}
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
