import React from "react";
import { View, ScrollView, Button } from "react-native";

import spaceQuestions from "../data/space";
import westernQuestions from "../data/westerns";
import computerQuestions from "../data/computers";

import { RowItem } from "../components/RowItem";
import { StatusBar } from "expo-status-bar";

// This QuizIndex screen is exported:
//    navigation - a built-in parameter that has sub-parameters and is
//    passed in by the navigation system
export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="datk-content" />
    <RowItem
      name="Space"
      color="#36B1F0"
      onPress={() =>
        navigation.navigate("Quiz", {
          /* Pass in a custom JSON object as additional parameters */
          title: "Space",
          questions: spaceQuestions,
          color: "#36B1F0",
        })
      }
    />
    <RowItem
      name="Westerns"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Westerns",
          questions: westernQuestions,
          color: "#799496",
        })
      }
    />
    <RowItem
      name="Computers"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Computers",
          questions: computerQuestions,
          color: "#49475B",
        })
      }
    />
  </ScrollView>
);
