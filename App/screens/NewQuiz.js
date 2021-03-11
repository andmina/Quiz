import React from "react";
import {
  ScrollView,
  TextInput,
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Switch,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import spaceQuestions from "../data/space";
import westernQuestions from "../data/westerns";
import computerQuestions from "../data/computers";

const Styles = StyleSheet.create({
  textInput: {
    height: 40,
    backgroundColor: "#dddd",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 18,
    paddingLeft: 15,
    paddingRight: 15,
  },
  saveButton: {
    backgroundColor: "#000",
    borderRadius: 8,
    margin: 15,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  colorPickerButton: {
    borderRadius: 22,
    width: 44,
    height: 44,
    margin: 8,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "#777",
  },
  labelText: {
    margin: 10,
    marginLeft: 15,
  },
});

export default class NewQuiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quizName: "New Quiz Name",
      quizColor: "#423E37",
      question1: "",
      answer1_1: "",
      answer1_2: "",
      answer1_3: "",
      answer1_4: "",
      answer1_1_correct: false,
      answer1_2_correct: false,
      answer1_3_correct: false,
      answer1_4_correct: false,
      question2: "",
      answer2_1: "",
      answer2_2: "",
      answer2_3: "",
      answer2_4: "",
      answer2_1_correct: false,
      answer2_2_correct: false,
      answer2_3_correct: false,
      answer2_4_correct: false,
    };
  }

  onTextChange = (name, text) => this.setState({ [name]: text });

  onSwitchChange = (name, value) => this.setState({ [name]: value });

  render() {
    return (
      <SafeAreaView>
        <ScrollView style={{ height: "100%", width: "100%" }}>
          <Text style={{ margin: 10, marginLeft: 15 }}>Enter Quiz Name:</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={[Styles.textInput, { flex: 1 }]}
              value={this.state.quizName}
              onChange={(event) => {
                this.onTextChange("quizName", event.nativeEvent.text);
              }}
            />
          </View>
          <Text style={[Styles.labelText, { marginTop: 0 }]}>
            Select Quiz Color:
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: this.state.quizColor,
            }}
          >
            {/* Color pickers */}
            {/* Red */}
            <TouchableOpacity
              style={[Styles.colorPickerButton, { backgroundColor: "#A3333D" }]}
              onPress={() => this.setState({ quizColor: "#A3333D" })}
            />
            {/* Orange */}
            <TouchableOpacity
              style={[Styles.colorPickerButton, { backgroundColor: "#F0A46A" }]}
              onPress={() => this.setState({ quizColor: "#F0A46A" })}
            />
            {/* Green */}
            <TouchableOpacity
              style={[Styles.colorPickerButton, { backgroundColor: "#A4B494" }]}
              onPress={() => this.setState({ quizColor: "#A4B494" })}
            />
            {/* Light Blue */}
            <TouchableOpacity
              style={[Styles.colorPickerButton, { backgroundColor: "#ABD2FA" }]}
              onPress={() => this.setState({ quizColor: "#ABD2FA" })}
            />
            {/* Pink */}
            <TouchableOpacity
              style={[Styles.colorPickerButton, { backgroundColor: "#FAA8D8" }]}
              onPress={() => this.setState({ quizColor: "#FAA8D8" })}
            />
            {/* Black */}
            <TouchableOpacity
              style={[Styles.colorPickerButton, { backgroundColor: "#423E37" }]}
              onPress={() => this.setState({ quizColor: "#423E37" })}
            />
          </View>
          <Text style={Styles.labelText}>Question 1:</Text>
          <TextInput
            multiline
            numberOfLines={5}
            style={[Styles.textInput, { height: 95, marginBottom: 0 }]}
            value={this.state.question1}
            onChange={(event) => {
              this.onTextChange("question1", event.nativeEvent.text);
            }}
          />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column", flex: 8 }}>
              <Text style={Styles.labelText}>Answer 1:</Text>
              <TextInput
                style={[Styles.textInput]}
                value={this.state.answer1_1}
                onChange={(event) => {
                  this.onTextChange("answer1_1", event.nativeEvent.text);
                }}
              />
            </View>
            <View style={{ flexDirection: "column", flex: 2 }}>
              <Text style={{ margin: 10, marginRight: 20, marginLeft: 0 }}>
                Correct:
              </Text>
              <Switch
                style={{ flex: 1, marginTop: 4 }}
                value={this.state.answer1_1_correct}
                onValueChange={(value) =>
                  this.onSwitchChange("answer1_1_correct", value)
                }
              />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column", flex: 8 }}>
              <Text style={Styles.labelText}>Answer 2:</Text>
              <TextInput
                style={[Styles.textInput]}
                value={this.state.answer1_2}
                onChange={(event) => {
                  this.onTextChange("answer1_2", event.nativeEvent.text);
                }}
              />
            </View>
            <View style={{ flexDirection: "column", flex: 2 }}>
              <Text style={{ margin: 10, marginRight: 20, marginLeft: 0 }}>
                Correct:
              </Text>
              <Switch
                style={{ flex: 1, marginTop: 4 }}
                value={this.state.answer1_2_correct}
                onValueChange={(value) =>
                  this.onSwitchChange("answer1_2_correct", value)
                }
              />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column", flex: 8 }}>
              <Text style={Styles.labelText}>Answer 3:</Text>
              <TextInput
                style={[Styles.textInput]}
                value={this.state.answer1_3}
                onChange={(event) => {
                  this.onTextChange("answer1_3", event.nativeEvent.text);
                }}
              />
            </View>
            <View style={{ flexDirection: "column", flex: 2 }}>
              <Text style={{ margin: 10, marginRight: 20, marginLeft: 0 }}>
                Correct:
              </Text>
              <Switch
                style={{ flex: 1, marginTop: 4 }}
                value={this.state.answer1_3_correct}
                onValueChange={(value) =>
                  this.onSwitchChange("answer1_3_correct", value)
                }
              />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column", flex: 8 }}>
              <Text style={Styles.labelText}>Answer 4:</Text>
              <TextInput
                style={[Styles.textInput]}
                value={this.state.answer1_4}
                onChange={(event) => {
                  this.onTextChange("answer1_4", event.nativeEvent.text);
                }}
              />
            </View>
            <View style={{ flexDirection: "column", flex: 2 }}>
              <Text style={{ margin: 10, marginRight: 20, marginLeft: 0 }}>
                Correct:
              </Text>
              <Switch
                style={{ flex: 1, marginTop: 4 }}
                value={this.state.answer1_4_correct}
                onValueChange={(value) =>
                  this.onSwitchChange("answer1_4_correct", value)
                }
              />
            </View>
          </View>
          <Text style={Styles.labelText}>Question 2:</Text>
          <TextInput
            multiline
            numberOfLines={5}
            style={[Styles.textInput, { height: 95, marginBottom: 0 }]}
            value={this.state.question2}
            onChange={(event) => {
              this.onTextChange("question2", event.nativeEvent.text);
            }}
          />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column", flex: 8 }}>
              <Text style={Styles.labelText}>Answer 1:</Text>
              <TextInput
                style={[Styles.textInput]}
                value={this.state.answer2_1}
                onChange={(event) => {
                  this.onTextChange("answer2_1", event.nativeEvent.text);
                }}
              />
            </View>
            <View style={{ flexDirection: "column", flex: 2 }}>
              <Text style={{ margin: 10, marginRight: 20, marginLeft: 0 }}>
                Correct:
              </Text>
              <Switch
                style={{ flex: 1, marginTop: 4 }}
                value={this.state.answer2_1_correct}
                onValueChange={(value) =>
                  this.onSwitchChange("answer2_1_correct", value)
                }
              />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column", flex: 8 }}>
              <Text style={Styles.labelText}>Answer 2:</Text>
              <TextInput
                style={[Styles.textInput]}
                value={this.state.answer2_2}
                onChange={(event) => {
                  this.onTextChange("answer2_2", event.nativeEvent.text);
                }}
              />
            </View>
            <View style={{ flexDirection: "column", flex: 2 }}>
              <Text style={{ margin: 10, marginRight: 20, marginLeft: 0 }}>
                Correct:
              </Text>
              <Switch
                style={{ flex: 1, marginTop: 4 }}
                value={this.state.answer2_2_correct}
                onValueChange={(value) =>
                  this.onSwitchChange("answer2_2_correct", value)
                }
              />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column", flex: 8 }}>
              <Text style={Styles.labelText}>Answer 3:</Text>
              <TextInput
                style={[Styles.textInput]}
                value={this.state.answer2_3}
                onChange={(event) => {
                  this.onTextChange("answer2_3", event.nativeEvent.text);
                }}
              />
            </View>
            <View style={{ flexDirection: "column", flex: 2 }}>
              <Text style={{ margin: 10, marginRight: 20, marginLeft: 0 }}>
                Correct:
              </Text>
              <Switch
                style={{ flex: 1, marginTop: 4 }}
                value={this.state.answer2_3_correct}
                onValueChange={(value) =>
                  this.onSwitchChange("answer2_3_correct", value)
                }
              />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column", flex: 8 }}>
              <Text style={Styles.labelText}>Answer 4:</Text>
              <TextInput
                style={[Styles.textInput]}
                value={this.state.answer2_4}
                onChange={(event) => {
                  this.onTextChange("answer2_4", event.nativeEvent.text);
                }}
              />
            </View>
            <View style={{ flexDirection: "column", flex: 2 }}>
              <Text style={{ margin: 10, marginRight: 20, marginLeft: 0 }}>
                Correct:
              </Text>
              <Switch
                style={{ flex: 1, marginTop: 4 }}
                value={this.state.answer2_4_correct}
                onValueChange={(value) =>
                  this.onSwitchChange("answer2_4_correct", value)
                }
              />
            </View>
          </View>
          <TouchableOpacity
            style={Styles.saveButton}
            onPress={() => {
              // Save stuff
              (async () => {
                try {
                  const arrayValue = await AsyncStorage.getItem(
                    "@Quiz-Items-Arr"
                  );
                  if (arrayValue !== null) {
                    // Add new quiz
                    const newArray = JSON.parse(arrayValue);
                    newArray.push({
                      name: this.state.quizName.trim(),
                      color: this.state.quizColor,
                      questions: [
                        {
                          question: this.state.question1.trim(),
                          answers: [
                            {
                              id: "1",
                              text: this.state.answer1_1.trim(),
                              correct: this.state.answer1_1_correct,
                            },
                            {
                              id: "2",
                              text: this.state.answer1_2.trim(),
                              correct: this.state.answer1_2_correct,
                            },
                            {
                              id: "3",
                              text: this.state.answer1_3.trim(),
                              correct: this.state.answer1_3_correct,
                            },
                            {
                              id: "4",
                              text: this.state.answer1_4.trim(),
                              correct: this.state.answer1_4_correct,
                            },
                          ],
                        },
                        {
                          question: this.state.question2.trim(),
                          answers: [
                            {
                              id: "1",
                              text: this.state.answer2_1.trim(),
                              correct: this.state.answer2_1_correct,
                            },
                            {
                              id: "2",
                              text: this.state.answer2_2.trim(),
                              correct: this.state.answer2_2_correct,
                            },
                            {
                              id: "3",
                              text: this.state.answer2_3.trim(),
                              correct: this.state.answer2_3_correct,
                            },
                            {
                              id: "4",
                              text: this.state.answer2_4.trim(),
                              correct: this.state.answer2_4_correct,
                            },
                          ],
                        },
                      ],
                    });
                    await AsyncStorage.setItem(
                      "@Quiz-Items-Arr",
                      JSON.stringify(newArray)
                    ).then(() => {
                      this.props.navigation.pop();
                    });
                  } else {
                    // No quizzes saved, so save all built-in ones plus new one
                    const currentQuizzesArr = [];
                    currentQuizzesArr.push({
                      name: "Computers",
                      color: "#49475B",
                      questions: computerQuestions,
                    });
                    currentQuizzesArr.push({
                      name: "Space",
                      color: "#36B1F0",
                      questions: spaceQuestions,
                    });
                    currentQuizzesArr.push({
                      name: "Westerns",
                      color: "#799496",
                      questions: westernQuestions,
                    });
                    await AsyncStorage.setItem(
                      "@Quiz-Items-Arr",
                      JSON.stringify(currentQuizzesArr)
                    );
                  }
                } catch (e) {
                  console.error(`Error with storage:${e}`);
                }
              })();
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
