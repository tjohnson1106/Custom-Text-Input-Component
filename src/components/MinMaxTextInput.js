import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

class MinMaxTextInput extends Component {
  static defaultProps = {
    minLength: 0,
    maxLength: 999
  };
  render() {
    return (
      <View style={styles.root}>
        <TextInput {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20
  }
});

export default MinMaxTextInput;
