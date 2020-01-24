import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class DetailsScreen extends React.Component {
    render() {
      const githubUsername = this.props.navigation.getParam('nome')
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text>{githubUsername}</Text>
        </View>
      );
    }
  }

export default DetailsScreen;