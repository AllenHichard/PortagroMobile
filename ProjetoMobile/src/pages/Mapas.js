import React from "react";
import {View, Text} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import Tabela from "./Tabela"
import Grafico from "./Grafico"
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MapView from "react-native-maps";



const Placeholder = ({ text }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{text}</Text>
    </View>
);

class Mapa extends React.Component {
    
    render() {
      return (<MapView style={{flex:1}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />);
    }
  }

  const TabNavigator = createBottomTabNavigator({
    Home: {
      screen: Mapa,
      navigationOptions:{
          title: "Mapa",
      },
    },
    Settings: {
      screen: Grafico,
      navigationOptions:{
          title: "Gráfico",
      },
    },
    Mapa: {
      screen: Tabela,
      navigationOptions:{
          title: "Tabela",
      },
    },
    }, {
    defaultNavigationOptions:{
        
    }});

  let Principal = createStackNavigator({ 
    TabNavigator,
    Mapa:{
      screen: Mapa,
      navigationOptions:{
          title: "Mapa",
      },
  },
  }, {
  defaultNavigationOptions:{
      headerTitleAlign: "center",
      headerBackTitleVisible: false,
      headerTintColor: "#FFF",
      headerStyle:{
          backgroundColor: '#000', // apenas para o container superior, sem o texto
      },
  }},);
export default Principal;    

