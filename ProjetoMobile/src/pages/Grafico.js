import React from 'react';
import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

class Grafico extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Graficos!</Text>
        </View>
      );
    }
  }

  export default Grafico