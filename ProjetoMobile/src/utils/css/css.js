import {StyleSheet} from 'react-native';

const stylesHome = StyleSheet.create({
    statusBar:{
        backgroundColor: "#000000",
        tintColor: "#ffffff"
    },
    mainBar:{
        position: "absolute",
        width: 360,
        height: 34,
        left: 0,
        top: 24
    },
    iconeMenuHamburguer:{
        position:"absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: "#FFFFFF",
    },
    botaoConhecaMaisEComeceAgora:{
        width: 133,
        height: 42,
        backgroundColor: "#002F33",
    },
    titulo:{
        fontSize:24,
        color: "#FFFFFF",
    },
    textoIntermediario:{
        fontSize: 12,
        color: "#FFFFFF",
    },
    slogan:{
        fontSize: 24,
        color: "#002F33"
    }

});

const stylesSideBar = StyleSheet.create({
    iconeFolha:{
        height: 20,
        width: 20,
        backgroundColor: "#002F33"
    },
    labels:{
        fontSize: 24,
        color: "#002F33",
    },
    botao1:{
        borderColor: "#002F33",
        color: "#FFFFFF",
        width: 304,
        height: 42,
    },
    outrosBotoes:{
        borderColor: "#002F33",
        color: "#FFFFFF",
        width: 304,
        height: 42,
        paddingTop: 15,
    },
    fundo:{
        top: 57,
        backgroundColor: "#C0D3D5",
        width: 304,
        height: 583,
    },
});

const stylesTelasSecundarias = StyleSheet.create({
    fundo:{
        backgroundColor: "#C4C4C4",
    },
    botaoVoltar:{
        width: 48,
        height: 48,
        backgroundColor: "#002F33",
    },
    iconeVoltar:{
        width: 34,
        height: 32.41,
        backgroundColor: "#FFFFFF"
    },
    iconesIlustrativos:{
        width: 108,
        height: 108,
        color: "#002F33"
    },
    labelPrincipal:{
        color: "#002F33",
        fontSize: 24
    },
    imagemPerfil:{
        width: 102,
        height: 111,
        borderRadius: 77,
    }
});

const styles = {
    stylesHome,
    stylesSideBar, 
    stylesTelasSecundarias
}

export default styles;