import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Feed extends React.Component {
  render() {
    return (
      <View style={styles.cont}>
        <Text style={{textAlign:"center"}}>Feed screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
  },
});
