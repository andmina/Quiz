import React from "react";
import { ScrollView, StatusBar } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import spaceQuestions from "../data/space";
import westernQuestions from "../data/westerns";
import computerQuestions from "../data/computers";

import { RowItem } from "../components/RowItem";

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("@Quiz-Items-Arr");
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

export default class QuizIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quizDataArr: null,
    };

    // AsyncStorage.clear(); // this will clear entire saved data
  }

  componentDidMount() {
    getData().then((result) => {
      if (result !== null) {
        this.setState({
          quizDataArr: result,
        });
      }
    });
  }

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        {this.state.quizDataArr != null ? (
          <>
            {this.state.quizDataArr.map((item) => (
              <RowItem
                name={item.name}
                color={item.color}
                key={item.name}
                onPress={() =>
                  this.props.navigation.navigate("Quiz", {
                    title: item.name,
                    questions: item.questions,
                    color: item.color,
                  })
                }
              />
            ))}
          </>
        ) : (
          <>
            <RowItem
              name="Space"
              color="#36B1F0"
              onPress={() =>
                this.props.navigation.navigate("Quiz", {
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
                this.props.navigation.navigate("Quiz", {
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
                this.props.navigation.navigate("Quiz", {
                  title: "Computers",
                  questions: computerQuestions,
                  color: "#49475B",
                })
              }
            />
          </>
        )}
      </ScrollView>
    );
  }
}
