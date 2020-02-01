import React, {useState} from "react";
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView, FlatList} from "react-native";
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
function carregarEquipe() {
  //const [Images, setImages] = useState([]);
  
  
}



class QuemSomos extends React.Component {
    //Imagens = carregarEquipe();
    

    static navigationOptions = {
      tabBarLabel: 'Settings!',
    };

    

    

    render(){
      const Imagens = {
        data: [
          { id: 0, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+1+'.jpg')} /> },
          { id: 1, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+7+'.jpg')} /> },
          { id: 2, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+3+'.jpg')} /> },
          { id: 3, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+4+'.jpg')} /> },
          { id: 4, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+5+'.jpg')} /> },
          { id: 5, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+6+'.jpg')} /> },
          { id: 6, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+2+'.jpg')} /> },
          { id: 7, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+8+'.jpg')} /> },
          { id: 8, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+9+'.jpg')} /> },
          { id: 9, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+10+'.jpg')} /> },
          { id: 10, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+11+'.jpg')} /> },
          { id: 11, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+12+'.jpg')} /> },
          { id: 12, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+13+'.jpg')} /> },
          { id: 13, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+14+'.jpg')} /> },
          { id: 14, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+15+'.jpg')} /> },
          { id: 15, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+1+'.png')} /> },
          { id: 16, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+2+'.png')} /> },
          { id: 17, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+3+'.png')} /> },
          { id: 18, imagem: <Image style={styles.avatar} source={require('../utils/pessoas/'+4+'.png')} /> },
         
        ]
      };
      const temp = {}

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
                      {Imagens.data.map( figura =>{
                         if(figura.id % 5 == 0 && figura.id+4 < Imagens.data.length){
                            return(
                              <>
                              <View style={styles.par}>
                                    <View style={styles.avatarEsquerdo}>
                                         {figura.imagem}
                                    </View>
                                    <View  style={styles.centro}>
                                          {Imagens.data[figura.id+1].imagem}
                                    </View>
                                </View>
                              <View style={styles.par}>
                                    <View style={styles.avatarEsquerdo}>
                                         {Imagens.data[figura.id+2].imagem}
                                    </View>
                                    <View  style={styles.centro}>
                                          {Imagens.data[figura.id+3].imagem}
                                    </View>
                                    <View  style={styles.avatarDireito}>
                                          {Imagens.data[figura.id+4].imagem}
                                    </View>
                                </View>
                              </>
                            ) 
                          } else if (figura.id+1 == Imagens.data.length ) {
                            return(

                              <View style={styles.par}>
                                {figura.imagem}
                              </View>
                            )} 
                      })}
                     </View>
                     <View style={styles.Background}> 
                          <Text style={styles.tituloRodape}>
                              EQUIPE DE COORDENAÇÃO E DESENVOLVIMENTO
                          </Text>
                          <Text style={styles.subTituloRodape}>
                                O Programa de Pós-Graduação em Modelagem em Ciências da Terra e do Ambiente da UEFS desenvolve o Projeto em interação 
                                com o ecossistema local de inovação articulado pelo Núcleo de Inovação Tecnológica da UEFS.
                          </Text>
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
},{
  defaultNavigationOptions:{
      headerTitleAlign: "center",
      headerBackTitleVisible: false,
      headerTintColor: "#FFF",
      headerStyle:{
          backgroundColor: '#000', // apenas para o container superior, sem o texto
      },
  },
},);



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#C4C4C4',
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFF',
  },

  avatarEsquerdo: {
    paddingRight: 20,

  },
  avatarDireito: {
    paddingLeft: 20,
    
  },

  alone: {
    justifyContent: "center",
    alignItems: "center",
  },

  par: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
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

/*
 <View style={styles.alone}>
                          <Image style={styles.avatar} source={require('../utils/pessoas/'+1+'.jpg')}></Image> 
                      </View> 
                      



const Images = {}
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
  return Images
*/