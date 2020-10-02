// Imports
import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";
import { Button, ButtonContainer } from "../components/Button";
import { Alert } from "../components/Alert";

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600",
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between",
  },
});

/////////////////////////////////////////////////////////////////////
// We used a "class" here, yet only used "export default" for the QuizIndex screen.
// This is b/c we need React "stuff" here, such as state, render, etc. In essence,
// this screen is more complex because it has dynamic data (QuizIndex)
// has only static data (the screen always looks the same):
/////////////////////////////////////////////////////////////////////
class Quiz extends React.Component {
  state = {
    correctCount: 0,
    totalCount: this.props.route.params.questions.length ?? 0, // instead of totalCount: this.props.navigation.getParam('questions', []).length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
  };
  // Takes in a true/false variable (correct) and updates the state
  // based on whether the question was answered correctly or not
  answer = (correct) => {
    this.setState(
      (state) => {
        const nextState = { answered: true };

        // Update correctCount and answerCount, based on if user
        //  answered correctly
        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }
        // Return nextState, which will be passed to this.setState()
        // to update the screen
        return nextState;
      },
      // When a 2nd parameter is passed to this.setState(), it is a
      // callback function which will be executed when the state is updated
      () => {
        setTimeout(() => this.nextQuestion(), 750); // call the nextQuestion() function after a short delay
      }
    );
  };
  //  Takes in no parameters and updates the state so
  // that the next question is displayed (updates the question index)
  nextQuestion = () => {
    this.setState((state) => {
      let nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
        nextIndex = 0;
        this.props.navigation.popToTop(); // React 5
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false,
      };
    });
  };

  render() {
    // Use whatever is passed to us from navigation: call the getParam function on navigation option
    // React 4: const questions = this.props.navigation.getParam("questions", []);
    // React 5:
    const questions = this.props.route.params.questions ?? []; //use empty array if 'questions' doesn't exist
    const question = questions[this.state.activeQuestionIndex]; // grab the index of the questions to determine the question topic
    // instead of //const question = TEMP_QUESTIONS[this.state.activeQuestionIndex];

    // The actual JSX to return/display
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.route.params.color },
        ]}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View>
            <Text style={styles.text}>{question.question}</Text>

            <ButtonContainer>
              {/* Gets the answers array [] from the question object and maps each item in the
                  answers array (we call each answer: "answer") to a button. If you look at one
                  of the data objects (e.g., westerns.js), you'll see that each answer item has
                  "id", "text" and "correct" keys. When button is pressed, calls the "answer"
                  function defined above. */}
              {question.answers.map((answer) => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answer(answer.correct)} //call this.answer and pass in the value if it's true
                />
              ))}
            </ButtonContainer>
          </View>

          <Text style={styles.text}>
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
// This screen is exported
export default Quiz;
