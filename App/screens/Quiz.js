import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";

import { Button, ButtonContainer } from "../components/Buttton";
import { Alert } from "../components/Alert";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36B1F0",
    paddingHorizontal: 20,
  },
  text: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600",
  },
  safeArea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between",
  },
});
export default class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      correctCount: 0,
      totalCount: this.props.route.params.questions.length ?? 0,
      activeQuestionIndex: 0,
      answered: false,
      answerCorrect: false,
    };
  }

  nextQuestion = () => {
    this.setState((state) => {
      let nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
        nextIndex = 0;
        this.props.navigation.popToTop();
      }
      return {
        activeQuestionIndex: nextIndex,
        answered: false,
      };
    });
  };

  answer = (correct) => {
    this.setState(
      (state) => {
        const nextState = {
          answered: true,
        };
        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }
        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 1000);
      }
    );
  };

  render() {
    const question =
      this.props.route.params.questions[this.state.activeQuestionIndex] ?? "";
    return (
      <View
        style={[
          Styles.container,
          { backgroundColor: this.props.route.params.color },
        ]}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={Styles.safeArea}>
          <View>
            <Text style={Styles.text}>{question.question}</Text>
            <ButtonContainer>
              {question.answers.map((answer) => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answer(answer.correct)}
                />
              ))}
            </ButtonContainer>
          </View>
          <Text style={Styles.text}>
            {`${this.state.correctCount}/${this.state.totalCount}`}
          </Text>
        </SafeAreaView>
        <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        />
      </View>
    );
  }
}
