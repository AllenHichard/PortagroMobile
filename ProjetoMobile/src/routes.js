import React from 'react';
import { View, Text,Image , StyleSheet, Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from "./pages/Main";
import logo from "../assets/logo.png"


class LogoTitle extends React.Component {
    render() {
      return (
        <View style={styles.Escopo}>
            <Image
                source={logo}
                style={styles.Logo}
            />
            <Text style={styles.Title}>
                Portal do Agronegócio
            </Text>
        </View>
      );
    }
  }
  

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions:{
                headerTitle: () => <LogoTitle />,
                headerRight: () => (
                    <Button
                      onPress={() => alert('This is a button!')}
                      title="Info"
                      color="#fff"
                    />
                  ),
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


const styles = StyleSheet.create({
    Escopo: {
        flexDirection: "row",
    },
    
    Logo: {
        width: 30,
        height: 30,
        alignContent: "center",
        justifyContent: "center",
        paddingRight: 10, 
    },

    Title:{
        color:"#FFF",
        alignContent: "center",
        justifyContent: "center",
        paddingLeft: 10,
        fontFamily: "Roboto",
        fontSize: 20,

    },

});

export default Routes;

/**
 * 
 */






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