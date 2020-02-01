import React from "react";
import {View, Text} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import MapView from "react-native-maps";



const Placeholder = ({ text }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{text}</Text>
    </View>
);

class Mapa extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Settings!',
    };
  
    render() {
      return (
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      );
    }
  }

  let Principal = createStackNavigator({ 
    Mapa:{
      screen: Mapa,
      navigationOptions:{
          title: "Mapa",
      },
  },
});
export default Principal;    

