import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

class MinMaxTextInput extends Component {
  static defaultProps = {
    minLength: 0,
    maxLength: 999
  };
  render() {
    return (
      <View>
        <TextInput {...this.props} />
      </View>
    );
  }
}

export default MinMaxTextInput;
