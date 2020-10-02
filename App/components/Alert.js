import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  //position the alert in the middle
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
    borderRadius: screen.width / 2, // create a circle
    // center the x icon in the middle of the circle
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

  // if the prop correct is passed we're gonna use a different image
  const icon = correct
    ? require("../assets/check.png")
    : require("../assets/close.png");

  const circleStyles = [styles.circle];

  if (correct) {
    circleStyles.push(styles.circleCorrect);
  }

  return (
    <View style={styles.container}>
      <View style={circleStyles}>
        {/* add x ixon,
            resizeMode="contain" will specify that the image is not to go outside of the are/>*/}
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
    </View>
  );
};
