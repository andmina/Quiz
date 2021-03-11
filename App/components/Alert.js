import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

const screen = Dimensions.get("window");

const Styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    backgroundColor: "#ff4136",
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 4,
    alignItems: "center",
    justifyContent: "center",
  },
  circleCorrect: {
    backgroundColor: "#28A125",
  },
  icon: {
    width: screen.width / 3,
  },
});

export const Alert = ({ correct, visible }) => {
  if (!visible) return null;

  const icon = correct
    ? require("../assets/check.png")
    : require("../assets/close.png");

  const circleStyles = [Styles.circle];
  if (correct) {
    circleStyles.push(Styles.circleCorrect);
  }

  return (
    <View style={Styles.container}>
      <View style={circleStyles}>
        <Image source={icon} style={Styles.icon} resizeMode="contain" />
      </View>
    </View>
  );
};
