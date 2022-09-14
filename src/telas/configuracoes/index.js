import React from "react";
import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import CampoDeTexto from "./complementos/input";
import { estilos } from "./complementos/estilos";
import useTextos from '../../hooks/useTextos';

import Icon from 'react-native-vector-icons/FontAwesome';
import Topo from "./complementos/topoConfig";
import backgroud from '../../assets/backgroud.png'
import { useNavigation } from "@react-navigation/native";

export default function SettingsScreen() {
  const navigation = useNavigation();
  const { caixaPrincipal, detalhesCaixaPrincipal, textoBotao } = useTextos();
  
  return <ImageBackground style={estilos.backgroud} source={backgroud} resizeMode="cover">
    <ScrollView>
      <Topo />
      <View style={estilos.caixaPricnipal}>
        <Text style={estilos.tituloCaixaPrincipal}>{ caixaPrincipal }</Text>
        <Text style={estilos.detalhesCaixaPrincipal}>{ detalhesCaixaPrincipal }</Text>
        <CampoDeTexto />
        <TouchableOpacity>
          <Icon.Button name="sign-in" backgroundColor={'#008000'} size={30} margin={2} onPress={() => navigation.navigate('Home')} >
            <Text style={estilos.textoBotao}>{ textoBotao }</Text>
          </Icon.Button>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </ImageBackground>
  

}
