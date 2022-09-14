import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import logoAquitem from '../../../assets/logoPrincipal.png';
import { Image, View, Text } from 'react-native';
import { estilos } from './estilos';
import useTextos from '../../../hooks/useTextos';

export default function Topo(){
    const { descricaoTopo } = useTextos();

    return <View style={estilos.caixaPrincipalTopo}>
        <Image source={logoAquitem} style={estilos.logo} />
        <Text style={estilos.titulo}>{ descricaoTopo }</Text>
        <Icon name="gamepad" color={'#9400D3'} size={40} />
    </View>
}
