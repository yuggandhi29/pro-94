//teacher123@gmail.com password- 123456
import React, { Component } from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";
import db from "./config";
import BottomTabNavigator from "./components/BottomTabNavigator";

//Step2- Import createSwitchNavigator and LoginScreen
import LoginScreen from "./screens/Login";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return <AppContainer />;
    }
    return null;
  }
}

const AppSwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    BottomTab: {
      screen: BottomTabNavigator
    }
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);

/*
NOTE-Normal rules in database:-
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
 match /{document=**} {
      allow read, write: if request.time < timestamp.date(2022, 7, 28); 
         }
  }
}
*/
