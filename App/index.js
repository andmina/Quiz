// This is where we define our navigators//
///////////////////////////////////////////

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Quiz from "./screens/Quiz";
import QuizIndex from "./screens/QuizIndex";

// create stackNavigator in React 5
// Setup the main navigstion by creating a stack navigator
// it stacks screens on top of each other
const MyStack = createStackNavigator();

// this allows us to use the Navigaiton Container in React 5
// const MainStack = createStackNavigator({}); is earlier versions
export default function MainStack() {
  return (
    <NavigationContainer>
      <MyStack.Navigator initialRouteName="QuizIndex">
        {/*Quiz Index screen navigation*/}
        <MyStack.Screen
          name="QuizIndex"
          component={QuizIndex}
          options={{ title: "Quizzes" }} // adds the header title on top of the screen
        />
        {/*Quiz screen navigation*/}
        <MyStack.Screen
          name="Quiz"
          component={Quiz}
          options={({ route }) => ({
            // navigation options
            title: route.params.title ?? "Unnamed Quiz",
            headerTintColor: "#fff", // set the color of the title and the back button to white
            headerStyle: {
              backgroundColor: route.params.color, // change the color of the header to match the body of the screen
              shadowColor: "transparent",
            },
          })}
        />
      </MyStack.Navigator>
    </NavigationContainer>
  );
}
