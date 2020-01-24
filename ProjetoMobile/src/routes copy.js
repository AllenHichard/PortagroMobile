import React from 'react';
import { View, Text,Image , StyleSheet, Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from "./pages/Main";
import logo from "../assets/logo.png"
import { createDrawerNavigator } from 'react-navigation-drawer';


class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={logo}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    };
  
    render() {
      return (
          <>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
        <Button
          onPress={() => this.props.navigation.closeDrawer()}
          title="Fechar Gaveta"
        />
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Abrir Gaveta"
        />
        </>
      );
    }
  }
  
  class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={logo}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }

 
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

  let mystack = createStackNavigator({
    Main:{
        screen: Main,
        navigationOptions:{
            headerTitle: () => <LogoTitle />,
            headerLeft: () => (
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
    }, 
    )
  
    let MyDrawerNavigator = createDrawerNavigator({
        mystack,
        Home: {
          screen: MyHomeScreen,
        },
        Notifications: {
          screen: MyNotificationsScreen,
        },
      });
    
      const MyApp = createAppContainer(MyDrawerNavigator);




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
    icon: {
        width: 24,
        height: 24,
      },

});

export default MyApp;

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