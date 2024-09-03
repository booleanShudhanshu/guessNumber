import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const deviceWidth = Dimensions.get("window").width;

const NumberConatiner = ({ children }) => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberConatiner;

const styles = StyleSheet.create({
  conatiner: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 390 ? 12 : 24,
    borderRadius: 8,
    margin: deviceWidth < 390 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 390 ? 28 : 36,
    fontWeight: "bold",
  },
});
