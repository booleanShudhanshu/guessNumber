import React from "react";
import { StyleSheet, Text } from "react-native";

const Title = ({ title, children }) => {
  return <Text style={styles.title}>{children || title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 12,
  },
});
