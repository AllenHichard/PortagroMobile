import React from "react";
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import logo from "../svgfiles/logo.png";
import DetailsScreen from "./DetailsScreen";
import HomeBackground from "../utils/Image/home_background.png"
import {MaterialIcons} from  '@expo/vector-icons'
import css from "../utils/css/css"

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
            <> 
                <View style={styles.DivTitulo}>
                    <Text style={css.stylesHome.titulo}>
                        
                    </Text>
                </View>
                <View style={styles.DivIntermediaria}>
                    <Text style={css.stylesHome.textoIntermediario}>
                    
                    </Text>
                </View>
                <Image
                    source={HomeBackground}
                    style={styles.BackgroundImage}
                />
                <View style={styles.DivButton}>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.textoButton}>Conheça mais</Text>  
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button}>
                    <Text  style={styles.textoButton}>Comece agora</Text>  
                </TouchableOpacity>
                </View>
            </>
        )
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

        BackgroundImage: {
            flex: 1,
        },

        DivTitulo: {
            position: "absolute",
            top: 20, // bottom vai pra baixo
            left: 20,
            right: 20,
            zIndex: 5,
            flexDirection: "row",
        },

        DivIntermediaria: {
            position: "absolute",
            top: "30%", // bottom vai pra baixo
            left: 20,
            right: 20,
            zIndex: 5,
            
        },
        teste: {
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
        },

        DivButton: {
            position: "absolute",
            bottom: 20, // bottom vai pra baixo
            left: 20,
            right: 20,
            zIndex: 5,
            flexDirection: "row",
        },
    
        Button: {
            flex: 1,
            height: 50,
            backgroundColor: "#002F33",
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 15,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowOffset: {
                width: 4,
                height: 4,
            },
            elevation: 2,
        },

        textoButton:{
            color: "#FFF",
            fontSize: 16
        }

    });






export default Home;    

/*
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => this.props.navigation.navigate('Details', {nome: "Usuário"})}
            />
            <Placeholder text="A!" />
            
        </View> 
        );
*/