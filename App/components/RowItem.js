import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  row: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#36B1F0",
    marginBottom: 1,
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
});

export const RowItem = ({ onPress = () => {}, name, color }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
    <View style={[Styles.row, { backgroundColor: color }]}>
      <Text style={Styles.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);
