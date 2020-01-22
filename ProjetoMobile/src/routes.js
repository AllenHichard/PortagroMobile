import React from 'react';
import { View, Text,Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from "./pages/Main";
import logo from "../assets/icon.png"


class LogoTitle extends React.Component {
    render() {
      return (
        <>
            <Image
                source={logo}
                style={{ width: 30, height: 30 }}
            />
            <Text style={{color:"#FFF"}}>
                Portal do Agronegócio
            </Text>
        </>
      );
    }
  }
  

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions:{
                headerTitle: () => <LogoTitle />,
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
            },
        })
);

export default Routes;








/*const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions:{
                title: "DevRadar"
            },
        },
        Profile:{
            screen: Profile,
            navigationOptions:{
                title: "Perfil no Github"
            },
        },
    },{
        defaultNavigationOptions:{
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
            headerTintColor: "#FFF",
            headerStyle:{
                backgroundColor: '#7D40E7', // apenas para o container superior, sem o texto
            },
        },
    }) 
);*/