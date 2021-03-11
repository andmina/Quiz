import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import QuizIndex from "./screens/QuizIndex";
import Quiz from "./screens/Quiz";
import NewQuiz from "./screens/NewQuiz";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

export function MainStackScreens() {
  return (
    <MainStack.Navigator initialRouteName="QuizIndex">
      <MainStack.Screen
        name="QuizIndex"
        component={QuizIndex}
        options={({ navigation }) => ({
          title: "Quizzes",
          headerRight: () => (
            <>
              {/* navigate to the new quiz when clicking the "+" */}
              <TouchableOpacity
                style={{ marginRight: 18 }}
                onPress={() => navigation.navigate("NewQuiz")}
              >
                <FontAwesome5 name="plus" size={24} color="black" />
              </TouchableOpacity>
            </>
          ),
        })}
      />
      <MainStack.Screen
        name="Quiz"
        component={Quiz}
        options={({ route }) => ({
          title: route.params.title ?? "Unnamed Quiz",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: route.params.color,
            shadowColor: "transparent",
          },
        })}
      />
    </MainStack.Navigator>
  );
}

export default function RootStackScreens() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreens}
          options={{ headerShown: false }} // instead of showing Main it passes through whatever component goes from the main
        />
        <RootStack.Screen
          name="NewQuiz"
          component={NewQuiz}
          options={({ navigation }) => ({
            title: "Create New Quiz",
            headerLeft: () => (
              <>
                {/* navigate to the new quiz when clicking the "+" */}
                <TouchableOpacity
                  style={{ marginLeft: 18 }}
                  onPress={() => navigation.pop()}
                >
                  <Text style={{ fontSize: 16 }}>Cancel</Text>
                </TouchableOpacity>
              </>
            ),
            // headerRight: () => (
            //   <>
            //     {/* navigate to the new quiz when clicking the "+" */}
            //     <TouchableOpacity
            //       style={{ marginLeft: 18 }}
            //     >
            //       <Text
            //         style={{ marginRight: 18, fontSize: 16, fontWeight: "600" }}
            //       >
            //         Save
            //       </Text>
            //     </TouchableOpacity>
            //   </>
            // ),
          })}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
