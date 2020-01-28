import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import css from "../utils/css/css"

/*
const Placeholder = ({ text }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{text}</Text>
    </View>
);
render() {
  return <Placeholder text="B!" />;
}*/

/*
<View style={styles.DivTitulo}>
<Text style={css.stylesHome.titulo}>
    aaa
</Text>
</View>
<View style={styles.DivIntermediaria}>
<Text style={css.stylesHome.textoIntermediario}>
  aaa
</Text>
</View>
*/


class QuemSomos extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Settings!',
    };
    render(){
      return(
        <View style={styles.Background}> 
                
        </View>
      )
    }
  
    
  }

  let Principal = createStackNavigator({ 
    QuemSomos:{
      screen: QuemSomos,
      navigationOptions:{
          title: "Quem Somos?",
      },
  },
});



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

  Background: {
      flex: 1,
      backgroundColor: "#C4C4C4",
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


export default Principal;    

