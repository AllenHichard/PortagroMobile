import React from "react";
import {View, Text} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';



const Placeholder = ({ text }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{text}</Text>
    </View>
);

class Contato extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Settings!',
    };
  
    render() {
      return <Placeholder text="B!" />;
    }
  }

  let Principal = createStackNavigator({ 
    Contato:{
      screen: Contato,
      navigationOptions:{
          title: "Contato",
      },
  },
});
export default Principal;    

