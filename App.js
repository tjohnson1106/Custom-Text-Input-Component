import React from "react";
import { StyleSheet, Text, View } from "react-native";

import MinMaxTextInput from "./src/components/MinMaxTextInput";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValue: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <MinMaxTextInput
            style={styles.input}
            value={this.state.textInputValue}
            onChangeText={text => {
              this.setState({ textInputValue: text });
            }}
            minLength={0}
            maxLenghth={5}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  innerContainer: {
    padding: 50
  },
  input: {
    borderWidth: 1,
    height: 40,
    width: 200,
    padding: 5
  }
});
