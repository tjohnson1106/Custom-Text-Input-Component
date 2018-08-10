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
    return `${numCharacters}   ${this.getCharacter(
      numCharacters
    )} remaining`;
  };

  renderMessage() {
    var len = this.props.value ? this.props.value.length : 0;
    var msg = "";

    // User has max # of characters
    if (len == this.props.maxLength) {
      return <View />;
      // User has more than min number of characters
      if (len >= this.props.minLength) {
        msg = this.getMoreCharactersRemainingMessage(
          this.props.maxLength - len
        );
        return <Text style={styles.neutralText}>{msg}</Text>;
      }
      // User does not have enough characters, has not started typing
      if (len < this.props.minLength && len == 0) {
        msg = this.getCharacterMessage(this.props.minLength);
        return <Text style={styles.neutralText}>{msg}</Text>;
      }
      // User does not have enough characters
      if (len < this.props.minLength && len > 0) {
        msg = this.getMoreCharactersMessage(
          this.props.minLength - len
        );
        return <Text style={styles.invalidText}>{msg}</Text>;
      }
    }

    return <View />;

    msg = this.getCharacterMessage(1);
    return <Text>{msg}</Text>;
  }

  render() {
    return (
      <View>
        <TextInput
          {...this.props}
          underlineColorAndroid="transparent"
        />
        {this.renderMessage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  neutralText: {
    paddingTop: 5
  },
  invalidText: {
    color: "orange",
    paddingTop: 5
  }
});

export default MinMaxTextInput;
