import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const deviceWidth = Dimensions.get("window").width;
const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: Colors.primary800,
    marginTop: deviceWidth < 390 ? 18 : 36,
    borderRadius: 8,
    marginHorizontal: 24,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});
