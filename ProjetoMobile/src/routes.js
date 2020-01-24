import React from 'react';
import { View, Text,Image , StyleSheet, Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from "./pages/Main"
import Principal from "./pages/Teste"
import logo from "./svgfiles/logo.png"


  

export default createAppContainer(createDrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            title: "Página Inicial",
            drawerIcon: ({ tintColor }) => (
                <Image
                source={logo}
                style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        }
    },
    Principal: {
        screen: Principal,
        navigationOptions:{
            title: "Página Secundária"
        }
    }, 
},)


);
  

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
      },

});