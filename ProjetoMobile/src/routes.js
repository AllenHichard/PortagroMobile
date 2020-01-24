import React from 'react';
import { View, Text,Image , StyleSheet, Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from "./pages/Main";
import logo from "../assets/logo.png"
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const Placeholder = ({ text }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>{text}</Text>
  </View>
);

class A extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home!',
  };

  render() {
    return <Placeholder text="A!" />;
  }
}

class B extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Settings!',
    };
  
    render() {
      return <Placeholder text="B!" />;
    }
  }
  
  let HomeStack = createStackNavigator({ A });
  
  let SettingsStack = createStackNavigator({ B });
  
  export default createAppContainer(createDrawerNavigator({
    HomeStack,
    SettingsStack,
  }));
  