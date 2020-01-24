import React from "react";
import {View, Text, StyleSheet, Image, Button} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import logo from "../svgfiles/logo.png";
import DetailsScreen from "./DetailsScreen";


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


const Placeholder = ({ text }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{text}</Text>
    </View>
);

class Main extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Home!',
    };
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => this.props.navigation.navigate('Details', {nome: "Usuário"})}
            />
            <Placeholder text="A!" />
        </View> 
        );
    }
}

let Home = createStackNavigator({
    Main:{
        screen: Main,
        navigationOptions:{
            headerTitle: () => <LogoTitle />,
        },
    }, Details : {
        screen: DetailsScreen,
    }
    
    },{
        defaultNavigationOptions:{
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
            headerTintColor: "#FFF",
            headerStyle:{
                backgroundColor: '#000', // apenas para o container superior, sem o texto
            },
        },
    },
    {
        initialRouteName: 'Main',
    }
)   




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






export default Home;    

