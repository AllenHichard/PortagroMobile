import React from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import HomeBackground from "../utils/Image/home_background.png"



const Placeholder = ({ text }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{text}</Text>
    </View>
);

class Contato extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Settings!',
    };
  
    render() {
      return (
        <>
        <Image
                    source={HomeBackground}
                    style={styles.BackgroundImage}
                />
        <View style={styles.searchForm}>
          
          <View style={{paddingBottom:15}}>
            <Text style={styles.textoDeCampo}>Nome:</Text>
            <TextInput
                    style={styles.searchInput}
                    placeholder="Exemplo: Maria"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                     // onChangeText={text => setTechs(text)}
                />
          </View>
          <View style={{paddingBottom:15}}>
          <Text style={styles.textoDeCampo}>Email:</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Exemplo: seuemail@gmail.com"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    autoCompleteType="email"
                    keyboardType="email-address"
                     // onChangeText={text => setTechs(text)}
                />
          </View>
          <View style={{paddingBottom:15}}>
          <Text style={styles.textoDeCampo}>Comentário:</Text>
                <TextInput
                    style={styles.comentInput}
                    autoCapitalize="sentences"
                    autoCorrect={false}
                    multiline={true}
                    
                     // onChangeText={text => setTechs(text)}
                />
          </View>
          <View>
          <TouchableOpacity style={styles.Button}>
                    <Text style={styles.textoButton}>Enviar</Text>  
                </TouchableOpacity>
          </View>
        </View>
        </>
      );
    }
  }

  let Principal = createStackNavigator({ 
    Contato:{
      screen: Contato,
      navigationOptions:{
          title: "Contato",
      },
  },
});

const styles = StyleSheet.create({
  searchForm: {
    position: "absolute",
    top: 20, // bottom vai pra baixo
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: "column",
    zIndex: 5,
  },

  searchInput: {
      flex: 1,
      height: 50,
      backgroundColor: '#FFF',
      color: "#333",
      borderRadius: 25,
      paddingHorizontal: 20,
      fontSize: 16,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: {
          width: 4,
          height: 4,
      },
      elevation: 2,
  },
  comentInput: {
    flex: 1,
    height: 140,
    backgroundColor: '#FFF',
    color: "#333",
    borderRadius: 25,
    paddingVertical:10,          
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
        width: 4,
        height: 4,
    },
    elevation: 2,
  },
  textoDeCampo:{
    paddingHorizontal:20,
    fontSize:16,
    paddingBottom: 5,
    color:"#FFF"
  },
  Button: {
    flex:1,
    height: 50,
    backgroundColor: "#002F33",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
        width: 4,
        height: 4,
    },
    elevation: 2,
  },

  BackgroundImage: {
    flex: 1,
  },

  textoButton:{
    color: "#FFF",
    fontSize: 16
  }
})
export default Principal;    

