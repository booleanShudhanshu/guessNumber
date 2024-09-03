import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

const Title = ({ title, children }) => {
  return <Text style={styles.title}>{children || title}</Text>;
};

export default Title;

const platform = Platform.OS;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    borderWidth: 0,
    borderColor: "#fff",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
