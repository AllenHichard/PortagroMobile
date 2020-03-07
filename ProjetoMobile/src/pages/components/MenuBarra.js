import React, { Component } from "react";
import {StyleSheet} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHandPointer, faLongArrowAltRight, faCircleNotch } from '@fortawesome/free-solid-svg-icons';



export default class MenuBarra extends React.Component{
    render(){
        return(
            <>
            <FontAwesomeIcon icon={ faHandPointer } 
            size={28} 
            style={styles.iconeHand}
             />
             <FontAwesomeIcon icon={ faLongArrowAltRight } 
            size={14} 
            style={styles.iconeArrow}
             />
             <FontAwesomeIcon icon={ faCircleNotch } 
            size={10} 
            style={styles.iconeCircle}
             />
             </>
        )
    }
};
const styles = StyleSheet.create({
    iconeHand:{
        color: '#fff',
        right: 40,
        zIndex: 9,
        position: 'absolute',
        top: -40,
        left: 20
    },
    iconeArrow:{
        color: '#fff',
        right: 40,
        zIndex: 9,
        position: 'absolute',
        top: -46,
        left: 32.5
    },
    iconeCircle:{
        color: '#fff',
        right: 40,
        zIndex: 9,
        position: 'absolute',
        top: -44,
        left: 24.5
    }

});