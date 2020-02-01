import React from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';




const Placeholder = ({ text }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{text}</Text>
    </View>
);

class ComoFunciona extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Settings!',
    };
  
    render() {
      return (
        <>
           <SafeAreaView style={styles.Background}>
              <ScrollView showsVerticalScrollIndicator={false}>
              
                  <View style={styles.divImagemSolo}>
                    <Icon name="usb" size={150} color="#002F33" />
                    <Text style={styles.legendaDasImagens}>Coletamos dados de diversas fontes</Text>
                  </View>
                  <View style={styles.divImagemDuo}>
                    <View style={styles.viewIconesDuo}>
                      <Icon name="database" size={150} color="#002F33" />
                      <Text style={styles.legendaDasImagens}>Utilizamos inteligência artificial para 
                      processar essas informações</Text>
                    </View>
                    <View style={styles.viewIconesDuo}>
                    <Icon name="line-chart" size={150} color="#002F33" />
                      <Text style={styles.legendaDasImagens}>Entregamos os dados tratados com fácil visualização</Text>
                    </View>
                </View>
                  
                    
                
              </ScrollView>
          </SafeAreaView>
        </>
      );
    }
  }

let Principal = createStackNavigator({ 
      ComoFunciona:{
        screen: ComoFunciona,
        navigationOptions:{
            title: "Como Funciona?",
        },
    },
  });

  const styles = StyleSheet.create({
    
    
  
    Title:{
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: "Roboto",
        fontSize: 20,
  
    },
  
    Background: {
        flex: 1,
        backgroundColor: "#C4C4C4",
        paddingTop: 85
    },
  
    SubTitle:{
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      fontFamily: "Roboto",
      fontSize: 14,
    },
  
    Componente: {
      width: 30,
      height: 30,
      alignContent: "center",
      justifyContent: "center",
      paddingRight: 10, 
    },

    divImagemSolo:{
      alignItems: "center",
      
    },
    imagemSolo:{
      width: 200,
      height: 200,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: "#FFF",
    },
    divImagemDuo:{
      alignItems:"center",
      flexDirection:"row",
    },

    imagemDuo:{
      borderRadius: 100,
      borderWidth: 2,
      borderColor: "#FFF",
    },

    legendaDasImagens:{
      color:"#002F33",
      fontSize: 20,
      fontFamily:"Roboto",
      paddingTop: 20

    },

    viewIconesDuo:{
      flex:1,
      paddingHorizontal: 20,
      paddingVertical:40
    }
  
  });
export default Principal;    

