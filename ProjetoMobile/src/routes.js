import React from 'react';
import { View, Text,Image , StyleSheet, Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from "./pages/Main"
import Mapas from "./pages/Mapas"
import ComoFunciona from "./pages/ComoFunciona"
import QuemSomos from "./pages/QuemSomos"
import Contato from "./pages/Contato"

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
    Mapas: {
        screen: Mapas,
        navigationOptions:{
            title: "Mapas"
        }
    },
    
    ComoFunciona: {
        screen: ComoFunciona,
        navigationOptions:{
            title: "Como Funciona?"
        }
    },

    QuemSomos: {
        screen: QuemSomos,
        navigationOptions:{
            title: "Quem Somos?"
        }
    },

    Contato: {
        screen: Contato,
        navigationOptions:{
            title: "Contato"
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