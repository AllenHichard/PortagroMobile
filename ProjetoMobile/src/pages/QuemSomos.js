import React, {useState} from "react";
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView} from "react-native";
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
async function carregarEquipe() {
  //const [Images, setImages] = useState([]);
  const Images = []
  Images.push((<Image source={require('../utils/pessoas/'+1+'.jpg')} />))
  Images.push((<Image source={require('../utils/pessoas/'+2+'.jpg')} />))
  Images.push((<Image source={require('../utils/pessoas/'+3+'.jpg')} />))
  Images.push((<Image source={require('../utils/pessoas/'+4+'.jpg')} />))
  Images.push((<Image source={require('../utils/pessoas/'+5+'.jpg')} />))
  Images.push((<Image source={require('../utils/pessoas/'+6+'.jpg')} />))
  Images.push((<Image source={require('../utils/pessoas/'+7+'.jpg')} />))
  Images.push((<Image source={require('../utils/pessoas/'+8+'.jpg')} />))
  Images.push((<Image source={require('../utils/pessoas/'+9+'.jpg')} />))
  Images.push((<Image source={require('../utils/pessoas/'+10+'.jpg')} />))
  Images.push((<Image source={require('../utils/pessoas/'+11+'.jpg')} />))
  Images.push((<Image source={require('../utils/pessoas/'+12+'.jpg')} />))
  Images.push((<Image source={require('../utils/pessoas/'+13+'.jpg')} />))
  Images.push((<Image source={require('../utils/pessoas/'+14+'.jpg')} />))
  Images.push((<Image source={require('../utils/pessoas/'+15+'.jpg')} />))
  Images.push((<Image source={require('../utils/pessoas/'+1+'.png')} />))
  Images.push((<Image source={require('../utils/pessoas/'+2+'.png')} />))
  Images.push((<Image source={require('../utils/pessoas/'+3+'.png')} />))
  Images.push((<Image source={require('../utils/pessoas/'+4+'.png')} />))
  console.log(Images)
}



class QuemSomos extends React.Component {
  
    
    static navigationOptions = {
      tabBarLabel: 'Settings!',
    };
    render(){
      carregarEquipe();
      return(
        <>
           <SafeAreaView style={styles.container}>
              <ScrollView style={styles.scrollView}  showsVerticalScrollIndicator={false}>
                  <View style={styles.Background}> 
                          <Text style={styles.Title}>
                              EQUIPE DE SUPERVISÃO, IDEALIZAÇÃO E APOIO INSTITUCIONAL
                          </Text>
                          <Text style={styles.SubTitle}>
                            O Governo do Estado da Bahia, por iniciativa da Secretaria da Agricultura, Pecuária, Irrigação, Pesca e Aquicultura - SEAGRI, 
                            em colaboração com a Secretaria de Ciência Tecnologia e Inovação - SECTI idealizou o Projeto Sistema de Informações Agropecuárias 
                            do Estado da Bahia, elaborado e desenvolvido pela PPGM/UEFS. O projeto congrega uma equipe colaborativa que reúne Secretarias de Estado, 
                            Universidade e Empresa de Tecnologia.
                          </Text>
                  </View>
                  <View style={styles.Background}>
                        <Image source={require('../utils/pessoas/'+1+'.jpg')}></Image> 
                        <Image source={require('../utils/pessoas/'+2+'.jpg')}></Image>
                        <Image source={require('../utils/pessoas/'+3+'.jpg')}></Image>   
                  </View>
              </ScrollView>
          </SafeAreaView>
        </>

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
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },


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
  }
  

});


export default Principal;    

