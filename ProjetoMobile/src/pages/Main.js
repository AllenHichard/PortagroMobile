import React from "react";
import {View, Text} from "react-native";
import api from "../services/api";

function Main(){
    console.log("Main Executou")
    async function loadDevs(){
        //const response = await api.get("/api/municipios");
        //console.log(response);
    }
    loadDevs();
    return(
        <View>
            <Text>
                Hello World
            </Text>
        </View>
    )  
}
export default Main;    